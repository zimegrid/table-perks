<template>
  <div class="not-prose min-h-[180px] rounded-2xl border-2 border-dashed border-neutral-200 bg-neutral-50 flex flex-col items-center justify-center gap-2 text-center p-6 my-6">
    <span class="text-xs font-bold uppercase tracking-wider text-neutral-200">
      {{ type === 'gif' ? 'Demo video' : 'Screenshot' }} coming soon
    </span>
    <span class="font-semibold text-neutral-300">{{ caption }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ type: 'image' | 'gif'; caption: string }>()
</script>
