import React, { Component } from 'react'
import './global.less'
import ShowLoveBanner from './ShowLoveBanner'
import OurLoveStory from './OurLoveStory'

export class App extends Component {
  render() {
    return (
      <div>
        <ShowLoveBanner />
        <OurLoveStory />
      </div>
    )
  }
}
