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
          <Script strategy="afterInteractive" dangerouslySetInnerHTML={{ __html:`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-582WVNW');
          `}}></Script>
          <Script
            src='https://www.googletagmanager.com/gtag/js?id=G-SVC560TV66'
            strategy='afterInteractive'
          />
          <Script id='google-analytics' strategy='afterInteractive'>
                {`
                  window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-SVC560TV66');
                `}
          </Script>
        </Head>
        <body>
        <noscript dangerouslySetInnerHTML={{ __html:`
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-582WVNW"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `}}></noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument