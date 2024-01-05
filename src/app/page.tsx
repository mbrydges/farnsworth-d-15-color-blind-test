'use client'
import { initialData } from './initialTasks.js'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import { Columns, Tasks } from '@/global.js'
import List from './components/List'

export default function Home() {
  const onDragEnd = (result: DropResult) => {}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {initialData.columnOrder.map((columnId) => {
        const column = (initialData.columns as Columns)[columnId]
        console.log(column)

        const tasks = column.taskIds.map(
          (taskId: string) => (initialData.tasks as Tasks)[taskId]
        )
        console.log(column)

        console.log(tasks)

        return <List key={column.id} column={column} tasks={tasks} />
      })}
    </DragDropContext>
  )
}
