import { createContext, useState } from "react";
export const Message_data = createContext(null);

function Context({ children }) {
  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("");

  return (
    <Message_data.Provider
      value={{ title, setTitle, description, setDescription }}
    >
      {children}
    </Message_data.Provider>
  );
}

export default Context;
