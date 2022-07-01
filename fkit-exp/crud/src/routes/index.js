import { db } from '../lib/db';
import { collection, query, where, getDocs, doc, addDoc, DocumentSnapshot, deleteDoc, updateDoc } from "firebase/firestore";

class Tag
{
  constructor(name){
    this.name = name
  }
}

const TagConverter = {
  /** @param {Tag} tag */
  toFirestore: (tag) => {
    return {
      name: tag.name
    };
  },
  /** @param {DocumentSnapshot} snapshot */
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new Tag(data.name);
  }
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get()
{
  // Get multiple documents from a collection
  const q = query(collection(db, "tags"));
  const querySnapshot = await getDocs(q);
  let documents;
  documents = querySnapshot.docs.map((doc)=> ({
    ...doc.data(),
    id: doc.id,
  }));

  return {
    body: {
      documents
    }
  }
}


/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post({request})
{
  const data = await request.formData(); // or .json(), or .text(), etc
  const tag = new Tag(data.get("name"));
  if(tag.name === ""){
    return {
      status: 400
    }
  }
  const docRef = addDoc(collection(db, "tags"), TagConverter.toFirestore(tag))

  return {
    status: 200,
    headers: {
      location: '/'
    }
  }
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put({request})
{
  console.log("put request")
  const data = await request.json()
  const id = data.id;
  const name = data.name;
  const docRef = doc(db, "tags", id);
  // Set the "capital" field of the city 'DC'
  await updateDoc(docRef, {
    name: name
  }); 
  return {
    status: 200,
  }
}

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function del({request}) {
  console.log("delete request")
  const data = await request.json()
  const id = data.id;
  await deleteDoc(doc(db, "tags", id));
  
  return {
    status: 200,
    body: {
      
    }
  }
}