import NoteList from './components/Notes/NoteList';
import PageHeader from './components/UIComponents/PageHeader';
import { useNotesSelector } from './store/notes';

function App() {
  const notes = useNotesSelector();
  const pageTitle = { main: 'Notes App', subheading: 'All your notes' };

  return (
    <>
      <PageHeader pageTitle={pageTitle} />
      <NoteList notes={notes} />
    </>
  );
}

export default App;
