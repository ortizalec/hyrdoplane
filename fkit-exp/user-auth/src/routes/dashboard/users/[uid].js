import { db } from '../../../lib/db';
import { doc, getDoc } from "firebase/firestore";

/** @type {import('./__types/[uid]').RequestHandler} */
export async function get({ params }) {
  // `params.id` comes from [id].js
  const docRef = doc(db, "users", params.uid);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return {
    status: 202,
    body: {
      name: data.name
    }
  }
}