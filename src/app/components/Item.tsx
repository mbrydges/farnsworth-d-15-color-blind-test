import { Color } from '@/global'
import dynamic from 'next/dynamic'

interface Props {
  key: string
  color: Color
  index: number
}

const Draggable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Draggable
    }),
  { ssr: false }
)

const Item = ({ color, index }: Props) => {
  return (
    <Draggable draggableId={color.id} index={index} key={index}>
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
              backgroundColor: color.color,
            }}
          ></div>
        </div>
      )}
    </Draggable>
  )
}

export default Item
