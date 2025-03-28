import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
        />
        <style dangerouslySetInnerHTML={{ __html: `
          body { 
            border-top: 8px solid red;
            border-bottom: 8px solid green; 
            margin: 0;
            padding: 0;
          }
          .test-static-css {
            background-color: blue;
            color: white;
            padding: 20px;
            margin: 20px;
            font-size: 24px;
            border-radius: 10px;
          }
          h1 {
            color: yellow !important;
            text-shadow: 2px 2px 4px black;
          }
          a {
            text-decoration: underline !important;
          }
        `}} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 