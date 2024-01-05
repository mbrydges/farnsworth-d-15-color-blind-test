import { initialData } from './initialTasks.js'
import Column from './components/Column'

export default function Home() {
  /*
  return initialData.columnOrder.map((columnId) => (
    <div
      key={columnId}
      style={{ backgroundColor: 'red', width: '10px', height: '10px' }}
    ></div>
  ))
    */

  return initialData.columnOrder.map((columnId) => {
    const column = (initialData.columns as any)[columnId]
    const tasks = column.taskIds.map(
      (taskId: any) => (initialData.tasks as any)[taskId]
    )
    return <Column key={columnId} column={column} tasks={tasks} />
  })
}
