export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', color: "#3781C1" },
    'task-2': { id: 'task-2', color: "#3583B4" },
    'task-3': { id: 'task-3', color: "#3B84A7" },
    'task-4': { id: 'task-4', color: "#39859C" },
    'task-5': { id: 'task-5', color: "#3B8690" },
    'task-6': { id: 'task-6', color: "#3F8782" },
    'task-7': { id: 'task-7', color: "#588473" },
    'task-8': { id: 'task-8', color: "#6C8164" },
    'task-9': { id: 'task-9', color: "#837B5D" },
    'task-10': { id: 'task-10', color: "#907660" },
    'task-11': { id: 'task-11', color: "#9E6E6F" },
    'task-12': { id: 'task-12', color: "#9F6D7C" },
    'task-13': { id: 'task-13', color: "#9C6D89" },
    'task-14': { id: 'task-14', color: "#927099" },
    'task-15': { id: 'task-15', color: "#8F6FA4" },
    'task-16': { id: 'task-16', color: "#8073B2" }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7', 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14', 'task-15', 'task-16'],
    },
    'column-2': {
      id: 'column-2',
      taskIds: [],
    },
  },
  // Facilitate reordering of columns
  columnOrder: ['column-1', 'column-2']
};