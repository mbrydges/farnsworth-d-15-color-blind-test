'use client'
import styled from 'styled-components'
import Task from './Task'

type Column = {
  title: string
  taskIds: string[]
}

interface Props {
  column: Column
  tasks: string[]
}

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const Title = styled.h3`
  padding: 8px;
  margin: 0px;
`
const TaskList = styled.div`
  padding: 8px;
`

const Column = ({ column, tasks }: Props) => {
  return (
    <Container>
      <Title>{column.title}</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  )
}

export default Column
