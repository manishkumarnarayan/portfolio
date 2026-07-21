import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function submitContact(name, email, subject, message) {
  try {
    await addDoc(collection(db, "contactSubmissions"), {
      name,
      email,
      subject,
      message,
      createdAt: serverTimestamp(),
    });
    console.log("Message sent!");
  } catch (err) {
    console.error(err);
  }
}