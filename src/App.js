import AddNote from "./components/AddNote";
import Note from "./components/Note";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";
import Intro from "./components/Intro";

function App() {
  useEffect(() => {
    getNotes();
  }, []);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getNotes = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://firenote-c9927-default-rtdb.firebaseio.com/note.json"
      );

      if (!response.ok) {
        throw new Error("Something Went Wrong! Please try again !");
      }

      const getNoteData = await response.json();

      const modifiedNote = [];

      for (const key in getNoteData) {
        modifiedNote.push({
          id: key,
          note: getNoteData[key],
        });
      }

      setNotes(modifiedNote);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <>
      <NavBar totalNotes={notes.length} />
      {loading && !error && <p className="message">Getting Notes.</p>}
      {error && !loading && <p className="message err">{error}</p>}
      {!loading && !error && (
        <>
          <AddNote getNotes={getNotes} />
          {notes.map((note, index) => (
            <Note key={index} note={note} getNotes={getNotes} />
          ))}
        </>
      )}
      {notes.length === 0 && <Intro />}
    </>
  );
}

export default App;
