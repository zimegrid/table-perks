<template>
  <section class="features-grid section-padding" id="features">
    <div class="container">
      <div class="section-header text-center">
        <p class="eyebrow">Feature Highlights</p>
        <h2 class="section-title">Why We’re the Trusted<br />Choice for Your Success</h2>
        <p class="section-description">Excellence, tailored solutions, and expert guidance for your financial goals</p>
      </div>

      <div class="grid">
        <div v-for="(feature, index) in features" :key="index" class="feature-card reveal" :style="{ transitionDelay: `${index * 0.1}s` }">
          <div class="icon-container">
            <img :src="feature.icon" :alt="feature.title" />
          </div>
          <div class="feature-content">
            <h3>{{ feature.title }}</h3>
            <p>{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    title: 'Loyalty Programs',
    description: 'Configure points or stamps; define tiers; set eligibility and expiry; automate redemption logic',
    icon: 'http://localhost:3845/assets/10f804bf02a98f2b44f6ce511b03667e6de7756e.svg'
  },
  {
    title: 'QR Scanning & Redemption',
    description: 'Fast in‑store validation with scannable codes for staff and customers',
    icon: 'http://localhost:3845/assets/544b15a24e1165be3a428558ac040ded5c5d143c.svg'
  },
  {
    title: 'Customer Management',
    description: 'Centralized profiles, preferences, segments, and complete transaction history',
    icon: 'http://localhost:3845/assets/6f0fd12c65a6f2b9c6b8130f5da3f6815d54c066.svg'
  },
  {
    title: 'Menu Management',
    description: 'Manage categories, items, pricing, availability, and featured promotions',
    icon: 'http://localhost:3845/assets/86d9160cf33cfc6737329acccedd5c9cbd9d62bf.svg'
  },
  {
    title: 'Analytics & Reporting',
    description: 'Visits, redemptions, active customers, cohort trends, and top‑performing rewards/items',
    icon: 'http://localhost:3845/assets/72d0b315e22a832355266323a0936e5619ea1779.svg'
  },
  {
    title: 'Role‑Based Access',
    description: 'Super Admin, Merchant, Staff, and Customer flows with fine‑grained permissions',
    icon: 'http://localhost:3845/assets/4cd6226c19da807db2343e206e13ddf99b4b8c6f.svg'
  }
]
</script>

<style scoped>
.features-grid {
  padding: 80px 0;
  background: white;
}

.section-header {
  margin-bottom: 64px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.feature-card {
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow: hidden;
}

.icon-container {
  width: 64px;
  height: 64px;
  background: var(--color-primary);
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(143, 146, 146, 0.24);
}

.icon-container img {
  width: 32px;
  height: 32px;
}

.feature-content h3 {
  font-size: 20px;
  margin-bottom: 16px;
  color: var(--color-neutral-500);
}

.feature-content p {
  font-size: 14px;
  color: var(--color-neutral-300);
}
</style>
