<script>
  import { auth } from "../../../lib/db";
  import { signInWithEmailAndPassword } from "firebase/auth";

  let email;
  let password;

  function login(){
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials.user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });
  }

</script>

<div class="flex justify-center h-screen w-screen items-center">
  <form on:submit|preventDefault  class="p-5 shadow-lg rounded-lg bg-base-200">
    <div class="form-control gap-4">
      <h1 class=" card-title">Login</h1>
      <label class="input-group">
        <span class="w-[50%]">Email</span>
        <input type="email" placeholder="info@site.com" name="email" class="input input-bordered" required bind:value={email}/>
      </label>
      <label class="input-group">
        <span class="w-[50%]">Password</span>
        <input type="password" placeholder="" name="password" class="input input-bordered" required bind:value={password}/>
      </label>
      <button class="btn" on:click={login}>Log In</button>
      <a href="/producer/signup" class="btn bg-primary">Need an Account ?</a>
    </div>
  </form>
</div>