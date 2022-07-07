<script context="module">
  import { auth } from "$lib/db.js";
  import { db } from "$lib/db.js";
  import { doc, getDoc} from "firebase/firestore";
  
  export async function load() {
    const user = auth.currentUser;
    if(user == null){
      return {
        status: 302,
        redirect: "/login" 
      }
    }
    else{
      const ref = doc(db, "users", user.uid)
      const snap = await getDoc(ref);
      if(snap.exists()){
        const role = snap.data().role
        console.log(role);
        if(role != "producer"){
          return {
            status: 302,
            redirect: "/" + role + "/dashboard"
          }
        }
      }
    }
    return {
      props: {
        currentUser: user,
      }
    }
  };
</script>

<script>
    /** @type { import ("firebase/auth").User}*/
  export let currentUser;

</script>

{#if currentUser}
  <slot/>
  {currentUser.uid}
{:else}
<h1>No user</h1>
{/if}