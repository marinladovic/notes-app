import NoteList from './components/Notes/NoteList';
import PageHeader from './components/UIComponents/PageHeader';
import { useNotesSelector } from './hooks/useNotes';

function App() {
  const notes = useNotesSelector();
  const pageTitle = {
    main: 'Notes App',
    subheading: 'All your notes in one place',
  };

  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <NoteList notes={notes} />
    </>
  );
}

export default App;
