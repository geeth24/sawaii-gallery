import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider } from '@mantine/core';
import { Global } from '@emotion/react';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>SAWAII GALLERY</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'dark',
        }}
    
      >
        <Global 
          styles={[
        
{
                    ".custom-wrapper-class": {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(2, 1fr)",
                        },
                    },
                },
          ]}
          />

        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}