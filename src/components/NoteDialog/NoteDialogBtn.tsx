import React from 'react';
import {
	useSaveNote,
	useDeleteNote,
	useUpdateNote
} from '../../hooks/useNotes';
import { INote } from '../../typings';

interface Props {
	children: React.ReactNode;
	note?: INote;
	type: 'close' | 'save' | 'edit' | 'update' | 'delete';
	onCloseOrToggle: () => void;
}

function NoteDialogBtn(props: Props) {
	const { children, note, type, onCloseOrToggle } = props;
	const saveNote = useSaveNote();
	const deleteNote = useDeleteNote();
	const updateNote = useUpdateNote();

	const handleClick = () => {
		if (type === 'save') {
			note && saveNote(note);
		} else if (type === 'update') {
			note && updateNote(note);
		} else if (type === 'delete') {
			note && deleteNote(note);
		}
		onCloseOrToggle();
	};
	return <button onClick={handleClick}>{children}</button>;
}

export default NoteDialogBtn;
