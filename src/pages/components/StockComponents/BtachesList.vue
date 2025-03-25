<script setup lang="ts">
import AddUpdateProduct from "./AddUpdateProduct.vue";
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { ref, computed, onMounted } from "vue";
// import { useProducts } from "/@src/stores/products";
// const batchesStore = useProducts();
import { useBatches } from "/@src/stores/useBatches";

const batchesStore = useBatches();
export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  quantity: string;
  tag: string[];
  store: string;
  image: null | File | string;
}

const api = useApi();
const notyf = useNotyf();
// const products = ref<Product[]>([]);
const products = ref(<any>[]);
const addProductModal = ref(false);
const currentProductId = ref(""); // Store the product ID being edited
const filters = ref("");

const fetchProducts = async () => {
  try {
    // const resp = await api.get("/product/");
    await batchesStore.getStoreBatches();
    products.value = batchesStore.batchesList;
  } catch (error) {
    console.error("Error fetching products:", error);
    notyf.error("Failed to fetch products.");
  }
};

const deleteProduct = async (productId: string) => {
  try {
    await api.delete(`/product/${productId}/`);
    products.value = products.value.filter(
      (product) => product.id !== productId
    );
    notyf.success("Product deleted successfully.");
  } catch (error) {
    console.error("Error deleting product:", error);
    notyf.error("Failed to delete product.");
  }
};

const filteredData = computed(() => {
  if (!filters.value) return products.value;
  return products.value.filter((product) =>
    [product.name, product.description].some((field) =>
      field.toLowerCase().includes(filters.value.toLowerCase())
    )
  );
});

const handleEditProduct = (productId: string) => {
  currentProductId.value = productId;
  addProductModal.value = true;
};

const handleSuccess = async () => {
  await fetchProducts();
};

onMounted(() => {
  fetchProducts();
});
</script>

<template>
  <div>
    <div class="card-grid-toolbar">
      <VControl icon="lucide:search">
        <input
          v-model="filters"
          class="input custom-text-filter"
          placeholder="Search products..."
        />
      </VControl>

      <div class="buttons">
        <VButton
          @click="
            () => {
              addProductModal = true;
              currentProductId = null;
            }
          "
          color="primary"
          raised
        >
          <span class="icon">
            <i aria-hidden="true" class="fas fa-plus" />
          </span>
          <span>New Product</span>
        </VButton>
      </div>
    </div>

    <div class="card-grid card-grid-v2">
      <VPlaceholderPage
        v-if="filteredData.length === 0"
        title="No Products Found"
        subtitle="Try changing your search terms."
        larger
      >
        <template #image>
          <img src="/images/illustrations/placeholders/search-3.svg" alt="" />
        </template>
      </VPlaceholderPage>

      <TransitionGroup name="list" tag="div" class="columns is-multiline">
        <div
          v-for="product in filteredData"
          :key="product.id"
          class="column is-4"
        >
          <div class="card-grid-item">
            <div class="card hover-card">
              <header class="card-header">
                <h3 class="card-header-title is-size-5 has-text-weight-bold">
                  {{ product.name }}
                </h3>
                <div class="card-header-icon buttons-container">
                  <VButton
                    icon
                    color="info"
                    rounded
                    @click="handleEditProduct(product.id)"
                  >
                    <i class="fas fa-edit"></i>
                  </VButton>
                  <VButton
                    icon
                    color="danger"
                    rounded
                    class="ml-2"
                    @click="deleteProduct(product.id)"
                  >
                    <i class="fas fa-trash"></i>
                  </VButton>
                </div>
              </header>
              <div class="card-content">
                <div class="content">
                  <div class="info-block">
                    <span class="info-label">Price:</span>
                    <span class="info-value">${{ product.price }}</span>
                  </div>
                  <div class="info-block">
                    <span class="info-label">Quantity:</span>
                    <span class="info-value">{{ product.quantity }}</span>
                  </div>
                  <div class="info-block">
                    <span class="info-label">Tags:</span>
                    <span class="info-value">{{ product.tag.join(", ") }}</span>
                  </div>
                  <p class="description">
                    {{
                      product.description?.slice(0, 100) ||
                      "No description available."
                    }}
                  </p>
                </div>
              </div>
              <footer class="card-footer">
                <a href="#" class="card-footer-item has-text-primary"
                  >View Details</a
                >
              </footer>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
    <AddUpdateProduct
      v-if="addProductModal"
      :open-product-modal="addProductModal"
      :product-id="currentProductId"
      @update:close-modal-handler="addProductModal = false"
      @update:call-on-success="handleSuccess"
    />
  </div>
