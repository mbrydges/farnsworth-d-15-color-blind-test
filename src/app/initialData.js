export const initialData = {
  colors: {
    'color-1': { id: 'color-1', color: "#3781C1" },
    'color-2': { id: 'color-2', color: "#3583B4" },
    'color-3': { id: 'color-3', color: "#3B84A7" },
    'color-4': { id: 'color-4', color: "#39859C" },
    'color-5': { id: 'color-5', color: "#3B8690" },
    'color-6': { id: 'color-6', color: "#3F8782" },
    'color-7': { id: 'color-7', color: "#588473" },
    'color-8': { id: 'color-8', color: "#6C8164" },
    'color-9': { id: 'color-9', color: "#837B5D" },
    'color-10': { id: 'color-10', color: "#907660" },
    'color-11': { id: 'color-11', color: "#9E6E6F" },
    'color-12': { id: 'color-12', color: "#9F6D7C" },
    'color-13': { id: 'color-13', color: "#9C6D89" },
    'color-14': { id: 'color-14', color: "#927099" },
    'color-15': { id: 'color-15', color: "#8F6FA4" },
    'color-16': { id: 'color-16', color: "#8073B2" }
  },
  rows: {
    'row-1': {
      id: 'row-1',
      colorIds: ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10', 'color-11', 'color-12', 'color-13', 'color-14', 'color-15', 'color-16'],
    },
    'row-2': {
      id: 'row-2',
      colorIds: [],
    },
  },
  // Facilitate reordering of columns
  rowOrder: ['row-1', 'row-2']
};