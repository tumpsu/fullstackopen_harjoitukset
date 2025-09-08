const Hello = (props) => {
  return (
    <div>

      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>

      <Hello name="Pia"/>
      <Hello name="Tia"/>
      <Hello name="Sarah"/>
    </div>
  )
}
export default App