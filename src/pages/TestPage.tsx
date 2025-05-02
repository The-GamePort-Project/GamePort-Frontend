import React from "react";
import { useQuery } from "@apollo/client";
import { clearAccessToken, gqlService } from "../Services";

// GraphQL query to get all users

const TestPage: React.FC = () => {
  const { data, loading, error, refetch } = useQuery(
    gqlService.query.GET_USERS
  );

  const handleDeleteAccessToken = () => {
    clearAccessToken();
    alert("Access token deleted!");
  };

  const handleGetAllUsers = async () => {
    try {
      const result = await refetch();
      console.log("Users fetched successfully:", result.data);
      alert("Users fetched successfully! Check the console for details.");
    } catch (err) {
      console.error("Error fetching users:", err);
      alert("Failed to fetch users. Check the console for details.");
    }
  };
  setTimeout(() => {
    console.log("Users:", data);
  }, 3000);
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Test Page</h1>
      <button onClick={handleDeleteAccessToken}>Delete Access Token</button>
      <button onClick={handleGetAllUsers} disabled={loading}>
        {loading ? "Loading..." : "Get All Users"}
      </button>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Users:</h2>
          <ul>
            {data.getUsers.map(
              (user: { id: string; firstname: string; email: string }) => (
                <li key={user.id}>
                  {user.firstname} ({user.email})
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TestPage;
