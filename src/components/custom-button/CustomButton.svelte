<svelte:options immutable={true} tag="custom-button" />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let disabled: string | boolean;
  export let label: string;

  $: isDisabled = typeof disabled === 'string' ? disabled === 'true' : disabled;

  const dispatch = createEventDispatcher();

  function onClick(event: Event) {
    if (!disabled) {
      dispatch('click', event);
    } else {
      event.stopPropagation();
    }
  }
</script>

<button
  role="button"
  disabled={isDisabled}
  class="font-sans px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
  on:click={onClick}
>
  {label}
</button>

<style windi:preflights windi:safelist>
</style>
