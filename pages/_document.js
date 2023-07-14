// pages/_document.js

import { ColorModeScript } from '@chakra-ui/react'
import { Html, Head, Main, NextScript } from 'next/document'
import { theme } from './_app'

export default function Document() {
  return (
    <Html lang='en'>
       <Head>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
       
       
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}