import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.scss';

//import components
import Diff from './components/diff'
import Step from './components/step'
import Text from './components/text'
import Service from './components/service'
import Testimonial from './components/testimonial'
import Resource from './components/resource'

//import layouts
import Section from './layout/section'
import Grid from './layout/grid'

//import images
import weekIcon from './images/icon-week.svg'
import moneyIcon from './images/icon-money.svg'
import designIcon from './images/icon-design.svg'

import terryMckim from './images/terry-mckim@2x.jpg'
import anthonySottasante from './images/anthony-sottasante@2x.jpg'
import billBrown from './images/bill-brown@2x.jpg'

import resource1 from './images/eddm-guide-auto.jpg'
import resource2 from './images/scratch-postcards.jpg'
import resource3 from './images/advertising-pop.jpg'
import resource4 from './images/bottom-feeders.jpg'

//import colors
import colors from './styles/colors'

function App() {
  return (
    <>
      <Section subtitle='Why Mail Shark?' title='We Do Direct Mail Differently'>
        <Grid columns={3} >
          <Diff
            icon={weekIcon}
            title='Mail and Pay Weekly'
            copy='We take the total number of mail pieces, as well as the total cost of your campaign, and spread them out evenly over a period of weeks or months. You can then rely on a steadier, more predictable return over time, instead of a rush of new business all at once.'
          />
          <Diff
            icon={moneyIcon}
            title='No Money Down'
            copy='We finance the cost of your market analysis, mailing list, artwork, printing, postal sorting, and delivery. You don’t pay a dime until we pay the post office for your first week’s mailing.'
          />
          <Diff
            icon={designIcon}
            title='Free Professional Design'
            copy='Free custom design and unlimited revisions come standard with our Full-Service, EDDM®, and Print Only options. Our team of graphic designers have the skills and expertise to create compelling pieces that get results.'
          />
        </Grid>
      </Section>
      <Section title='The Easiest Way to Mail' subtitle='How it works' bk={colors.gray[5]}>
        <Grid columns={3}>
          <Step number={1} title='Choose a Product'>
            <Text>Happy to hear you decided on using Mail Shark to reach your marketing goals! What product would you like to mail?</Text>
            <Text blue>I think an oversized postcard would really stand out in the mailbox.</Text>
            <Text>You bet! That’s our most popular product with a proven track record of success.</Text>
          </Step>
          <Step number={2} title='Choose a Mailing Area'>
            <Text>Do you have an idea whether you want to target a specific audience or blanket the area around your business?</Text>
            <Text blue>What would you suggest?</Text>
            <Text>In your industry, at your budget, we’ve had great response rates doing a 5,000 address targeted mailing.</Text>
            <Text blue><span role="img" aria-label='thumbs up'>&#128077;</span></Text>
          </Step>
          <Step number={3} title='Choose a Schedule'>
            <Text>Final question: when would you like to start mailing and how many weeks would you like to mail and pay over?</Text>
            <Text blue>Lets start July 3rd for 8 weeks.</Text>
            <Text>Great plan. That means we will mail 625 postcards per week and bill you $269 per week for 8 weeks.</Text>
            <Text>You're all set! <span role="img" aria-label='mailbox'>&#128235;</span></Text>
          </Step>
        </Grid>
      </Section>
      <Section title='Custom Direct Mail Solutions' subtitle='Our Services'>
        <Grid columns={3}>
          <Service
            title='Full-Service Mailings'
            copy='Whether you’re mailing to everyone in your area or targeting a specific demographic, our full-service options take the hard work and confusion out of direct mail. We handle everything: design, print, and mail.'
            includes={[
              'Design with Unlimited Revisions',
              'High-quality Printing',
              'Mailing List & Area Analysis',
              'Bundling & Paperwork',
              'Shipping'
            ]}
          />
          <Service
            title='Every Door Direct Mail®'
            copy='Every Door Direct Mail® (EDDM®), is a direct mailing service offered by the United States Postal Service. This do-it-yourself direct mail option gives business owners the ability to pay bulk mail rates without having to purchase a mailing permit.'
            includes={[
              'Design with Unlimited Revisions',
              'High-quality Printing',
              'Mailing List & Area Analysis',
              'Bundling & Paperwork'
            ]}
            excludes={[
              'Shipping'
            ]}
          />
          <Service
            title='Commercial Printing'
            copy='We do all of our printing in-house, giving us the ability to ensure the best pricing, quality, and customer service.'
            includes={[
              'Design with Unlimited Revisions',
              'High-quality Printing'              
            ]}
            excludes={[
              'Mailing List & Area Analysis',
              'Bundling & Paperwork',
              'Shipping'
            ]}
          />
        </Grid>
      </Section>
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