<script>
  export let active;
  export let maxHeight;
</script>

<div class="container" style="max-height: {maxHeight}; overflow-y: {active ? 'auto': 'unset'};">
  <slot />
</div>

<style>
</style>