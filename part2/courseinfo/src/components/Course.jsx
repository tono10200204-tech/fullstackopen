const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = ({ part }) => {
  return <p>{part.name} {part.exercises}</p>
}

const Content = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <div>
      {parts.map(part =>
        <Part key={part.id} part={part} />
      )}
      <p>total of {total} exercises</p>
    </div>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </div>
  )
}

export default Course