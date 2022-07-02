<script>
  import { goto } from "$app/navigation";
  import {auth} from "../../lib/db";

  import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
  import { browser } from "$app/env";

  function logout() {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  let currentUser;
  if(browser){
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const id = user.uid;
        currentUser = user;
        goto("/dashboard/users/" + id)
        // ...
      } else {
        currentUser = null
        goto("/dashboard/login")
      }
    });
  }
</script>


{#if currentUser}
<div class="grid grid-cols-12 grid-rows-1 gap-4">
  <!--Side Navigation-->
  <div class="flex flex-col col-span-3 border-r-2 h-screen p-5">
    <h1 class="text-3xl mb-auto">Side Menu</h1>
    <div>
      <button class="btn" on:click={logout}>Log Out</button>
    </div>

  </div>
  <!--Main Content-->
  <div class=" col-span-9 p-5">
    <h1 class="text-3xl">Main Content</h1> 
    <slot/>
  </div>
</div>
{:else}
  <slot/>
{/if}
