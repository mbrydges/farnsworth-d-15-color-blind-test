'use client'
import Item from './Item'
import { Color, Row } from '@/global'
import dynamic from 'next/dynamic'

interface Props {
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

const List = ({ row, colors, color }: Props) => {
  return (
    <Droppable droppableId={row.id} direction="horizontal">
      {(provided) => (
        <>
          {row.id === 'row-1' ? (
            <div
              className="list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {colors.map((color: any, index: number) => (
                <Item key={color.id} color={color} index={index} />
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
                {colors.map((color: any, index: number) => (
                  <Item key={color.id} color={color} index={index} />
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
