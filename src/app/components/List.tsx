'use client'
import Item from './Item'
import { Column, Task } from '@/global'
import dynamic from 'next/dynamic'

interface Props {
  color: string
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

const List = ({ column, tasks, color }: Props) => {
  return (
    <Droppable droppableId={column.id} direction="horizontal">
      {(provided) => (
        <>
          {column.id === 'column-1' ? (
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
          ) : (
            <div className="list">
              <div className="item">
                <div
                  className="item"
                  style={{
                    borderRadius: '8px',
                    border: '4px solid #363636',
                    backgroundColor: color,
                    cursor: 'not-allowed',
                  }}
                ></div>
              </div>
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
            </div>
          )}
        </>
      )}
    </Droppable>
  )
}

export default List
