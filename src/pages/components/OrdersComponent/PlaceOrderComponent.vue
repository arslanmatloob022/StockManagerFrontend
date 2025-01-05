<script setup lang="ts">
import { useProducts } from "/@src/stores/products";
import { useNotyf } from "/@src/composables/notyf";
import { useApi } from "/@src/composables/useApi";
import moment from "moment";
import { useStore } from "/@src/stores/useStore";

const store = useStore();
const api = useApi();
const productsStore = useProducts();
const notyf = useNotyf();
const panels = usePanels();
const openOrderModal = ref(false);
const props = withDefaults(
  defineProps<{
    activeTab?: "project" | "team" | "tasks";
  }>(),
  {
    activeTab: "project",
  }
);

const productCount = ref(0);
const tab = ref(props.activeTab);
const filterTasks = ref(0);
import { popovers } from "/@src/data/users/userPopovers";
import { generateOrderNumber } from "/@src/commonScripts/useSupportElements";
import { string } from "zod";
import PlaceOrderInfoModal from "./PlaceOrderInfoModal.vue";
import { convertToFormData } from "/@src/commonScripts/commonComponents";

const data = ref([
  // {
  //   name: "",
  //   quantity: 0,
  //   price: 0,
  // },
]);

const orderData = ref({
  customer_name: "",
  customer_email: "",
  shop_name: "",
  status: "",
  discount: "",
  description: "",
  orderNumber: "",
  date_issued: "",
  paymentDate: "",
  totalAmount: 0,
  totalItems: 0,
  // orderItems: [
  //   {
  //     product: "Free",
  //     quantity: "12",
  //     batch: "23132414",
  //     store: store.loggedStore.id,
  //     price_per_unit: 678,
  //     price: 110,
  //     subtotal: 40,
  //   },
  // ],
});

const vatRate = 0;
const totalData = computed(() => {
  const subtotal = data.value.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  const vatValue = subtotal * vatRate;
  const total = subtotal + vatValue;

  return [
    {
      label: "Subtotal",
      value: subtotal,
    },
    {
      label: "Taxes",
      value: vatValue,
    },
    {
      label: "Total",
      value: total,
    },
  ];
});

const usdFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "PKR",
});

const columns = {
  name: {
    label: "Description",
    grow: true,
    inverted: true,
  },
  quantity: "Quantity",
  price: {
    label: "Rate",
    inverted: true,
    format: (value: any) => usdFormatter.format(value),
  },
  subtotal: {
    label: "Subtotal",
    inverted: true,
    format: (value: any, row: any) =>
      usdFormatter.format(row.quantity * row.price),
  },
  action: {
    label: "Action",
    inverted: true,
    remove: (value: any, row: any, rowIndex: number) => {
      data.value.splice(rowIndex, 1);
    },
  },
} as const;

const totalColumns = {
  label: {
    label: "",
    grow: "xl",
    align: "end",
  },
  value: {
    label: "",
    bold: true,
    format: (value: any) => usdFormatter.format(value),
  },
} as const;
const participants = [
  { picture: "https://media.cssninja.io/content/avatars/7.jpg" },
  { picture: "https://media.cssninja.io/content/avatars/9.jpg" },
  { picture: "https://media.cssninja.io/content/avatars/12.jpg" },
  { picture: "/images/avatars/svg/vuero-1.svg" },
  { picture: "https://media.cssninja.io/content/avatars/25.jpg" },
  { picture: "https://media.cssninja.io/content/avatars/25.jpg" },
  { picture: "https://media.cssninja.io/content/avatars/25.jpg" },
];
const orderNumber = ref("");
const formattedDate = ref("");
const addProduct = (product: any) => {
  if (!data.value.find((p) => p.id === product.id)) {
    data.value.push({
      ...product,
      quantity: 1,
    });
  } else {
    notyf.info("Product already added");
  }
};

const placeOrder = async () => {
  try {
    const items = JSON.stringify(data.value);
    // delete orderData.value.orderItems;
    const formData = convertToFormData(orderData.value, "");
    formData.append("orderItems", items);
    const resp = await api.post("/order/create-order/", formData);
    notyf.success("Order placed successfully");
  } catch (Err) {
    console.log(Err);
    notyf.error("Something went wrong");
  }
};

