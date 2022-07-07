<script>
  import "../app.css";
  import { goto } from "$app/navigation";
  import { auth } from "$lib/db";
  import { browser } from "$app/env";
  import { onAuthStateChanged } from "firebase/auth";
  import { getDoc, doc} from "firebase/firestore";
  import { db } from "$lib/db";

  if(browser){
    onAuthStateChanged(auth, async (user) => {
      if(user){
        const ref = doc(db, "users", user.uid)
        const snap = await getDoc(ref);
        if(snap.exists()){
          const role = snap.data().role
          console.log(role);
          goto("/" + role + "/dashboard")
        }
      }
      else{
        goto('/')
      }
    })
  }
</script>

<slot />