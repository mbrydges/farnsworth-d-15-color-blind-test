'use client'
import { initialData } from './initialTasks.js'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Columns, Tasks } from '@/global.js'
import List from './components/List'
import { useState } from 'react'

const shuffle = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5)
}

const pin = (arrayStart: string[], arrayFinish: string[]) => {
  // Use shuffle here  eventually
  arrayFinish.push(arrayStart[0])
  arrayStart.splice(0, 1)
}

// Initialize second row
pin(
  (initialData.columns as Columns)['column-1'].taskIds,
  (initialData.columns as Columns)['column-2'].taskIds
)

shuffle((initialData.columns as Columns)['column-1'].taskIds)

export default function Home() {
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

    const start = (state.columns as Columns)[source.droppableId]
    const finish = (state.columns as Columns)[destination.droppableId]

    // Moving within same list
    if (start == finish) {
      const newTaskIds = Array.from(start.taskIds)
      newTaskIds.splice(source.index, 1)
      newTaskIds.splice(destination.index, 0, draggableId)

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      }
      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      }
      setState(newState)
      return
    }

    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    }
    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    }
    const newState = {
      ...state,
      columns: {
        ...state.columns,
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
          {state.columnOrder.map((columnId) => {
            const column = (state.columns as Columns)[columnId]
            const tasks = column.taskIds.map(
              (taskId: string) => (state.tasks as Tasks)[taskId]
            )
            return <List key={column.id} column={column} tasks={tasks} />
          })}
        </div>
      </DragDropContext>
    </>
  )
}
