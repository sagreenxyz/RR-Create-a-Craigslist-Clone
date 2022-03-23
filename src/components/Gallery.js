import Posting from './Posting';

function Gallery(props) {
    return (
        <div className="Gallery">
            <p>Gallery</p>
            {props.postings.map((data, i) => {
                return <Posting data={data} key={i} />
            })}
        </div>
    )
}

export default Gallery;