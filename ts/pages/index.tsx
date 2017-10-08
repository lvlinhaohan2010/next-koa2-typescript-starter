import * as React from 'react'
import MyComponent from '../components/MyComponent'
import Link from '../components/Link'

export default () => 
  <div>
    <h1>Hello world</h1>
    <MyComponent />
    <img src="/static/next-js.png" style={{ width: '200px',display: 'block' }} />
    <Link href="/about"><a>Goto About page</a></Link>
  </div>
