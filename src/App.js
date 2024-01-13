import React from "react";
import { supabase } from "./lib/supabaseClient";

export default function App() {
  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  return (
    <div>
      <button>Login with github</button>
    </div>
  );
}
