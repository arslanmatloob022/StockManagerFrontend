<template>
  <div>
    <div v-if="product">
        <div class="columns is-multiline">
            <div class="column is-3">
                <h2 class="title is-4">Name</h2>
                <p> {{ product.name }}</p>
            </div>
            <div class="column is-3">
                <h2 class="title is-4">Price</h2>
                <p> {{ product.price }}</p>
            </div>
            <div class="column is-3">
                <h2 class="title is-4">Quantity</h2>
                <p> {{ product.quantity }}</p>
            </div>
            <div class="column is-3">
                <p><strong>Tags:</strong>
                    <ul class="is-flex" style="gap:20px;flex: wrap;">
                        <li v-for="x,index in product?.tag">
                        {{  index+1}}-{{ x }}
                        </li>
                    </ul>
                </p>
            </div>
            <div class="column is-12">
                <h2 class="title is-4">Description</h2>
                <p> {{ product.description }}</p>
            </div>
        </div>
        
      
  
    </div>
    <div v-else>
      <p>Loading product details...</p>
    </div>
  </div>
</template>
  
  <script setup lang="ts">
import { useApi } from "/@src/composables/useApi";
import { useNotyf } from "/@src/composables/notyf";
import { ref, computed, onMounted } from "vue";
const route = useRoute();
const pageTitle = useVueroContext<string>("page-title");
import { Product } from "/@src/utils/interface/common";
useHead({
  title: "Product Detail",
});
const api = useApi();
const notyf = useNotyf();
const product = ref<Product | null>(null);
const addProductModal = ref(false);
const currentProductId = ref<string | null>(null); // Store the product ID being edited
const filters = ref("");

const fetchProducts = async () => {
  try {
    const resp = await api.get(`/product/${route.params.id}/details/`);
    product.value = resp.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    notyf.error("Failed to fetch products.");
  }
};

onMounted(() => {
  fetchProducts();
  pageTitle.value = "Product Details";
});
</script>

  