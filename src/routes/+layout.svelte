<script>
  import Header from '$lib/components/Header.svelte';
  import '../style.css';
</script>

<div class="app">
  <Header />
  <main>
    <slot />
  </main>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  main {
    flex: 1;
  }
</style>
