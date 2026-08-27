<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    class="w-5 h-5"
  >
    <!-- Add Branch: map pin -->
    <template v-if="slug === 'branches'">
      <path d="M12 21s7-6.5 7-11a7 7 0 10-14 0c0 4.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </template>

    <!-- Create Roles: shield check -->
    <template v-else-if="slug === 'roles'">
      <path d="M12 3l7 3.5v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9v-5L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </template>

    <!-- Add Staff: user plus -->
    <template v-else-if="slug === 'staff'">
      <circle cx="10" cy="8" r="3" />
      <path d="M4 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M18 8v4M16 10h4" />
    </template>

    <!-- Categories: tag -->
    <template v-else-if="slug === 'categories'">
      <path d="M4 4h7l9 9-7 7-9-9V4z" />
      <circle cx="8.5" cy="8.5" r="1.5" fill="currentColor" stroke="none" />
    </template>

    <!-- Menu Items: list -->
    <template v-else-if="slug === 'menu'">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 9h6M9 13h6M9 17h3" />
    </template>

    <!-- Stamp Cards: award -->
    <template v-else-if="slug === 'stamps'">
      <circle cx="12" cy="9" r="5" />
      <path d="M9 13.5L7 21l5-3 5 3-2-7.5" />
    </template>

    <!-- Promotions: megaphone -->
    <template v-else-if="slug === 'promotions'">
      <path d="M3 10v4a1 1 0 001 1h2l7 4V5L6 9H4a1 1 0 00-1 1z" />
      <path d="M17 9a4 4 0 010 6" />
    </template>

    <!-- Email Templates: envelope -->
    <template v-else-if="slug === 'templates'">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </template>

    <!-- Campaigns: paper plane -->
    <template v-else-if="slug === 'campaigns'">
      <path d="M22 2L11 13" />
      <path d="M22 2l-7 20-4-9-9-4 20-7z" />
    </template>

    <!-- Scan QR -->
    <template v-else-if="slug === 'scanqr'">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3zM19 14h2M14 19h2M19 19h2" />
    </template>
  </svg>
</template>

<script setup lang="ts">
defineProps<{ slug: string }>()
</script>
