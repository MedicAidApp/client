import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
          <link href="https://cdn.discordapp.com/attachments/897675233555787776/898761112437288970/Pink_Modern_And_Simple_Piggy_Bank_Financial_Company_Logo_1.png" rel="icon" />
          <title>My MedicAid</title>
          <meta property="og:title" content="MedicAid" />
          <meta property="og:description" content="We make it easy to manage your patients' medical records, synchronizing the data with your colleagues and generating artificial intelligence based diagnoses." />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
