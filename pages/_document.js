import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
       
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=UA-223710261-1'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
                {`
                  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-223710261-1');
                `}
          </Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument