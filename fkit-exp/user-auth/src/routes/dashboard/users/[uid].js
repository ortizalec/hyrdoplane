import { db } from '../../../lib/db';
import { doc, getDoc } from "firebase/firestore";
import { idText } from 'typescript';

/** @type {import('./__types/[uid]').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js
  const docRef = doc(db, "users", params.uid);
  let profileNotComplete = false;
  const docSnap = await getDoc(docRef);
  if(!docSnap.exists()) { 
    return {status: 200, body: {name: "Unnamed"}}
  } 
  const data = docSnap.data();
  return {
    status: 200,
    body: {
      name: data.name
    }
  }
}