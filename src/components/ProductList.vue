<script setup>
// The list receives the catalogue and shows each bike with its category and
// price; a discontinued model carries the red class and says so. Clicking a
// bike tells the parent which one, and the chosen row is highlighted.
const props = defineProps({
  products: { type: Array, required: true },
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const title = 'Our bikes'

const isSelected = (product) => props.selected !== null && props.selected.id === product.id
</script>

<template>
  <section class="card">
    <div class="card-body">
      <h2 class="card-title h5">{{ title }}</h2>
      <p class="text-muted small">Click a bike to see its picture and details.</p>
      <div class="list-group list-group-flush">
        <button
          v-for="product in products"
          :key="product.id"
          type="button"
          class="list-group-item list-group-item-action px-0 d-flex justify-content-between align-items-center"
          :class="{ 'text-danger': product.discontinued && !isSelected(product), active: isSelected(product) }"
          :aria-pressed="isSelected(product)"
          @click="$emit('select', product)"
        >
          <span>
            <span class="badge rounded-pill text-bg-light border me-2">{{ product.category }}</span>
            <span class="fw-semibold">{{ product.name }}</span>
            <span v-if="product.discontinued" class="ms-2 badge text-bg-danger">discontinued</span>
          </span>
          <span :class="{ 'text-muted': !isSelected(product) }">{{ product.price.toFixed(2) }} $</span>
        </button>
      </div>
    </div>
  </section>
</template>
