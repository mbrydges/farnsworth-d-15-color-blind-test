import { shuffle } from '@/lib/functions'
import DndContext from './components/DndContext'
import { Colors, Rows } from '@/lib/types'
import { initialData } from './initialData'

export default function Page() {
  return (
    <section className="grid-layout">
      <h4>Farnsworth D-15 Color Blind Test</h4>
      <div className="dnd-container">
        <DndContext />
      </div>
      <div className="footer-container"></div>
    </section>
  )
}
