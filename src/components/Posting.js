function Posting(props) {
    return (
        <div className="Posting">
            <h1>{props.data.title}</h1>
            <p>{props.data.description}</p>
            <img src={props.data.imageURL} alt={props.data.title} />
        </div>
    )
}

export default Posting;