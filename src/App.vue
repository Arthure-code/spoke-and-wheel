<script setup>
import ProductList from './components/ProductList.vue'
import logo from './assets/logo.svg'

// The catalogue lives here and is handed to the list as a prop.
const products = [
  { id: 1, name: 'Trek SSL 2017', price: 999.9, description: 'Racing bike.', category: 'Road', discontinued: false, fixedPrice: false, modifiedDate: '2017-06-17', imageUrl: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&w=800&q=80' },
  { id: 2, name: 'City XT 2015', price: 659.5, description: 'City bike.', category: 'City', discontinued: true, fixedPrice: false, modifiedDate: '2015-03-01', imageUrl: 'https://images.unsplash.com/photo-1606310241970-4858d5d08f6b?auto=format&w=800&q=80' },
  { id: 3, name: 'Cosmic Cobat 2015', price: 499.9, description: 'Great bike.', category: 'Trail', discontinued: false, fixedPrice: false, modifiedDate: '2015-05-17', imageUrl: 'https://images.unsplash.com/photo-1728440585076-2589fa9b4aee?auto=format&w=800&q=80' },
  { id: 4, name: 'Hero DTB 2016', price: 759, description: 'Champion bike.', category: 'Trail', discontinued: false, fixedPrice: false, modifiedDate: '2015-05-19', imageUrl: 'https://images.unsplash.com/photo-1673121414328-52eff37bc6d0?auto=format&w=800&q=80' },
  { id: 5, name: 'S-WORKS 2016', price: 1299.9, description: 'Ultra bike.', category: 'Road', discontinued: false, fixedPrice: false, modifiedDate: '2015-06-17', imageUrl: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?auto=format&w=800&q=80' },
]
</script>

<template>
  <div class="d-flex flex-column min-vh-100">
    <header>
      <nav class="navbar navbar-light bg-white border-bottom shadow-sm mb-3" aria-label="Site">
        <div class="container">
          <a class="navbar-brand d-flex align-items-center gap-2" href="#">
            <img :src="logo" width="48" height="30" alt="">
            Spoke &amp; Wheel
          </a>
        </div>
      </nav>
    </header>
    <main class="container flex-grow-1 pb-5">
      <div class="text-center">
        <img :src="logo" width="128" height="80" alt="" class="mb-2">
        <h1 class="display-4">Spoke &amp; Wheel</h1>
        <p>Road, city and trail bikes. Five models in the catalogue this season, one of them on its way out.</p>
      </div>
      <div class="row justify-content-center mt-2">
        <div class="col-12 col-md-8 col-lg-6">
          <ProductList :products="products" />
        </div>
      </div>
    </main>
    <footer class="border-top py-3 text-muted">
      <div class="container">&copy; 2026 - Spoke &amp; Wheel - <a href="https://github.com/Arthure-code/spoke-and-wheel/blob/main/LICENSE">Licence</a></div>
    </footer>
  </div>
</template>
