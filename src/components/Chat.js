import React, { useState, useEffect } from "react";
import {
  auth,
  firestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  signOut,
} from "../firebaseConfig";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const messagesRef = collection(firestore, "messages");
    const messagesQuery = query(messagesRef, orderBy("createdAt"));
    const unsubscribe = onSnapshot(messagesQuery, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => doc.data());
      setMessages(fetchedMessages);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (input) {
      const messagesRef = collection(firestore, "messages");
      await addDoc(messagesRef, {
        text: input,
        createdAt: new Date().toISOString(),
      });
      setInput("");
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h2>Chat</h2>
      <button onClick={handleSignOut}>Log Out</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
