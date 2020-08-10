import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.scss';

//import components
import Testimonial from './components/testimonial'
import Resource from './components/resource'
import Rule from './components/rule'

//import sections
import WhyMS from './sections/why-ms'
import HowItWorks from './sections/how-it-works'
import Services from './sections/services'
import Products from './sections/products'
import TrustLogos from './sections/trust-logos'
import NoMoneyDownCTA from './sections/no-money-down-cta'

//import layouts
import Padding from './layout/padding'
import Margins from './layout/margins'
import Section from './layout/section'
import Grid from './layout/grid'

//import images
import terryMckim from './images/terry-mckim@2x.jpg'
import anthonySottasante from './images/anthony-sottasante@2x.jpg'
import billBrown from './images/bill-brown@2x.jpg'

import resource1 from './images/eddm-guide-auto.jpg'
import resource2 from './images/eddm-guide-auto.jpg'
import resource3 from './images/eddm-guide-auto.jpg'
import resource4 from './images/eddm-guide-auto.jpg'

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
      <Section title='What Our Customers Say' subtitle='Testimonials'>
        <Grid columns={3}>
            <Testimonial
              profile={terryMckim}
              copy='When we open up a new location, we like to send out $25 gift cards to attract new clients. For our most recent salon opening I used Mail Shark and was able to send out 3 times as many mailers which generated over twice as many returns as we’ve received before!'
              name='Terry McKim'
              business='Lord & Ladies'
            />
            <Testimonial
              profile={anthonySottasante}
              copy='The Mail Shark Program is like finding gold. Our business was up 33% and it is a direct result of their program. The customer service is unbelievable. Talking to the other guys in the direct mail business is like talking to the wall.'
              name='Anthony Sottasante'
              business='Parma Pizza'
            />
            <Testimonial
              profile={billBrown}
              copy='The staff at Mail Shark is nothing but professional. Kevin, Liz in the art department, everybody has been extremely helpful. And we plan on using Mail Shark for years to come. We also get a lot of secondary printing done from them. They are very fast, very efficient, very convenient. It’s an all around great experience with them.'
              name='Bill Brown'
              business={`Fox's Pizza Den`}
            />
        </Grid>
      </Section>
      <Section title='We are Direct Mail Experts' subtitle='resources'>
        <Grid columns={4}>
            <Resource
              image={resource1}
              title='The EDDM Guide for Auto Repair Shops'
              cat='EDDM® Basics'
              time={10}
              link=''
            />
            <Resource
              image={resource2}
              title='Scratch-Off Postcards Gain Attention'
              cat='Tips & advice'
              time={7}
              link=''
            />
            <Resource
              image={resource3}
              title='How to Make Your Postcard Advertising Pop'
              cat='Best practices'
              time={5}
              link=''
            />
            <Resource
              image={resource4}
              title='“The Bottom Feeder” Customer'
              cat='Tips & advice'
              time={10}
              link=''
            />
        </Grid>
      </Section>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))