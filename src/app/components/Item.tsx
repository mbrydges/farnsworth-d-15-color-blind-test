import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'
import { Task } from '@/global'

interface Props {
  key: string
  task: Task
  index: number
}

const StyledItem = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  background-color: white;
  margin-bottom: 8px;
`

const Item = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <StyledItem
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {task.content}
        </StyledItem>
      )}
    </Draggable>
  )
}

export default Item
