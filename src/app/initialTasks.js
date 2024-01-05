export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: "take out the garbage1" },
    'task-2': { id: 'task-2', content: "take out the garbage2" },
    'task-3': { id: 'task-3', content: "take out the garbage3" },
    'task-4': { id: 'task-4', content: "take out the garbage4" }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
    },
  },
  // Facilitate reordering of column
  columnOrder: ['column-1']
};