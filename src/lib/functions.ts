
// Shuffle array
export function shuffle (array: string[]) {
  return array.sort(() => Math.random() - 0.5)
}