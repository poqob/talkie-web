<template>
  <div>
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-white focus:text-gray-900 focus:rounded-lg focus:shadow-lg">
      Skip to main content
    </a>
    <NavBar />
    <main id="main">
      <HeroSection />
      <TrustBar />
      <FeaturesSection />
      <ScreenshotsSection />
      <section class="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-violet-100 dark:border-violet-900/20" aria-label="Store graphic">
        <div class="max-w-4xl mx-auto">
          <div class="rounded-2xl overflow-hidden shadow-xl ring-1 ring-violet-200 dark:ring-violet-800/50 transition-shadow hover:shadow-2xl duration-500">
            <img
              src="/assets/store_graphic/store_graphic.png"
              alt="Talkie featured graphic for app store listing"
              class="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>
      <UseCasesSection />
      <HowToUse />
      <DownloadCta />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import NavBar from '../components/NavBar.vue'
import HeroSection from '../components/HeroSection.vue'
import TrustBar from '../components/TrustBar.vue'
import FeaturesSection from '../components/FeaturesSection.vue'
import ScreenshotsSection from '../components/ScreenshotsSection.vue'
import UseCasesSection from '../components/UseCasesSection.vue'
import HowToUse from '../components/HowToUse.vue'
import DownloadCta from '../components/DownloadCta.vue'
import AppFooter from '../components/AppFooter.vue'
</script>
