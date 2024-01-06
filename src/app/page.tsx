'use client'
import { initialData } from './initialTasks.js'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Columns, Tasks } from '@/global.js'
import List from './components/List'
import { useEffect, useState } from 'react'

export default function Home() {
  const [state, setState] = useState(initialData)

  useEffect(() => {
    console.log(state)
  }, [state])

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

    const column = (state.columns as Columns)[source.droppableId]
    const newTaskIds = Array.from(column.taskIds)
    newTaskIds.splice(source.index, 1)
    newTaskIds.splice(destination.index, 0, draggableId)

    const newColumn = {
      ...column,
      taskIds: newTaskIds,
    }
    console.log('new', newColumn)
    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newColumn.id]: newColumn,
      },
    }
    console.log('state', newState)
    setState(newState)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {state.columnOrder.map((columnId) => {
        const column = (state.columns as Columns)[columnId]
        const tasks = column.taskIds.map(
          (taskId: string) => (state.tasks as Tasks)[taskId]
        )
        return <List key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}
