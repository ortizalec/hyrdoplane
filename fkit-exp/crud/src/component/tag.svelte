<script>
  import { createEventDispatcher } from "svelte";
  /** @type {boolean}*/
  let deleteButtonHideen = true;
  /** @type {string}*/
  export let name;
   /** @type {string}*/
  export let id;

  const dispatch = createEventDispatcher();
  function removeFromList() {
		dispatch('removeSelf', {
			id: id
		});
	}

  function showDeleteButton() {
    deleteButtonHideen = false;
  }

  function hideDeleteButton() {
    deleteButtonHideen = true;
  }
</script>

<div class="badge p-4 flex gap-1 justify-center" 
      on:mouseenter={showDeleteButton} 
      on:mouseleave={hideDeleteButton}>
  <input type="text" class="text-2xl bg-transparent w-[150px] text-center     
        rounded-full" bind:value={name}
        on:focusout={() => {
          fetch("/", {
            method: 'put',
            body: JSON.stringify({id: id, name: name})
          })
        }}>
  <button type="submit" class="text-2xl text-primary" 
        hidden={deleteButtonHideen}
        on:click={() => {
          fetch("/", {
            method: 'delete', 
            body: JSON.stringify({id: id})
          });
          removeFromList();
        }}>
    <p>X</p>
  </button>
</div>