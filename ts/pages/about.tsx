import * as React from 'react'
import Head from '../components/Head'
import Link from '../components/Link'

interface Props {
    data: string;
  }

export default class extends React.Component<Props, {}> {
    static getInitialProps () {
        return {data: 'props content'}
    }

    render() {
        return  (
             <div>
                <Head>
                    <title>about page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <div>
                about content
                </div>
                <div>
                    {this.props.data}
                </div>
                <Link href="/"><a>Goto Home page</a></Link>
             </div>
            )
    }
}