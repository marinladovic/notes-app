import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { INote } from '../../typings';
import generateRandomId from '../../utils/gengerateRandomId';
import { dummyText } from '../../utils/dummyText';
import NoteDialogBtn from './NoteDialogBtn';

interface Props {
	onClose: () => void;
	type: 'create' | 'note';
	note?: INote;
}

function NoteDialog(props: Props) {
	const { onClose, type, note } = props;
	const [displayedNote, setDisplayedNote] = useState<INote>({} as INote);
	const [isEditing, setIsEditing] = useState(false);

	// Set displayed note to dummy note or note prop if it exists
	useEffect(() => {
		if (type === 'create') {
			setDisplayedNote({
				id: generateRandomId(),
				text: dummyText
			});
			setIsEditing(true);
		} else {
			// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
			setDisplayedNote(note!);
			setIsEditing(false);
		}
	}, []);

	const textChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setDisplayedNote({
			...displayedNote,
			text: e.target.value
		});
	};

	return (
		<div className="fixed z-10 top-0 left-0 bottom-0 right-0 overflow-auto bg-black/40 px-2 md:px-0">
			<div
				onClick={e => e.stopPropagation()}
				className="bg-white my-[10%] p-5 w-full rounded flex flex-col gap-y-4 shadow-2xl md:w-1/2 md:mx-auto"
			>
				<div className="flex justify-between">
					<NoteDialogBtn type="close" onCloseOrToggle={onClose}>
						Back
					</NoteDialogBtn>
					<div className="flex gap-x-4">
						{type === 'create' && (
							<NoteDialogBtn
								type="save"
								note={displayedNote}
								onCloseOrToggle={onClose}
							>
								Save
							</NoteDialogBtn>
						)}
						{type === 'note' && (
							<>
								{!isEditing ? (
									<NoteDialogBtn
										type="edit"
										onCloseOrToggle={() => setIsEditing(!isEditing)}
									>
										Edit
									</NoteDialogBtn>
								) : (
									<NoteDialogBtn
										type="update"
										note={displayedNote}
										onCloseOrToggle={() => setIsEditing(!isEditing)}
									>
										Update
									</NoteDialogBtn>
								)}
								<NoteDialogBtn
									type="delete"
									note={displayedNote}
									onCloseOrToggle={onClose}
								>
									Delete
								</NoteDialogBtn>
							</>
						)}
					</div>
				</div>
				{isEditing ? (
					<textarea
						className="w-full h-80 border border-black/20 rounded p-2"
						onChange={textChangeHandler}
						value={displayedNote.text}
					/>
				) : (
					<ReactMarkdown>{displayedNote.text}</ReactMarkdown>
				)}
			</div>
		</div>
	);
}

export default NoteDialog;
