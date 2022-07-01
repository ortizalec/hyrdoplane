<script>
  import Tag from "../component/tag.svelte";
  export let documents = [];

  function removeFromList(event){
    let temp = documents.filter((doc) => doc.id != event.detail.id)
    documents = [...temp]
  }
</script>

<h1 class="text-3xl font-bold mb-3">C.R.U.D Example</h1>

<!--Create New Tag-->
<form method="post" class="flex gap-4 my-4">
  <input type="text" placeholder="New Tag" class="input input-bordered input-primary w-full max-w-xs text-2xl italic" name="name"/>
  <button class="btn btn-active btn-primary">Create</button>
</form>

<!--Render Each Tag-->
<div class="flex gap-4">
  {#each documents as document}
      <Tag bind:id={document.id} bind:name={document.name} on:removeSelf={removeFromList}/>
  {/each}
</div>

