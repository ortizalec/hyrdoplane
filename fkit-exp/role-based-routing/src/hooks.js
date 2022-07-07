import { auth } from '$lib/db.js';

/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  if (event.url.pathname.startsWith('/producer')) {
    if(!auth.currentUser){
      //return Response.redirect(event.url.origin + '/loginhub');
    }
  }
 
  const response = await resolve(event);
  return response;
}