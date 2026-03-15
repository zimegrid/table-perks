<template>
  <section class="target-audience section-padding">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Who Table Perks is for</h2>
        <p class="section-description">
          Our platform is designed to serve every stakeholder in the loyalty ecosystem.
        </p>
      </div>

      <div class="audience-grid">
        <div v-for="(item, index) in audience" :key="index" class="audience-card">
          <div class="image-box">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="audience-content">
            <h3>{{ item.title }}</h3>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const audience = [
  {
    title: 'Owners',
    description: 'Consolidated dashboard across locations, program strategy controls, and high‑level analytics',
    image: 'http://localhost:3845/assets/4a1c3e7fa863068238b49b958138511be0ff9006.png'
  },
  {
    title: 'Managers',
    description: 'Branch performance insights, staffing tools, local campaigns, and inventory‑aligned promos',
    image: 'http://localhost:3845/assets/ee7d49d032811e0697329cb8d37716725f42101e.png'
  },
  {
    title: 'Staff',
    description: 'Simple stamp/point issuance and redemption checks that work on any device',
    image: 'http://localhost:3845/assets/21fd22ff9cc9cffdcef478cbe46f6e3b7a0dde07.png'
  },
  {
    title: 'Customers',
    description: 'Clear progress, reward eligibility, menu browsing, and profile management in a branded app',
    image: 'http://localhost:3845/assets/abbd480368a012dd08c1cfac1a2e8699609be3cf.png'
  }
]
</script>

<style scoped>
.target-audience {
  padding: 80px 0;
  background: white;
}

.audience-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.audience-card {
  padding-right: 24px;
  border-right: 1px solid rgba(61, 65, 66, 0.1);
}

.audience-card:last-child {
  border-right: none;
}

.image-box {
  width: 100%;
  height: 134px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 24px;
  border: 1px solid rgba(143, 146, 146, 0.24);
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.audience-content h3 {
  font-size: 24px;
  margin-bottom: 12px;
  color: var(--color-neutral-500);
}

.audience-content p {
  font-size: 16px;
  color: var(--color-neutral-300);
}
</style>
