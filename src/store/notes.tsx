import { createContext, useContext, useEffect, useState } from 'react';
import { INote } from '../typings';

const useNotes = () => {
  const [notes, setNotes] = useState<INote[]>([]);

  // Check for notes in local storage
  useEffect(() => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      setNotes(JSON.parse(notes));
    } else {
      setNotes([]);
      localStorage.setItem('notes', JSON.stringify([]));
    }
  }, []);

  // Save notes to local storage
  const saveNote = (note: INote) => {
    const savedNotes = localStorage.getItem('notes');
    if (savedNotes) {
      const notesArray = JSON.parse(savedNotes);
      notesArray.push(note);
      localStorage.setItem('notes', JSON.stringify(notesArray));
      setNotes(notesArray);
    } else {
      localStorage.setItem('notes', JSON.stringify([note]));
      setNotes([note]);
    }
  };

  // Delete note from local storage
  const deleteNote = (note: INote) => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      const notesArray = JSON.parse(notes);
      const newNotesArray = notesArray.filter(
        (noteItem: INote) => noteItem.id !== note.id
      );
      localStorage.setItem('notes', JSON.stringify(newNotesArray));
      setNotes(newNotesArray);
    }
  };

  // Update note in local storage and state
  const updateNote = (editedNote: INote) => {
    const notes = localStorage.getItem('notes');
    if (notes) {
      const notesArray = JSON.parse(notes);
      const newNotesArray = notesArray.map((note: INote) => {
        if (note.id === editedNote.id) {
          return editedNote;
        }
        return note;
      });
      localStorage.setItem('notes', JSON.stringify(newNotesArray));
      setNotes(newNotesArray);
    }
  };

  return {
    notes,
    saveNote,
    deleteNote,
    updateNote,
  };
};

const NoteContext = createContext({} as ReturnType<typeof useNotes>);
export const NoteProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <NoteContext.Provider value={useNotes()}>{children}</NoteContext.Provider>
  );
};

export const useNotesSelector = () => useContext(NoteContext).notes;
export const useSaveNote = () => useContext(NoteContext).saveNote;
export const useDeleteNote = () => useContext(NoteContext).deleteNote;
export const useUpdateNote = () => useContext(NoteContext).updateNote;
