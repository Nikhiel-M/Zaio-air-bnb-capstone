import './App.css'
import { GlobalStyles } from './Styles/Global.styled'
import Body from './components/Body/Body'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {GiftCards} from './components/Cards/GiftCards'
import {HostingSection} from './components//HostingSection/HostingSection'
import { FutureGetaway } from './components/FutureGetaways/FutureGetaway'

function App() {

  return(
    <>
    <GlobalStyles />
    <Header />
    <Body />
    <Cards />
    <GiftCards />
    <HostingSection />
    <FutureGetaway />
    <Footer />
    </>
  )

}



export default App
