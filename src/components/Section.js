import './Section.css'

const Section = (props) => {
  const { title } = props
  return (
    <section>
      {title ? (
        <h2>{props.title}:</h2>
      ) : null}
      {props.children}
    </section>
  )
}

export default Section