import './App.css'
import { GlobalStyles } from './Styles/Global.styled'
import Body from './components/Body/Body'
import Cards from './components/Cards/Cards'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import {GiftCards} from './components/Cards/GiftCards'

function App() {

  return(
    <>
    <GlobalStyles />
    <Header />
    <Body />
    <Cards />
    <GiftCards />

    <Footer />
    </>
  )

}



export default App
