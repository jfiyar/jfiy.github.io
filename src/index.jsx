import ReactDom from 'react-dom'
import React from 'react'
import { App } from './container'

const rootElement = document.createElement('div')

document.body.appendChild(rootElement)

ReactDom.render(<App />, rootElement)
