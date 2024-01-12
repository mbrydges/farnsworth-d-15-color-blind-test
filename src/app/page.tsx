import Context from './components/Context'
import Instructions from './components/Instructions'
import Toolbar from './components/Toolbar'

export default function Home() {
  return (
    <>
      <div className="content">
        <Context />
        <Toolbar />
      </div>
    </>
  )
}
