'use client'
import { Color, Row } from '@/lib/types'
import dynamic from 'next/dynamic'
import { DndDraggable } from './DndDraggable'

type Props = {
  color: string
  colors: Color[]
  row: Row
}

const Droppable = dynamic(
  () =>
    import('react-beautiful-dnd').then((mod) => {
      return mod.Droppable
    }),
  { ssr: false }
)

export function DndDroppable({ row, colors, color }: Props) {
  return (
    <Droppable droppableId={row.id} direction="horizontal">
      {(provided) => (
        <>
          {row.id === 'row-1' ? (
            <div
              className="draggable-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {colors.map((color: any, index: number) => (
                <DndDraggable key={color.id} color={color} index={index} />
              ))}
              {provided.placeholder}
            </div>
          ) : (
            <div className="draggable-container">
              <div className="draggable">
                <div
                  className="draggable"
                  style={{
                    borderRadius: '8px',
                    backgroundColor: color,
                    width: '100%',
                    cursor: 'not-allowed',
                  }}
                ></div>
              </div>
              <div
                className="draggable-container"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {colors.map((color: any, index: number) => (
                  <DndDraggable key={color.id} color={color} index={index} />
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
