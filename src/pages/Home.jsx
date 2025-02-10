import { useRef } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "@firebase/firestore";

const Home = () => {
  const messageRef = useRef();
  const ref = collection(db, "messages");

  const handleSave = async (e) => {
    e.preventDefault();
    console.log(messageRef.current.value);
    let data = {
      message: messageRef.current.value,
    };

    try {
      addDoc(ref, data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSave}>
        <label htmlFor="">Enter message</label>
        <input type="text" id="" ref={messageRef} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Home;
