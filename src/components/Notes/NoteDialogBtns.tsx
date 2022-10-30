import { useSaveNote, useDeleteNote, useUpdateNote } from '../../store/notes';
import { INote } from '../../typings';

export const CloseNoteDialogBtn = ({ onClose }: { onClose: () => void }) => {
  return <button onClick={onClose}>Back</button>;
};

export const SaveNoteBtn = ({
  note,
  onClose,
}: {
  note: INote;
  onClose: () => void;
}) => {
  const saveNote = useSaveNote();
  return (
    <button
      onClick={() => {
        saveNote(note);
        onClose();
      }}
    >
      Save
    </button>
  );
};

export const DeleteNoteBtn = ({
  note,
  onClose,
}: {
  note: INote;
  onClose: () => void;
}) => {
  const deleteNote = useDeleteNote();
  return (
    <button
      onClick={() => {
        deleteNote(note);
        onClose();
      }}
    >
      Delete
    </button>
  );
};

export const EditNoteBtn = ({ onToggle }: { onToggle: () => void }) => {
  return <button onClick={onToggle}>Edit</button>;
};

export const UpdateNoteBtn = ({
  editedNote,
  onToggle,
}: {
  editedNote: INote;
  onToggle: () => void;
}) => {
  const updateNote = useUpdateNote();
  return (
    <button
      onClick={() => {
        updateNote(editedNote);
        onToggle();
      }}
    >
      Update
    </button>
  );
};
