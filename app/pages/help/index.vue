<template>
  <main class="py-20 md:py-40">
    <div class="container mx-auto px-4 md:px-16 max-w-5xl ">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="text-primary font-semibold uppercase tracking-wider text-sm mb-3">Merchant Onboarding</p>
        <h1 class="text-4xl md:text-5xl font-bold text-neutral-500 mb-4">
          Set up your Stamp Loyalty System
        </h1>
        <p class="text-neutral-300 text-lg leading-relaxed">
          This guide is written for merchants only. It starts after your account is already activated by Table Perks.
          Follow the exact setup order below to configure your Stamp Loyalty System before enrolling customers and
          issuing stamps.
        </p>
      </div>

      <div class="grid sm:grid-cols-2 gap-4 mb-16">
        <div v-for="item in checklist" :key="item.title"
          class="flex gap-3 items-start p-4 rounded-2xl border border-black/10 bg-white">
          <div
            class="w-6 h-6 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center font-bold text-sm flex-shrink-0">
            ✓
          </div>
          <div>
            <p class="font-semibold text-neutral-500">{{ item.title }}</p>
            <p class="text-neutral-300 text-sm">{{ item.description }}</p>
          </div>
        </div>
      </div>

      <h2 class="text-2xl font-semibold text-neutral-500 mb-6">Recommended Merchant Setup Timeline</h2>

      <div v-if="pending" class="text-neutral-300">Loading guide…</div>
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <NuxtLink v-for="step in steps" :key="step.path" :to="step.path"
          class="group p-5 rounded-2xl border border-black/10 bg-white hover:border-primary/40 hover:shadow-md transition-all duration-300">
          <div
            class="w-10 h-10 rounded-full bg-primary-50 text-primary flex items-center justify-center mb-3 group-hover:bg-primary group-hover:text-white transition-colors">
            <HelpStepIcon :slug="step.path.split('/').pop()!" />
          </div>
          <p class="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-1">Step {{ step.stepNumber }}</p>
          <p class="font-semibold text-neutral-500 mb-1 group-hover:text-primary transition-colors">{{ step.title }}</p>
          <p class="text-neutral-300 text-sm">{{ step.description }}</p>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'Merchant Setup Guide - Table Perks',
})

const { data: steps, pending } = await useAsyncData('help-steps', () =>
  queryCollection('help').order('stepNumber', 'ASC').all()
)

const checklist = [
  {
    title: 'Recommended Setup Order',
    description: 'Branches → Roles → Staff → Categories → Menu → Stamps → Promotions → Email → Campaigns → Scan QR',
  },
  {
    title: 'Merchant Focused',
    description: 'No super admin actions included in this guide',
  },
  {
    title: 'Screenshot Ready',
    description: 'Each step includes screenshots or placeholders for what to capture',
  },
  {
    title: 'Step by Step',
    description: 'Follow each step in order for a smooth loyalty program launch',
  },
]
</script>
