import DndContext from './components/DndContext'

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
