'use client'
import Item from './Item'
import { Column, Task } from '@/global'
import dynamic from 'next/dynamic'

interface Props {
  column: Column
  tasks: Task[]
}

const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Droppable
    }),
  { ssr: false }
)

const List = ({ column, tasks }: Props) => {
  return (
    <Droppable droppableId={column.id} direction="horizontal">
      {(provided) => (
        <div
          className="list"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {tasks.map((task: any, index: number) => (
            <Item key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default List