const removeProduct = (product: any) => {
  data.value = data.value.filter((p) => p.id !== product.id);
};

const openOrderModalHandler = () => {
  openOrderModal.value = !openOrderModal.value;
};
onMounted(() => {
  productsStore.getStoreProducts();
  orderData.value.orderNumber = generateOrderNumber();
  const currentDate = moment().format("YYYY-MM-DD");
  orderData.value.dateIssued = moment(currentDate).format("ddd, MMMM DD YYYY");
});
</script>

<template>
  <div>
    <div class="project-details">
      <div class="tabs-wrapper is-triple-slider">
        <div class="tab-content is-active">
          <div class="columns project-details-inner">
            <div class="column is-8">
              <div class="invoice-wrapper">
                <div class="invoice-header">
                  <div class="left">
                    <h3>Order {{ orderData.orderNumber }}</h3>
                  </div>
                  <div class="right">
                    <div class="controls">
                      <a class="action">
                        <VIcon icon="lucide:printer" />
                      </a>
                      <a class="action">
                        <VIcon icon="lucide:download-cloud" />
                      </a>
                      <a class="action">
                        <VIcon
                          @click="openOrderModalHandler"
                          icon="lucide:pen"
                        />
                      </a>
                      <!-- <a class="action">
                      <VIcon icon="lucide:arrow-left" />
                    </a> -->
                    </div>
                  </div>
                </div>
                <div class="invoice-body">
                  <div class="invoice-card">
                    <div class="invoice-section is-flex is-bordered">
                      <div class="meta">
                        <h3>
                          {{
                            orderData.shop_name ? orderData.shop_name : "N/A"
                          }}
                        </h3>
                        <span>{{
                          orderData.customer_name
                            ? orderData.customer_name
                            : "N/A"
                        }}</span>
                        <span>{{
                          orderData.customer_email
                            ? orderData.customer_email
                            : "N/A"
                        }}</span>
                      </div>
                      <div class="end">
                        <h3>
                          Order#
                          {{
                            orderData.orderNumber
                              ? orderData.orderNumber
                              : "N/A"
                          }}
                        </h3>
                        <span
                          >Issued:
                          {{
                            orderData.date_issued
                              ? orderData.date_issued
                              : "N/A"
                          }}</span
                        >
                        <span
                          >Payment Due:
                          {{
                            orderData.paymentDate
                              ? orderData.paymentDate
                              : "N/A"
                          }}</span
                        >
                      </div>
                    </div>

                    <div class="invoice-section is-flex is-bordered">
                      <div class="right is-left">
                        <h3>Description</h3>
                        <p>
                          {{
                            orderData.description
                              ? orderData.description
                              : "N/A"
                          }}
                        </p>
                      </div>
                    </div>
                    <div v-if="data.length > 0" class="invoice-section">
                      <VFlexTable
                        :data="data"
                        :columns="columns"
                        rounded
                        reactive
                      >
                        <template #body-cell="{ column, row }">
                          <template v-if="column.key === 'quantity'">
                            <VControl>
                              <VField>
                                <VInput
                                  v-model="row[column.key]"
                                  type="number"
                                  min="0"
                                />
                              </VField>
                            </VControl>
                          </template>
                        </template>
                      </VFlexTable>

                      <VFlexTable
                        subtable
                        :data="totalData"
                        :columns="totalColumns"
                      >
                        <template #body-cell="{ column, value, row }">
                          <template v-if="column.key === 'label'">
                            <span class="table-label">{{ value }}</span>
                          </template>
                          <template
                            v-else-if="
                              column.key === 'value' && row.label === 'Total'
                            "
                          >
                            <span class="table-total is-bigger">{{
                              value
                            }}</span>
                          </template>
                          <template v-else>
                            <span class="table-value">{{ value }}</span>
                          </template>
                        </template>
                      </VFlexTable>
                    </div>
                    <div v-else class="invoice-section">
                      <VMessage color="info">
                        No product added yet in the order, please add product
                        from the list.
                      </VMessage>
                    </div>
                    <div class="is-flex">
                      <VButton @click="placeOrder" class="right is-right"
                        >Complete Order</VButton
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="column is-4">
              <div class="m-b-30 mt-4">
                <h4 class="title is-5">Product List</h4>
              </div>

              <div class="side-card">
                <h4>Select Products</h4>

                <VBlock
                  v-for="product in productsStore.productList"
                  :key="product.id"
                  center
                  :title="product.name"
                  subtitle="Design Software"
                >
                  <template #icon>
                    <VAvatar
                      size="small"
                      picture="/images/icons/stacks/sketch.svg"
                    />
                  </template>
                  <template #action>
                    <!-- <span class="mr-2"> ({{ productCount }}) </span> -->
                    <VTag
                      @click="removeProduct(product)"
                      color="danger"
                      label="Remove"
                      rounded
                      class="pointer"
                    />
                    <VTag
                      @click="addProduct(product)"
                      color="green"
                      class="ml-1 pointer"
                      label="Add"
                      rounded
                    />
                  </template>
                </VBlock>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PlaceOrderInfoModal
      v-if="openOrderModal"
      :open-place-order-modal="openOrderModal"
      :orderData="orderData"
      @update:close-modal-handler="openOrderModal = false"
    />
  </div>
