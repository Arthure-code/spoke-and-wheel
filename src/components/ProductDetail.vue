<script setup>
// The detail panel shows every field of the bike picked in the list, with
// its picture floated on the right. The picture is a public photo, linked,
// not stored here.
defineProps({
  product: { type: Object, required: true },
})
</script>

<template>
  <section aria-live="polite">
    <img :src="product.imageUrl" :alt="product.name" class="img-fluid float-end ms-3 mb-2" width="200" height="150">
    <h2 class="h4">{{ product.name }}</h2>
    <h3 class="h6 mb-3">{{ product.description }}</h3>
    <p class="mb-1">Price: {{ product.price.toFixed(2) }} $</p>
    <p class="mb-1">Fixed price? {{ product.fixedPrice ? 'Yes' : 'No' }}</p>
    <p class="mb-1" :class="{ 'text-danger': product.discontinued }">Discontinued? {{ product.discontinued ? 'Yes' : 'No' }}</p>
    <p class="mb-0">Modified date: {{ product.modifiedDate }}</p>
  </section>
</template>
