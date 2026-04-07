<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import Features from './components/Features.vue'
import Showcase from './components/Showcase.vue'
import Pricing from './components/Pricing.vue'
import Footer from './components/Footer.vue'

// New Sections
import ExperienceBento from './components/ExperienceBento.vue'
import PartnersDetailed from './components/PartnersDetailed.vue'
import VideoShowcase from './components/VideoShowcase.vue'
import CTAConversion from './components/CTAConversion.vue'
import BentoModulesMaster from './components/BentoModulesMaster.vue'
import ExpertiseLink from './components/ExpertiseLink.vue'
import ContactModern from './components/ContactModern.vue'
</script>

<template>
  <div class="min-h-screen">
    <Navbar />
    <Hero />
    <Features />
    
    <!-- Added Social Proof & Partners -->
    <ExperienceBento />
    <PartnersDetailed />
    
    <Showcase />
    
    <!-- Added Video Showcase -->
    <VideoShowcase />
    
    <!-- Added Complex Modules -->
    <BentoModulesMaster />
    
    <Pricing />
    
    <!-- Added Conversion CTA -->
    <CTAConversion />
    
    <!-- Added Expertise & Contact -->
    <ExpertiseLink />
    <ContactModern />

    <Footer/>
  </div>
</template>
