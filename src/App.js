// Import data
import postings from './postings';

// Import components
import './App.css';

function Gallery(props) {
  return (
    <div className="Gallery">
      <p>Gallery</p>
      {props.postings.map((data, i) => {
        return <Posting data={data} key={i}/>
      })}
    </div>
  )
}

function Posting(props) {
  return (
    <div className="Posting">
      <h1>{props.data.title}</h1>
      <p>{props.data.description}</p>
      <img src={props.data.imageURL} alt={props.data.title} />
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
      <Help />
    </div>
  )
}

function Help() {
  return (
    <div className="Help">
      <p>Help</p>
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
        <Gallery postings={postings}/>
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
