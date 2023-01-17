import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { INote } from '../../typings';
import NoteDialog from '../NoteDialog/NoteDialog';

interface IProps {
	type: 'create' | 'note';
	note?: INote;
	children: React.ReactNode;
}

function Note({ type, note, children }: IProps) {
	const [showNoteDialog, setShowNoteDialog] = useState(false);

	return (
		<>
			<div
				onClick={() => setShowNoteDialog(true)}
				className={`md:h-[20rem] border border-black/60 rounded p-2 cursor-pointer shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300 overflow-clip ${
					type === 'create'
						? 'bg-black text-white text-2xl flex items-center justify-center'
						: 'bg-white '
				}`}
			>
				<ReactMarkdown>{children as string}</ReactMarkdown>
			</div>

			{showNoteDialog ? (
				<NoteDialog
					onClose={() => setShowNoteDialog(!showNoteDialog)}
					type={type}
					note={note}
				/>
			) : null}
		</>
	);
}

export default Note;
