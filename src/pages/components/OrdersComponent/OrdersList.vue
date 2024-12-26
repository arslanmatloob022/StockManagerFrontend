<script setup lang="ts">
import type { VAvatarProps } from "/@src/components/base/VAvatar.vue";
import * as listData from "/@src/data/layouts/flex-list-v2";
import {
  valueSingle,
  optionsSingle,
  flexRowsOrders,
} from "/@src/data/dashboards/ecommerce/dashboardData";

export interface ProjectData {
  id: number;
  name: string;
  customer: string;
  duration: string;
  picture: string;
  industry: string;
  status: string;
  team: VAvatarProps[];
}

const projects = listData.projects as ProjectData[];

const props = withDefaults(
  defineProps<{
    activeTab?: "active" | "closed";
  }>(),
  {
    activeTab: "active",
  }
);

const filters = ref("");
const tab = ref(props.activeTab);

const columns = {
  picture: {
    label: "Client",
    grow: true,
    media: true,
  },
  customer: "Shop Name",
  industry: "Items",
  status: "Status",

  actions: {
    label: "Actions",
    align: "end",
  },
} as const;

const filteredData = computed(() => {
  if (!filters.value) {
    return projects;
  } else {
    const filterRe = new RegExp(filters.value, "i");

    return projects.filter((item) => {
      return (
        item.name.match(filterRe) ||
        item.customer.match(filterRe) ||
        item.industry.match(filterRe) ||
        item.status.match(filterRe) ||
        item.duration.match(filterRe)
      );
    });
  }
});
</script>

<template>
  <div>
    <div class="is-flex space-between">
      <div class="is-flex">
        <VControl icon="lucide:search">
          <input
            v-model="filters"
            class="input custom-text-filter"
            placeholder="Search..."
          />
        </VControl>
        <VField class="is-minimal-select dd-width ml-2">
          <VControl>
            <Multiselect
              v-model="valueSingle"
              :options="optionsSingle"
              placeholder="Select an option"
              :max-height="145"
            />
          </VControl>
        </VField>
      </div>
      <VButton color="info" raised elevated> Place New Order</VButton>
    </div>

    <div class="column is-12">
      <div class="table-header">
        <h3 class="dark-inverted">Recent Orders</h3>
      </div>

      <VFlexTable
        rounded
        :data="flexRowsOrders"
        :columns="{
          picture: {
            label: 'Customer',
            media: true,
            grow: true,
          },
          date: 'Date',
          amount: 'Amount',
          status: 'Status',
          tracking: 'Tracking',
          actions: {
            label: 'Actions',
            align: 'end',
          },
        }"
      >
        <template #body-cell="{ row, column, value }">
          <template v-if="column.key === 'picture'">
            <VAvatar :picture="row.picture" size="medium" squared />
            <div>
              <span class="item-name dark-inverted is-font-alt is-weight-600">{{
                row.username
              }}</span>
              <span class="item-meta">
                <span>{{ row.orderId }}</span>
              </span>
            </div>
          </template>
          <template v-else-if="column.key === 'amount'">
            <span class="dark-inverted is-weight-600">${{ row.amount }}</span>
          </template>
          <template v-else-if="column.key === 'status'">
            <VTag
              v-if="row.status === 'paid'"
              color="green"
              rounded
              label="Paid"
            />
            <VTag
              v-if="row.status === 'pending'"
              color="orange"
              rounded
              label="Pending"
            />
          </template>
          <template v-else-if="column.key === 'tracking'">
            <a
              v-if="row.tracking"
              tabindex="0"
              class="action-link is-pushed-mobile"
            >
              {{ row.tracking }}
            </a>
            <span v-else class="light-text is-pushed-mobile">N/A</span>
          </template>
          <template v-else-if="column.key === 'actions'">
            <VButton class="is-pushed-mobile" dark-outlined>
              View Order
            </VButton>
          </template>

          <span v-else class="light-text">{{ value }}</span>
        </template>
      </VFlexTable>
    </div>
  </div>
</template>

<style lang="scss">
.dd-width {
  min-width: 180px;
}
.has-top-nav {
  .flex-list-wrapper,
  .list-flex-toolbar {
    max-width: 880px;
    margin-inline-end: auto;
    margin-inline-start: auto;
  }
}
</style>
