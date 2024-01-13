'use client'
import { initialData } from '../initialData.js'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Colors, Rows } from '@/global.js'
import List from './List'
import { useState } from 'react'
import Toolbar from './Toolbar'

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const initColor = (arrayStart: string[]) => {
  const colorId = arrayStart[0]
  const color = (initialData.colors as Colors)[colorId]
  arrayStart.splice(0, 1)
  return color.color
}

let color = initColor((initialData.rows as Rows)['row-1'].colorIds)

shuffle((initialData.rows as Rows)['row-1'].colorIds)

export default function Context() {
  const [state, setState] = useState(initialData)

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result

    if (!destination) {
      return
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return
    }

    const start = (state.rows as Rows)[source.droppableId]
    const finish = (state.rows as Rows)[destination.droppableId]

    // Moving within same list
    if (start == finish) {
      const newColorIds = Array.from(start.colorIds)
      newColorIds.splice(source.index, 1)
      newColorIds.splice(destination.index, 0, draggableId)

      const newRow = {
        ...start,
        colorIds: newColorIds,
      }
      const newState = {
        ...state,
        rows: {
          ...state.rows,
          [newRow.id]: newRow,
        },
      }
      setState(newState)
      return
    }

    // Moving from one list to another
    const startColorIds = Array.from(start.colorIds)
    startColorIds.splice(source.index, 1)
    const newStart = {
      ...start,
      colorIds: startColorIds,
    }
    const finishColorIds = Array.from(finish.colorIds)
    finishColorIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      colorIds: finishColorIds,
    }
    const newState = {
      ...state,
      rows: {
        ...state.rows,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    }
    setState(newState)
    return
  }

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="list-container">
          <div className="instructions">
            <p>Farnsworth D-15 Color Blind Test</p>
          </div>
          {state.rowOrder.map((rowId) => {
            const row = (state.rows as Rows)[rowId]
            const colors = row.colorIds.map(
              (taskId: string) => (state.colors as Colors)[taskId]
            )
            return <List key={row.id} row={row} colors={colors} color={color} />
          })}
        </div>
      </DragDropContext>
      <div className="toolbar">
        <button className="pushable">
          <span className="front">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              stroke="currentColor"
              style={{
                display: 'grid',
                justifyContent: 'center',
                color: '#ffffff',
                width: '16px',
                margin: 'auto',
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          </span>
        </button>
        <button
          className="pushable"
          onClick={() => console.log(state.rows['row-2'].colorIds)}
        >
          <span className="front">Check</span>
        </button>
      </div>
    </>
  )
}
