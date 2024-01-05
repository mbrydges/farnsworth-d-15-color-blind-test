export const initialData = {
  tasks: {
    task1: { id: 'task-1', content: "take out the garbage1" },
    task2: { id: 'task-2', content: "take out the garbage2" },
    task3: { id: 'task-3', content: "take out the garbage3" },
    task4: { id: 'task-4', content: "take out the garbage4" }
  },
  columns: {
    column1: {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task1', 'task2', 'task3', 'task4'],
    },
  },
  // Facilitate reordering of column
  columnOrder: ['column1']
};