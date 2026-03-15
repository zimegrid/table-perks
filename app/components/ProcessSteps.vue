<template>
  <section class="process-steps section-padding" id="how-to-start">
    <div class="container grid-container">
      <div class="content-left reveal-left">
        <div class="section-header">
          <p class="eyebrow">How to Start</p>
          <h2 class="section-title">Let’s Start Your Path to Loyalty in Five Steps</h2>
        </div>

        <div class="steps-list">
          <div 
            v-for="(step, index) in steps" 
            :key="index" 
            class="step-item"
            :class="{ active: activeStep === index }"
            @click="activeStep = index"
          >
            <div class="step-header">
              <div class="step-number">{{ index + 1 }}</div>
              <h3>{{ step.title }}</h3>
              <div class="caret">
                <span v-if="activeStep === index">▲</span>
                <span v-else>▼</span>
              </div>
            </div>
            <div v-if="activeStep === index" class="step-description">
              <p>{{ step.description }}</p>
            </div>
            <div class="divider"></div>
          </div>
        </div>
      </div>

      <div class="content-right reveal-right">
        <div class="image-wrapper">
          <img src="http://localhost:3845/assets/0b7b1618d2ee5bd0d01ac1a5497a07af51f689b2.png" alt="Path to Loyalty" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeStep = ref(0)
const steps = [
  {
    title: 'Get Started for Free',
    description: 'Create your loyalty program (points or stamps), add branches and staff, and import menu items'
  },
  {
    title: 'Engage Customers',
    description: 'Onboard your customers and start building relationships through personalized rewards.'
  },
  {
    title: 'Issue Stamps/Points',
    description: 'Use our simple QR scanning tools to issue rewards instantly at the point of sale.'
  },
  {
    title: 'Optimize and Grow',
    description: 'Track performance data and iterate on your rewards to maximize ROI.'
  }
]
</script>

<style scoped>
.process-steps {
  padding: 80px 0;
  background: white;
}

.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;
}

.section-header {
  margin-bottom: 48px;
}

.steps-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.step-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.step-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding-bottom: 16px;
}

.step-number {
  width: 32px;
  height: 32px;
  background: var(--color-neutral-500);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 20px;
  flex-shrink: 0;
}

.step-item.active .step-number {
  background: var(--color-primary);
}

.step-header h3 {
  flex: 1;
  font-size: 24px;
  color: var(--color-neutral-500);
}

.caret {
  font-size: 14px;
  color: var(--color-neutral-300);
}

.step-description {
  padding-left: 44px;
  padding-bottom: 24px;
  color: var(--color-neutral-300);
  font-size: 16px;
}

.divider {
  height: 1px;
  background: rgba(12, 18, 19, 0.1);
  width: 100%;
}

.image-wrapper {
  background: #2b5db7;
  border-radius: 24px;
  overflow: hidden;
  height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.image-wrapper img {
  max-width: 120%;
  transform: translateX(-5%);
}
</style>
