import React, { useEffect } from 'react'
import HomePage from './pages/Home'
import Navbar from './components/Navbar/index'
import Header from './components/Header/index'
import MainContainer from './components/MainContainer/index'
import RightContainer from './components/RightContainer/index'
import Footer from './components/Footer/index'
import Layout from './constants/Layout'
import DefaultValue from './constants/DefaultValue'
import useGlobalState from './store/globalStates/useGlobalStates'

const App = () => {
  const { state, setState } = useGlobalState()
  useEffect(() => {
    window.innerWidth <= Layout.smallWidthDevice &&
      state.isMenuOpen &&
      setState.setToggleMenu()

    let hour = new Date().getHours()
    DefaultValue.lightModeHourStart <= hour <= DefaultValue.lightModeHourEnd &&
      !state.isNightMode &&
      setState.setToggleNightMode()
  }, [])

  return (
    <MainContainer>
      <Navbar />
      <Header title='Portfolio' />
      <RightContainer>
        <HomePage />
        <Footer />
      </RightContainer>
    </MainContainer>
  )
}

export default App
