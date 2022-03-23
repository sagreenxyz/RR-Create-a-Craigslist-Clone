// Import data
import postings from './postings';

// Import components
import Searchbar from './components/Searchbar';
import Directory from './components/Directory';
import Gallery from './components/Gallery';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery postings={postings} />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
