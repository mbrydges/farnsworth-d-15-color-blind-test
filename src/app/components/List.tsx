'use client'
import styled from 'styled-components'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'
import { Column, Task } from '@/global'

const StyledContainer = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`
const StyledTitle = styled.h3`
  padding: 8px;
  margin: 0px;
`
const StyledList = styled.div`
  padding: 8px;
`

interface Props {
  column: Column
  tasks: Task[]
}

const List = ({ column, tasks }: Props) => {
  return (
    <StyledContainer>
      <StyledTitle>{column.title}</StyledTitle>
      <Droppable droppableId={column.id}>
        {(provided) => (
          <StyledList ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task: any, index: number) => (
              <Item key={task} task={task} index={index} />
            ))}
            {provided.placeholder}
          </StyledList>
        )}
      </Droppable>
    </StyledContainer>
  )
}

export default List
