import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";

 const Note = () => {
   const context = useContext(noteContext);
   const { notes, setNotes } = context;
  return (
    <div className="row my-2">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <Noteitem note={note} />
      })}
    </div>
  );
}

export default Note;
