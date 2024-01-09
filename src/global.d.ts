// global.d.ts
export type Color = {
  id: string
  color: string
}

export type Colors = {
  [key: string]: Color
}

export type Row = {
  id: string
  colorIds: string[]
}

export type Rows = {
  [key: string]: Row
}