</template>

<style lang="scss">
@import "/@src/scss/abstracts/all";

.is-navbar {
  .project-details {
    padding-top: 30px;
  }
}

.project-details {
  .tabs-wrapper {
    .tabs-inner {
      .tabs {
        margin: 0 auto;
        background: var(--white);
      }
    }
  }

  .project-details-inner {
    padding: 20px 0;

    .project-details-card {
      @include vuero-s-card;

      padding: 40px;

      .card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        .title-wrap {
          h3 {
            font-family: var(--font-alt);
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--dark-text);
            line-height: 1.2;
            transition: all 0.3s; // transition-all test
          }
        }
      }

      .project-overview {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px 0;

        p {
          max-width: 420px;
        }
      }

      .project-features {
        display: flex;
        padding: 25px 0;
        border-top: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);
        border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 3%);

        .project-feature {
          margin-inline-end: 20px;
          width: calc(25% - 20px);

          .lnil {
            font-size: 1.6rem;
            color: var(--primary);
            margin-bottom: 8px;
          }

          h4 {
            font-family: var(--font-alt);
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--dark);
          }

          p {
            line-height: 1.2;
            font-size: 0.85rem;
            color: var(--light-text);
            margin-bottom: 0;
          }
        }
      }

      .project-files {
        padding: 20px 0;

        h4 {
          font-family: var(--font-alt);
          font-weight: 600;
          font-size: 0.8rem;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 12px;
        }

        .file-box {
          display: flex;
          align-items: center;
          padding: 8px;
          background: var(--white);
          border: 1px solid transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s; // transition-all test

          &:hover {
            border-color: color-mix(in oklab, var(--fade-grey), black 3%);
            box-shadow: var(--light-box-shadow);
          }

          img {
            display: block;
            width: 48px;
            min-width: 48px;
            height: 48px;
          }

          .meta {
            margin-inline-start: 12px;
            line-height: 1.3;

            span {
              display: block;

              &:first-child {
                font-family: var(--font-alt);
                font-size: 0.9rem;
                font-weight: 600;
                color: var(--dark-text);
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--light-text);

                .fas {
                  position: relative;
                  top: -3px;
                  font-size: 0.3rem;
                  color: var(--light-text);
                  margin: 0 4px;
                }
              }
            }
          }

          .dropdown {
            margin-inline-start: auto;
          }
        }
      }
    }

    .side-card {
      @include vuero-s-card;

      padding: 40px;
      margin-bottom: 1.5rem;

      h4 {
        font-family: var(--font-alt);
        font-weight: 600;
        font-size: 0.8rem;
        text-transform: uppercase;
        color: var(--primary);
        margin-bottom: 16px;
      }
    }

    .project-team-card {
      @include vuero-s-card;

      padding: 40px;
      max-width: 940px;
      display: block;
      margin: 0 auto;

      .column {
        padding: 1.5rem;

        &:nth-child(odd) {
          border-inline-end: 1px solid
            color-mix(in oklab, var(--fade-grey), black 3%);
        }

        &.has-border-bottom {
          border-bottom: 1px solid
            color-mix(in oklab, var(--fade-grey), black 3%);
        }
      }
    }

    .task-grid {
      .grid-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;

        h3 {
          font-family: var(--font-alt);
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--dark-text);
          line-height: 1.2;
        }

        .filter {
          display: flex;
          align-items: center;
          background: var(--white);
          padding: 8px 24px;
          border-radius: 100px;

          > span {
            font-family: var(--font-alt);
            font-size: 0.85rem;
            font-weight: 600;
            color: var(--dark-text);
            margin-inline-end: 20px;
          }

          .multiselect {
            min-width: 140px;
            border: none;
          }
        }
      }

      .task-card {
        @include vuero-s-card;

        min-height: 200px;
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px;
        cursor: pointer;
        transition: all 0.3s; // transition-all test

        &:hover {
          transform: translateY(-5px);
          box-shadow: var(--light-box-shadow);
        }

        .title-wrap {
          h3 {
            font-size: 1.1rem;
            font-family: var(--font-alt);
            font-weight: 600;
            color: var(--dark-text);
            line-height: 1.2;
            margin-bottom: 4px;
          }

          span {
            font-family: var(--font);
            font-size: 0.9rem;
            color: var(--light-text);
          }
        }

        .content-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .left {
            .avatar-stack {
              margin-bottom: 6px;
            }

            .attachments {
              display: flex;
              align-items: center;

              .iconify {
                font-size: 15px;
                color: var(--light-text);
              }

              span {
                margin-inline-start: 2px;
                font-size: 0.9rem;
                font-family: var(--font);
                color: var(--light-text);
              }
            }
          }
        }
      }
    }
  }
}

