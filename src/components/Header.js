import "./Header.css"

const Header = (props) => {
  const { header } = props;
  return (
    <header>
      <h1 className="name">
        <span className="first-name">{header.firstName}</span>
        <span className="last-name">{header.lastName}</span>
      </h1>
      <div className="contact">
        <a href="mailto:bstephen777@gmail.com">bstephen777@gmail.com</a>
        <span className="separator"></span>
        <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/brett-stephen-5a922138">LinkedIn</a>
      </div>
      {props.children}
    </header>
  )
}

export default Header;

// <div id="visitors">You are visitor #: <span></span></div>