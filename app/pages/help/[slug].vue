<template>
  <main class="py-20 md:py-40">
    <div class="container mx-auto px-4 md:px-16 max-w-4xl">
      <div v-if="pending" class="text-neutral-300">Loading…</div>

      <template v-else-if="page">
        <NuxtLink to="/help" class="text-primary text-sm font-semibold hover:underline mb-6 inline-block">
          ← Back to all steps
        </NuxtLink>

        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0">
            <HelpStepIcon :slug="route.params.slug as string" />
          </div>
          <div>
            <p class="text-xs font-semibold text-neutral-200 uppercase tracking-wider">Step {{ page.stepNumber }}</p>
            <span class="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary text-xs font-semibold mt-0.5">
              {{ page.badge }}
            </span>
          </div>
        </div>

        <h1 class="text-3xl md:text-4xl font-bold text-neutral-500 mb-3">{{ page.title }}</h1>
        <p class="text-neutral-300 text-lg mb-10">{{ page.description }}</p>

        <ContentRenderer :value="page"
          class="prose prose-neutral max-w-none prose-headings:text-primary prose-a:text-primary prose-strong:text-neutral-500 prose-table:text-sm [&_h2_a]:no-underline [&_h3_a]:no-underline" />

        <div class="flex flex-col sm:flex-row justify-between gap-4 mt-16 pt-8 border-t border-black/10">
          <NuxtLink v-if="prevStep" :to="prevStep.path" class="text-left">
            <p class="text-xs text-neutral-300 uppercase tracking-wider mb-1">Previous</p>
            <p class="font-semibold text-primary hover:underline">← {{ prevStep.title }}</p>
          </NuxtLink>
          <div v-else />

          <NuxtLink v-if="nextStep" :to="nextStep.path" class="text-right sm:ml-auto">
            <p class="text-xs text-neutral-300 uppercase tracking-wider mb-1">Next</p>
            <p class="font-semibold text-primary hover:underline">{{ nextStep.title }} →</p>
          </NuxtLink>
        </div>
      </template>

      <div v-else class="text-center py-20">
        <p class="text-neutral-500 text-lg mb-4">We couldn't find that guide step.</p>
        <NuxtLink to="/help" class="text-primary font-semibold hover:underline">← Back to all steps</NuxtLink>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const route = useRoute()

const { data: page, pending } = await useAsyncData(`help-${route.params.slug}`, () =>
  queryCollection('help').path(route.path).first()
)

const { data: allSteps } = await useAsyncData('help-steps', () =>
  queryCollection('help').order('stepNumber', 'ASC').all()
)

const prevStep = computed(() => {
  if (!allSteps.value || !page.value) return null
  const index = allSteps.value.findIndex((s) => s.path === page.value!.path)
  return index > 0 ? allSteps.value[index - 1] : null
})

const nextStep = computed(() => {
  if (!allSteps.value || !page.value) return null
  const index = allSteps.value.findIndex((s) => s.path === page.value!.path)
  return index >= 0 && index < allSteps.value.length - 1 ? allSteps.value[index + 1] : null
})

useHead({
  title: () => (page.value ? `${page.value.title} - Merchant Guide - Table Perks` : 'Merchant Guide - Table Perks'),
})
</script>
