import React, { useEffect, useState } from 'react';
import { INote } from '../../typings';
import Note from './Note';

interface Props {
  notes: INote[];
}

function NoteList(props: Props) {
  const { notes } = props;
  const [hasNotes, setHasNotes] = useState(false);

  // Check for notes
  useEffect(() => {
    if (notes.length > 0) {
      setHasNotes(true);
    } else {
      setHasNotes(false);
    }
  }, [notes]);

  return (
    <div className="grid grid-cols-1 gap-4 pb-12 pt-8 px-4 max-w-7xl mx-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      <Note type="create">{'New Note +'}</Note>

      {hasNotes &&
        notes.map((note) => (
          <Note key={note.id} note={note} type="note">
            {note.text}
          </Note>
        ))}
    </div>
  );
}

export default NoteList;
