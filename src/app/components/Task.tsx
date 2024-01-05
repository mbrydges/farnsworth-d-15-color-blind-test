import styled from 'styled-components'

type Task = {
  content: string
}

interface Props {
  task: Task
}

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`

const Task = ({ task }: Props) => {
  return <Container>{task.content}</Container>
}

export default Task
