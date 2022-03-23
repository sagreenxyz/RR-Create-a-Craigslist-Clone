// Import data

// Import components
import './App.css';

function Gallery() {
  return (
    <div className="Gallery">
      <p>Gallery</p>
      <div className="Posting">
        <p>Posting</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <div className="Searchbar">
          <p>Searchbar</p>
        </div>
        <div className="Directory">
          <p>Directory</p>
        </div>
        <Gallery />
        <div className="Sidebar">
          <p>Sidebar</p>
          <div className="Help">
            <p>Help</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
