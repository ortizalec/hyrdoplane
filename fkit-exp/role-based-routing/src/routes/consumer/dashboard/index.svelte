<script>
  import { browser } from "$app/env";
  import { goto } from "$app/navigation";

  import { auth } from "$lib/db";
  import { signOut } from "firebase/auth";

  function logout(){
    signOut(auth).then(() => {
      if(browser){
        goto('/login')
      }
    }).catch((error) => {
      // An error happened.
    });
  }
</script>

<h1 class="text-5xl">Consumer Home Page</h1>

<button class="btn btn-primary" on:click={logout}>Log Out</button>