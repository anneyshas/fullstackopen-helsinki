const Header = (prop) => {
  return (
    <div>
    <h1>{prop.course}</h1>
    </div>
  )
}

const Content = (prop) => {
  return (
    <div>
      <p>{prop.part} {prop.exercises}</p>
    </div> 
  )
}

const Part = (prop) => {
  return (
    <div>
      <Content part={prop.parts[0].part} exercises={prop.parts[0].exercises}/>
      <Content part={prop.parts[1].part} exercises={prop.parts[1].exercises}/>
      <Content part={prop.parts[2].part} exercises={prop.parts[2].exercises}/>
    </div>
  )
}

const Total = (prop) => {
  return (
    <div>
      <p> Number of exercises {prop.parts[0].exercises + prop.parts[1].exercises + prop.parts[2].exercises}</p>
    </div>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
        {part: 'Fundamentals of React', exercises: 10},
        {part: 'Using props to pass data', exercises: 7},
        {part: 'State of a component', exercises:14}
      ]
  }

  return (
    <div>
      <Header course={course.name}/>

      <Part parts={course.parts}/>

      <Total parts={course.parts}/>
    </div>
  )
}

export default App