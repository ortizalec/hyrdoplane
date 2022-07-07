<script>
  import { auth } from "$lib/db";
  import { signOut } from "firebase/auth";

  function logout(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }
</script>

<h1 class="text-5xl">Producer Home Page</h1>

<button class="btn btn-primary" on:click={logout}>Log Out</button>