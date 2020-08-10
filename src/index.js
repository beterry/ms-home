import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.scss';

//import components
import Rule from './components/rule'

//import sections
import WhyMS from './sections/why-ms'
import HowItWorks from './sections/how-it-works'
import Services from './sections/services'
import Products from './sections/products'
import TrustLogos from './sections/trust-logos'
import NoMoneyDownCTA from './sections/no-money-down-cta'
import Testimonials from './sections/testimonials'
import Resources from './sections/recent-resources'

//import layouts
import Padding from './layout/padding'
import Margins from './layout/margins'


//import colors
// import colors from './styles/colors'

function App() {
  return (
    <>
          <Padding/>
      <WhyMS />
          <Padding size='1/2'/>
      <HowItWorks />
          <Padding size='1/2'/>
      <Services />
          <Padding />
      <Products />
          <Padding size='1/2'/>
      <Margins><Rule /></Margins>
          <Padding size='1/2'/>
      <TrustLogos />
          <Padding size='1/2'/>
      <NoMoneyDownCTA />
          <Padding size='1/2'/>
      <Testimonials />
          <Padding />
      <Resources />
          <Padding />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))