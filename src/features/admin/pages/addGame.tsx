import { useMutation, gql } from "@apollo/client";
import { useState } from "react";
import Input from "../../../components/inputs/Input/input";
const ADD_GAME = gql`
  mutation addGame($input: CreateGameInput!) {
    createGame(createGameInput: $input) {
      id
      title
      slug
    }
  }
`;
const defaultGame = {
  title: "",
  slug: "",
  description: "",
  developer: "",
  publisher: "",
  releaseDate: "",
  coverImageUrl: "",
  trailerUrl: "",
};
const AddGame = () => {
  const [formData, setFormData] = useState(defaultGame);

  const [createGame, { data, loading, error }] = useMutation(ADD_GAME);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await createGame({
        variables: {
          input: {
            ...formData,
            releaseDate: new Date(formData.releaseDate),
          },
        },
      });
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {Object.entries(formData).map(([key, value]) => (
          <div key={key}>
            <label className="block font-medium capitalize">{key}</label>
            <Input
              type={key === "releaseDate" ? "date" : "text"}
              name={key}
              value={value}
              onChange={handleChange}
              className="border px-2 py-1 w-full rounded"
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Game
        </button>
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error.message}</p>}
        {data && (
          <p className="text-green-500">
            Game created: {data.createGame.title}
          </p>
        )}
      </form>
    </>
  );
};

export default AddGame;
