<template>
  <footer class="py-12 px-4 sm:px-6 lg:px-8 bg-[#0A0A0F] text-gray-400" role="contentinfo">
    <div class="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <img src="/assets/app_icon/app_icon.png" alt="Talkie icon" class="w-8 h-8 rounded-lg" />
        <span class="font-semibold text-white">Talkie</span>
      </div>
      <div class="flex items-center gap-4 text-sm">
        <RouterLink to="/privacy/en" class="text-gray-400 hover:text-violet-400 transition-colors no-underline">Privacy Policy</RouterLink>
        <span class="text-gray-600">&copy; 2026 Talkie. WiFi Walkie Talkie.</span>
      </div>
    </div>
  </footer>
</template>
