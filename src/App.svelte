<script>
  import Header from './components/Header.svelte';
  import Router from './Router.svelte';
  import ExitIntentModal from './components/ui/ExitIntentModal.svelte';
  import WhatsAppButton from './components/ui/WhatsAppButton.svelte';
  import './style.css';
</script>

<Header />
<main id="main-content" tabindex="-1">
  <Router />
  <!-- main landmark for skip link accessibility -->
  </main>

<!-- WhatsApp Floating Button -->
<WhatsAppButton
  variant="floating"
  phoneNumber="6598278695"
  message="Hello Light & Kaki Studio! I'm interested in your services 🌟"
/>

<!-- Exit Intent Modal -->
<ExitIntentModal />

<style>
  :global(body) {
    @apply bg-white;
    margin: 0;
    padding: 0;
  }
</style>
