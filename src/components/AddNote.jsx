import { useState } from "react";
import "./AddNote.css";

const AddNote = ({ getNotes }) => {
  const [note, setNote] = useState("");

  const addNote = async (e) => {
    e.preventDefault();
    try {
      await fetch(
        "https://firenote-c9927-default-rtdb.firebaseio.com/note.json",
        {
          method: "POST",
          body: JSON.stringify(note),
          headers: { "Content-Type": "application/json" },
        }
      );

      setNote("");
      getNotes();
    } catch (error) {
      alert("Something is wrong !");
    }
  };
  return (
    <section>
      <form className="card" onSubmit={addNote}>
        <input
          className="input"
          type="text"
          placeholder="Add note here"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button className="submit-btn">Add Note</button>
      </form>
    </section>
  );
};

export default AddNote;
