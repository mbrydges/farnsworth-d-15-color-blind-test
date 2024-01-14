'use client'
import { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { DndDroppable } from './DndDroppable'
import { Colors, Rows } from '@/lib/types'
import Toolbar from './Toolbar'
import { initialData } from '../initialData'
import { shuffle } from '@/lib/functions'

const initColor = (array: string[], index: number) => {
  const colorId = array[index]
  const init = (initialData.colors as Colors)[colorId]
  array.splice(index, 1)
  return init.color
}

let color = initColor((initialData.rows as Rows)['row-1'].colorIds, 0)

shuffle((initialData.rows as Rows)['row-1'].colorIds)

export default function DndContext() {
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
    <div className="context-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="droppable-container">
          {state.rowOrder.map((rowId) => {
            const row = (state.rows as Rows)[rowId]
            const colors = row.colorIds.map(
              (taskId: string) => (state.colors as Colors)[taskId]
            )
            return (
              <DndDroppable
                key={row.id}
                row={row}
                colors={colors}
                color={color}
              />
            )
          })}
        </div>
      </DragDropContext>
      <Toolbar state={state} />
    </div>
  )
}
