<script setup>
// The list receives the catalogue and shows each bike with its category and
// price; a discontinued model carries the red class and says so.
defineProps({
  products: { type: Array, required: true },
})

const title = 'Our bikes'
</script>

<template>
  <section class="card">
    <div class="card-body">
      <h2 class="card-title h5">{{ title }}</h2>
      <ul class="list-group list-group-flush">
        <li
          v-for="product in products"
          :key="product.id"
          class="list-group-item px-0 d-flex justify-content-between align-items-center"
          :class="{ 'text-danger': product.discontinued }"
        >
          <span>
            <span class="badge rounded-pill text-bg-light border me-2">{{ product.category }}</span>
            <span class="fw-semibold">{{ product.name }}</span>
            <span v-if="product.discontinued" class="ms-2 badge text-bg-danger">discontinued</span>
          </span>
          <span class="text-muted">{{ product.price.toFixed(2) }} $</span>
        </li>
      </ul>
    </div>
  </section>
</template>
