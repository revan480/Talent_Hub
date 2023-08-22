import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from "../firebase.config";

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "talentitems", `${Date.now()}`), data, {
    merge: true,
  });
};

// getall talent items
export const getAllTalentItems = async () => {
  const items = await getDocs(
    query(collection(firestore, "talentitems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};