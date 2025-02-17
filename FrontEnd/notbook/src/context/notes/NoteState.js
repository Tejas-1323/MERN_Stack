import { useState } from "react";
import NoteContext from "./noteContext";
const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "67a7267052f5a65b9a50b0cb",
      user: "67a5d441d2d91f9cca5277e8",
      title: "myBook",
      description: "Use for all Developer",
      tag: "personal",
      date: "2025-02-08T09:40:00.274Z",
      __v: 0,
    },
    {
      _id: "67a736e11ca932b2ae1e965a",
      user: "67a5d441d2d91f9cca5277e8",
      title: "myBook",
      description: "Use for all Developer",
      tag: "personal",
      date: "2025-02-08T10:50:09.410Z",
      __v: 0,
    },
    {
      _id: "67a736e11ca932b2ae1e965a",
      user: "67a5d441d2d91f9cca5277e8",
      title: "myBook",
      description: "Use for all Developer",
      tag: "personal",
      date: "2025-02-08T10:50:09.410Z",
      __v: 0,
    },
  ];
      const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}
export default NoteState