</template>

<style lang="scss">
.card-grid {
  .columns {
    margin-inline-start: -0.5rem !important;
    margin-inline-end: -0.5rem !important;
    margin-top: -0.5rem !important;
  }

  .column {
    padding: 0.5rem !important;
  }
}

.card-grid-v2 {
  .card-grid-item {
    .card {
      border: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
      box-shadow: none;
      border-radius: var(--radius-large);

      .card-header {
        box-shadow: none;
        border-bottom: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);

        .card-header-title {
          display: flex;
          align-items: center;

          .meta {
            margin-inline-start: 10px;
            line-height: 1.2;

            span {
              display: block;
              font-weight: 400;

              &:first-child {
                font-family: var(--font-alt);
                font-size: 0.95rem;
                color: var(--dark-text);
                font-weight: 600;
              }

              &:nth-child(2) {
                font-size: 0.9rem;
                color: var(--light-text);
              }
            }
          }
        }
      }

      .card-image {
        img {
          object-fit: cover;
        }
      }

      .card-content {
        border-top: 1px solid color-mix(in oklab, var(--fade-grey), black 4%);
        padding: 1rem;

        .card-content-flex {
          display: flex;
          align-items: center;
          justify-content: space-between;

          .card-info {
            h3 {
              font-family: var(--font-alt);
              font-size: 1rem;
              color: var(--dark-text);
              font-weight: 600;
            }

            p {
              font-size: 0.9rem;

              .iconify {
                position: relative;
                top: 0;
                height: 14px;
                width: 14px;
                margin-inline-end: 4px;
              }
            }
          }
        }
      }

      .card-footer {
        a {
          font-family: var(--font);
          color: var(--light-text);
          padding: 1rem 0.75rem;
          transition: all 0.3s; // transition-all test

          &:hover {
            background: color-mix(in oklab, var(--fade-grey), white 4%);
            color: var(--primary);
          }
        }
      }
    }
  }
}

.is-dark {
  .card-grid-v2 {
    .card-grid-item {
      border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

      .card {
        background: color-mix(in oklab, var(--dark-sidebar), white 6%);
        border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

        .card-header {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);
        }

        .card-content {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          .avatar-stack {
            .avatar {
              border-color: color-mix(in oklab, var(--dark-sidebar), white 6%);
            }
          }
        }

        .card-footer {
          border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

          a {
            border-color: color-mix(in oklab, var(--dark-sidebar), white 12%);

            &:hover,
            &:focus {
              background: color-mix(in oklab, var(--dark-sidebar), white 2%);
              color: var(--primary);
            }
          }
        }
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.card-grid-item {
  margin-bottom: 20px;
}

.card {
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: #f5f5f5;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.card-header-title {
  margin: 0;
}

.buttons-container {
  display: flex;
  gap: 10px;
}

.card-content {
  padding: 20px;
}

.info-block {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info-label {
  font-weight: 600;
  color: #4a4a4a;
}

.info-value {
  font-weight: 400;
  color: #4a4a4a;
}

.description {
  margin-top: 15px;
  color: #6b6b6b;
  font-size: 0.9rem;
}

.card-footer {
  background-color: #fafafa;
  border-top: 1px solid #eaeaea;
}

.card-footer-item {
  padding: 10px;
  font-weight: 500;
  font-size: 0.9rem;
  text-decoration: none;
}

.card-footer-item:hover {
  text-decoration: underline;
}
</style>
