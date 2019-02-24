const Article = (props) => (
    <div>
        <Title text={props.title}></Title>
        <p>{props.text}</p>
        <Link text="Facebook" url="https://www.facebook.com/" />
    </div>

);