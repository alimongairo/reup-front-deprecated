import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap"
          rel="stylesheet"
        />
        <title>Reup</title>
        <meta name="reup" />
      </Head>
      <body>
        <Main />
        <div id="portal"></div>
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
