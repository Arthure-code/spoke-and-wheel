<script setup>
// The list receives the catalogue and shows each bike on one row of three
// cells: name, description, price; a discontinued model is written in red.
// Clicking a bike tells the parent which one, and the chosen row turns blue.
const props = defineProps({
  products: { type: Array, required: true },
  selected: { type: Object, default: null },
})

defineEmits(['select'])

const title = 'Our bikes'

const isSelected = (product) => props.selected !== null && props.selected.id === product.id
</script>

<template>
  <section>
    <h2 class="h5">{{ title }}</h2>
    <p class="text-muted small">Click a bike to see its picture and details.</p>
    <div class="product-list">
      <button
        v-for="product in products"
        :key="product.id"
        type="button"
        class="product-row"
        :class="{ discontinued: product.discontinued, selected: isSelected(product) }"
        :aria-pressed="isSelected(product)"
        @click="$emit('select', product)"
      >
        <span class="product-cell product-cell--dark">{{ product.name }}</span>
        <span class="product-cell product-cell--light">{{ product.description }}</span>
        <span class="product-cell product-cell--dark">{{ product.price.toFixed(2) }} $</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
/* Three cells per row: dark, light, dark. The selected row turns blue, the
   discontinued one is written in red on light cells; both come from a class
   on the row. Every pair of colours reaches the 4.5:1 contrast of WCAG AA. */
.product-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.product-row {
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  gap: 0.25rem;
  width: 100%;
  padding: 0;
  border: 0;
  background: none;
  text-align: left;
  font: inherit;
  cursor: pointer;
}

.product-cell {
  padding: 0.35rem 0.6rem;
  border: 1px solid #9bacb4;
}

.product-cell--dark {
  background: #5d7987;
  color: #fff;
}

.product-cell--light {
  background: #eee;
  color: #212529;
}

.product-row.selected .product-cell--dark {
  background: #0026ff;
  border-color: #0026ff;
}

.product-row.selected .product-cell--light {
  background: #0072bf;
  border-color: #0072bf;
  color: #fff;
}

.product-row.discontinued:not(.selected) .product-cell {
  background: #eee;
  color: #b02a37;
}

.product-row:focus-visible {
  outline: 3px solid #0026ff;
  outline-offset: 2px;
}

@media (max-width: 575.98px) {
  .product-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
}
</style>
