import { useState } from "react";
import { ConfirmButton } from "../../components/buttons";
import SmallForm from "../../components/formLayouts/SmallForm/SmallForm";
import { useAuthStore } from "../../features/auth/store/useAuthStore";

export default function HomePage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAccessToken } = useAuthStore();
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5053/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, password }),
      });

      if (!res.ok) {
        throw new Error("Login failed");
      }

      const data = await res.json();
      console.log("Login success:", data);

      setAccessToken(data.accessToken);
      setTimeout(() => {
        const currentToken = useAuthStore.getState().accessToken;
        console.log("Access token from store:", currentToken);
      }, 2000);
    } catch (err) {
      console.error("Login error:", err);
    }
  };
  return (
    <div>
      <h1>Home Page</h1>
      <SmallForm formTitle="Login">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border border-gray-300 rounded"
          />
        </div>
        <ConfirmButton label="Login" onClick={handleLogin} />
      </SmallForm>
    </div>
  );
}
