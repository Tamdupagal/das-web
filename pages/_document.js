import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        {/* <Head>
          <link rel="shortcut icon" href="/static/favicon.png" />
        </Head> */}
        <Head>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="modal"></div>
        </body>
      </Html>
    )
  }
}

export default MyDocument