// Import data

// Import components
import './App.css';

function Gallery() {
  return (
    <div className="Gallery">
      <p>Gallery</p>
      <Posting />
    </div>
  )
}

function Posting() {
  return (
    <div className="Posting">
      <p>Posting</p>
    </div>
  )
}

function Searchbar() {
  return (
    <div className="Searchbar">
      <p>Searchbar</p>
    </div>
  )
}

function Directory() {
  return (
    <div className="Directory">
      <p>Directory</p>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="Sidebar">
      <p>Sidebar</p>
      <div className="Help">
        <p>Help</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App">
        <Searchbar />
        <Directory />
        <Gallery />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
