import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Footer, Header, Layout, RepConnection, Grid } from '.'

const grid = {
  block: {
    'm-columns': '12',
    'col-gap': 'full',
  },
  elem: {
    'm-col': '4',
    'm-offset': '4',
  },
}

const Home = () => {
  return (
    <div className="layout layout_v-ratio_1-full-1">
      <Header className={{ distribute: 'between' }} />
      <Layout className={{ hero: true, align: 'center' }}>
        <Grid className={grid}>
          <RepConnection />
        </Grid>
      </Layout>
      <Footer />
    </div>
  )
}

export default Home
