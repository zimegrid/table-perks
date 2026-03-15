<template>
  <section class="faq-section section-padding" id="faqs">
    <div class="container">
      <div class="section-header text-center">
        <h2 class="section-title">Frequently Asked Questions</h2>
        <p class="section-description">Have another question? Please contact our team!</p>
      </div>

      <div class="faq-list reveal">
        <div 
          v-for="(faq, index) in faqs" 
          :key="index" 
          class="faq-item"
          :class="{ active: openIndex === index }"
        >
          <div class="faq-header" @click="toggleFAQ(index)">
            <h3>{{ faq.question }}</h3>
            <div class="faq-icon">
              <span v-if="openIndex === index">▲</span>
              <span v-else>▼</span>
            </div>
          </div>
          <div v-show="openIndex === index" class="faq-content">
            <p>{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const openIndex = ref(0)
const toggleFAQ = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index
}

const faqs = [
  {
    question: 'What exactly is Table Perks?',
    answer: 'Table Perks is a loyalty reward web app designed to enhance customer engagement, streamline reward tracking, and facilitate seamless communication between businesses and their clients.'
  },
  {
    question: 'In what ways does Table Perks boost team efficiency?',
    answer: 'It automates reward issuance and redemption, provides real-time analytics for managers, and simplifies staff workflows through scannable QR codes.'
  },
  {
    question: 'Is Table Perks suitable for teams working remotely?',
    answer: 'Yes, the platform is cloud-based and accessible from anywhere, allowing owners and managers to track multi-location performance remotely.'
  },
  {
    question: 'What measures does Table Perks take to ensure user security?',
    answer: 'We use industry-standard encryption and role-based access controls to protect both business and customer data.'
  },
  {
    question: 'Can Table Perks be accessed on mobile devices?',
    answer: 'Absolutely. Table Perks is fully responsive and optimized for mobile browsers, ensuring a smooth experience for both staff and customers on the go.'
  }
]
</script>

<style scoped>
.faq-section {
  padding: 80px 0;
  background: white;
}

.faq-list {
  max-width: 880px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.faq-item {
  background: white;
  border: 1px solid rgba(144, 143, 146, 0.24);
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-item.active {
  background: #fafafa;
  border-color: rgba(143, 145, 146, 0.25);
  box-shadow: 0 0 0 0.5px rgba(143, 145, 146, 0.15);
}

.faq-header {
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.faq-header h3 {
  font-size: 24px;
  color: var(--color-neutral-500);
  letter-spacing: -0.288px;
}

.faq-icon {
  color: var(--color-neutral-300);
}

.faq-content {
  padding: 0 24px 24px;
  color: var(--color-neutral-300);
  font-size: 18px;
  line-height: 1.6;
}
</style>
