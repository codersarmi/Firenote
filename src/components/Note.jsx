import DeleteIcon from "../svgs/DeleteIcon";
import "./Note.css";

const Note = ({ note, getNotes }) => {
  const { note: text, id } = note;

  const deleteNotes = async () => {
    try {
      const response = await fetch(
        `https://firenote-c9927-default-rtdb.firebaseio.com/note/${id}.json`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Fail to Delete !");
      }

      getNotes();
    } catch (err) {
      alert(err.message);
    }
  };
  return (
    <div className="card card_ctr">
      <p className="card_note">+ {text}</p>
      <div onClick={deleteNotes}>
        <DeleteIcon />
      </div>
    </div>
  );
};

export default Note;
