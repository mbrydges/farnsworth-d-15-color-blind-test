import Context from './components/Context'
import Footer from './components/Footer'
import Header from './components/Header'
import Toolbar from './components/Toolbar'

export default function Home() {
  return (
    <>
      <Header />
      <div className="content">
        <Context />
        <Toolbar />
      </div>
      <Footer />
    </>
  )
}
