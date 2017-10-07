import * as React from 'react'
import MyComponent from './components/MyComponent'
import Link from './components/Link'

export default () => 
  <div>
    <h1>Hello world～!</h1>
    <MyComponent />
    <Link href="/about"><a>Go About page</a></Link>
  </div>
