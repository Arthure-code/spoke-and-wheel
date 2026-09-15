<script setup>
// The detail panel shows the picture and every field of the bike picked in
// the list. The picture is a public photo, linked, not stored here.
defineProps({
  product: { type: Object, required: true },
})
</script>

<template>
  <section class="card" aria-live="polite">
    <div class="row g-0">
      <div class="col-md-7 d-flex align-items-center p-3">
        <img :src="product.imageUrl" :alt="product.name" class="img-fluid rounded" width="800" height="533">
      </div>
      <div class="col-md-5">
        <div class="card-body">
          <h2 class="card-title h5">{{ product.name }}</h2>
          <p class="card-text">{{ product.description }}</p>
          <dl class="row mb-0 gx-2">
            <dt class="col-5 col-md-6">Category</dt>
            <dd class="col-7 col-md-6">{{ product.category }}</dd>
            <dt class="col-5 col-md-6">Price</dt>
            <dd class="col-7 col-md-6">{{ product.price.toFixed(2) }} $</dd>
            <dt class="col-5 col-md-6">Fixed price</dt>
            <dd class="col-7 col-md-6">{{ product.fixedPrice ? 'Yes' : 'No' }}</dd>
            <dt class="col-5 col-md-6">Status</dt>
            <dd class="col-7 col-md-6" :class="{ 'text-danger': product.discontinued }">{{ product.discontinued ? 'Discontinued' : 'Available' }}</dd>
            <dt class="col-5 col-md-6">Last update</dt>
            <dd class="col-7 col-md-6">{{ product.modifiedDate }}</dd>
          </dl>
        </div>
      </div>
    </div>
  </section>
</template>
