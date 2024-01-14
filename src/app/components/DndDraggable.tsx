'use client'
import { Color } from '@/lib/types'
import dynamic from 'next/dynamic'

type Props = {
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

export function DndDraggable({ color, index }: Props) {
  return (
    <Draggable draggableId={color.id} index={index} key={index}>
      {(provided) => (
        <div
          className="draggable"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
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
