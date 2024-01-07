import { Task } from '@/global'
import dynamic from 'next/dynamic'

interface Props {
  key: string
  task: Task
  index: number
}

const Draggable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Draggable
    }),
  { ssr: false }
)

const Item = ({ task, index }: Props) => {
  return (
    <Draggable draggableId={task.id} index={index} key={index}>
      {(provided) => (
        <div
          className="item"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {/*task.content[0]*/}
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '8px',
              border: '5px solid #363636',
              backgroundColor: task.color,
            }}
          ></div>
        </div>
      )}
    </Draggable>
  )
}

export default Item
