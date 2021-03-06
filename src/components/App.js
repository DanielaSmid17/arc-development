import React, {useState} from 'react'
import Header from '../components/ui/Header'
import Footer from '../components/ui/Footer'
import CustomSoftware from './CustomSoftware'
import LandingPage from './LandingPage'
import Services from './Services'
import MobileApps from './MobileApps'
import Websites from './Websites'
import Revolution from './Revolution'
import About from './About'
import Contact from './Contact'

import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ui/Theme'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [value, setValue] = useState(0)
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>
        <Switch>
          <Route exact path='/' render={(props) =>  <LandingPage {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path='/services' render={(props) =>  <Services {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />} />
          <Route exact path='/customsoftware' render={(props) =>  <CustomSoftware {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/mobileapps' render={(props) =>  <MobileApps {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/websites' render={(props) =>  <Websites {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/revolution' render={(props) =>  <Revolution {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/about' render={(props) =>  <About {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/contact' render={(props) =>  <Contact {...props} setValue={setValue} setSelectedIndex={setSelectedIndex} />}/>
          <Route exact path='/estimate' component={() => <div>Estimate</div>}/>
        </Switch>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>


  );
}

export default App;
