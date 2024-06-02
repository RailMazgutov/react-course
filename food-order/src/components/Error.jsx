export default function Error({title, description}) {
    return <div className="error">
        <h2>{title}</h2>
        <p>{description}</p>
    </div>;
}
