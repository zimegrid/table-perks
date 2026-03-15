<template>
  <section class="industry-verticals section-padding">
    <div class="container reveal">
      <div class="section-header text-center">
        <p class="eyebrow">Solutions by Vertical</p>
        <h2 class="section-title">Tailored for the unique needs of<br />different business types.</h2>
      </div>

      <div class="verticals-grid">
        <div v-for="(item, index) in verticals" :key="index" class="vertical-card">
          <div class="vertical-image">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="vertical-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const verticals = [
  {
    title: 'Restaurants',
    description: 'Replace punch cards, menu-linked rewards like Digital loyalty cards, Menu item rewards and Table-to-reward linking',
    image: 'http://localhost:3845/assets/e51a08e18210371984cbfae631d41d8036e86340.png'
  },
  {
    title: 'Cafes & Bakeries',
    description: 'Small-ticket repeat visits, seasonal promos like Stamp card programs, Quick rewards and Seasonal campaigns',
    image: 'http://localhost:3845/assets/74e2a3e6fb1e1881ea5fc0a61c24e656ac647af2.png'
  },
  {
    title: 'Salons & Spas',
    description: 'Appointment-based points, tiered perks like Service-based rewards, VIP tiers and Appointment rewards',
    image: 'http://localhost:3845/assets/c0cc9c1ae7c992cf10bc1042b0e903ee72cffb9b.png'
  },
  {
    title: 'Grocery & Convenience',
    description: 'Multi-location scaling, basket-size promotions like Multi-branch management, Basket value rewards and Volume incentives',
    image: 'http://localhost:3845/assets/c5e892b7f626b4590de137daa1f4dbe37fbdfedb.png'
  }
]
</script>

<style scoped>
.industry-verticals {
  padding: 80px 0;
  background: white;
}

.verticals-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 40px;
}

.vertical-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.vertical-image {
  width: 100%;
  height: 246px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(143, 146, 146, 0.24);
}

.vertical-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.vertical-content h3 {
  font-size: 24px;
  margin-bottom: 16px;
  color: var(--color-neutral-500);
}

.vertical-content p {
  font-size: 16px;
  color: var(--color-neutral-300);
}
</style>
