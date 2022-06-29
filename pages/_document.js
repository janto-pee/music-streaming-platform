// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html>
//       <Head >
//       <Head>
//             <link rel="preconnect" href="https://fonts.googleapis.com" />
//             <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//             <title>Realance Properties</title>
//             <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
//         </Head>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Fruktur&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
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