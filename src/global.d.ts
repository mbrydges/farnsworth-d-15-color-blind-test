// global.d.ts
export type Task = {
  id: string
  color: string
}

export type Tasks = {
  [key: string]: Task
}

export type Column = {
  id: string
  taskIds: string[]
}

export type Columns = {
  [key: string]: Column
}
