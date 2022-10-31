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
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			saveNote(note!);
		} else if (type === 'update') {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			updateNote(note!);
		} else if (type === 'delete') {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			deleteNote(note!);
		}
		onCloseOrToggle();
	};
	return <button onClick={handleClick}>{children}</button>;
}

export default NoteDialogBtn;
