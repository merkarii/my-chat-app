import React, { useState, useEffect } from "react";
import "./App.css";
import AuthForm from "./components/AuthForm";
import Chat from "./components/Chat";
import { auth, onAuthStateChanged } from "./firebaseConfig";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Chat App</h1>
      </header>
      <main className="App-main">
        {user ? <Chat /> : <AuthForm />}
      </main>
    </div>
  );
}

export default App;