.is-dark {
  .project-details {
    .project-details-inner {
      .project-details-card {
        @include vuero-card--dark;

        .card-head {
          .title-wrap {
            h3 {
              color: var(--dark-dark-text) !important;
            }
          }
        }

        .project-features {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          .project-feature {
            .iconify {
              color: var(--primary);
            }

            h4 {
              color: var(--dark-dark-text);
            }
          }
        }

        .project-files {
          h4 {
            color: var(--primary);
          }

          .file-box {
            background: color-mix(in oklab, var(--dark-sidebar), white 3%);

            &:hover,
            &:focus {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 10%);
            }

            .meta {
              span {
                &:first-child {
                  color: var(--dark-dark-text);
                }
              }
            }
          }
        }
      }

      .side-card {
        @include vuero-card--dark;

        h4 {
          color: var(--primary);
        }
      }

      .project-team-card {
        @include vuero-card--dark;

        .column {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
        }
      }

      .task-grid {
        .grid-header {
          h3 {
            color: var(--dark-dark-text);
          }

          .filter {
            background: color-mix(
              in oklab,
              var(--dark-sidebar),
              white 1%
            ) !important;
            border-color: color-mix(
              in oklab,
              var(--dark-sidebar),
              white 4%
            ) !important;

            > span {
              color: var(--dark-dark-text);
            }
          }
        }

        .task-card {
          @include vuero-card--dark;

          .title-wrap {
            h3 {
              color: var(--dark-dark-text);
            }
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .project-details {
    .project-details-inner {
      .project-details-card {
        padding: 30px;

        .project-overview {
          flex-direction: column;

          p {
            margin-bottom: 20px;
          }
        }

        .project-features {
          flex-wrap: wrap;

          .project-feature {
            width: calc(50% - 20px);
            text-align: center;
            margin: 0 10px;

            &:first-child,
            &:nth-child(2) {
              margin-bottom: 20px;
            }
          }
        }
      }

      .project-team-card {
        padding: 30px;

        .column {
          border-inline-end: none !important;
        }
      }
    }
  }
}

@media only screen and (width >= 768px) and (width <= 1024px) and (orientation: portrait) {
  .project-details {
    .project-details-inner {
      .project-details-card {
        .project-files {
          .columns {
            display: flex;

            .column {
              min-width: 50%;
            }
          }
        }
      }

      .project-team-card {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }
      }

      .task-grid {
        .columns {
          display: flex;

          .column {
            min-width: 50%;
          }
        }
      }
    }
  }
}
</style>
<style lang="scss">
@import "/@src/scss/abstracts/all";

/* ==========================================================================
4. Invoice
========================================================================== */
.invoice-wrapper {
  max-width: 740px;
  margin: 0 auto;

  &.is-navbar {
    margin-top: 30px;
  }

  .invoice-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);

    .left {
      h3 {
        font-family: var(--font-alt);
        font-size: 1.2rem;
        font-weight: 600;
        color: var(--dark-text);
      }
    }

    .right {
      .controls {
        display: flex;

        .action {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 32px;
          width: 32px;
          min-width: 32px;
          border-radius: var(--radius-rounded);
          color: var(--light-text);
          margin: 0 4px;
          transition: all 0.3s; // transition-all test

          &:hover {
            color: var(--dark-text);
            background: color-mix(in oklab, var(--fade-grey), black 4%);
          }

          .iconify {
            height: 16px;
            width: 16px;
            stroke-width: 1.6px;
          }
        }
      }
    }
  }

  .invoice-body {
    .invoice-card {
      @include vuero-s-card;

      padding: 0;

      .invoice-section {
        padding: 40px;

        &.is-flex {
          display: flex;
          align-items: center;

          .meta {
            margin-inline-start: 16px;
            font-family: var(--font);

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }

          .end {
            margin-inline-start: auto;
            text-align: inset-inline-end;

            &.is-left {
              text-align: inset-inline-start;
              max-width: 300px;

              p {
                padding-top: 4px;
                font-size: 0.95rem;
                line-height: 1.2;
              }
            }

            h3 {
              font-family: var(--font-alt);
              font-size: 1.1rem;
              font-weight: 600;
              line-height: 1;
            }

            span {
              display: block;
              color: var(--light-text);
              font-weight: 400;
              font-size: 0.9rem;
            }
          }
        }

        &.is-bordered {
          border-bottom: 1px solid
            color-mix(in oklab, var(--fade-grey), black 3%);
        }

        .v-avatar {
          &.is-customer {
            border: 1.6px solid color-mix(in oklab, var(--fade-grey), black 3%);
            border-radius: var(--radius-rounded);
            box-shadow: var(--light-box-shadow);
          }
        }

        .flex-table {
          .flex-table-header {
            span {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }

          .flex-table-item {
            .flex-table-cell {
              &:not(:first-child) {
                justify-content: flex-end;
              }
            }
          }
        }
      }
    }
  }
}

/* ==========================================================================
5. Invoice Dark mode
========================================================================== */

.is-dark {
  .invoice-wrapper {
    .invoice-header {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 20%);

      .left {
        h3 {
          color: var(--dark-dark-text);
        }
      }

      .right {
        .controls {
          .action {
            border: 1px solid transparent;

            &:hover,
            &:focus {
              background: color-mix(in oklab, var(--dark-sidebar), white 2%);
              border-color: var(--primary);
              color: var(--primary);
            }
          }
        }
      }
    }

    .invoice-body {
      .invoice-card {
        @include vuero-card--dark;
      }
    }

    .invoice-section {
      border-color: color-mix(
        in oklab,
        var(--dark-sidebar),
        white 12%
      ) !important;

      &.is-flex {
        .v-avatar {
          border-color: color-mix(
            in oklab,
            var(--dark-sidebar),
            white 12%
          ) !important;
        }

        .meta,
        .end {
          h3 {
            color: var(--dark-dark-text);
          }
        }
      }
    }
  }
}

@media only screen and (width <= 767px) {
  .invoice-wrapper {
    .invoice-section {
      &.is-flex {
        flex-direction: column;
        text-align: center;

        .v-avatar {
          margin-bottom: 16px;
        }

        .meta {
          margin-inline-start: 0 !important;
        }

        .end {
          margin: 16px auto 0;
          text-align: center !important;
        }
      }

      .flex-table {
        .flex-table-item {
          .flex-table-cell {
            &.is-grow {
              > span {
                margin-inline-start: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>
