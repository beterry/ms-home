import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.scss';

//import components
import Rule from './components/rule'

//import sections
import Hero from './sections/hero'
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
import MailShark from './layout/ms-layout'

//import colors
// import colors from './styles/colors'

function App() {
  return (
    <MailShark>
        <Hero />
            <Padding/>
        <WhyMS />
            <Padding />
        <HowItWorks />
            <Padding />
        <Services />
            <Padding />
        <Products />
            <Padding />
        <Margins><Rule /></Margins>
            <Padding />
        <TrustLogos />
            <Padding />
        <NoMoneyDownCTA />
            <Padding />
        <Testimonials />
            <Padding />
        <Resources />
    </MailShark>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))