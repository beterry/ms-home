import React from 'react';
import ReactDOM from 'react-dom';

import './styles/normalize.css'
import './styles/index.scss';

//import components
import Diff from './components/diff'

//import layouts
import Section from './layout/section'
import Grid from './layout/grid'

//import images
import weekIcon from './images/icon-week.svg'
import moneyIcon from './images/icon-money.svg'
import designIcon from './images/icon-design.svg'

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
      <Section title='The Easiest Way to Mail' subtitle='How it works' bk={colors.p[800]}>

      </Section>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))