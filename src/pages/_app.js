import "@/styles/globals.scss";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { GlobalComponentsProvider } from "@/states/globalComponents";
import { WebsocketProvider } from "@/states/websocket";
import Script from "next/script";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderColor: "black",
          textTransform: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default function App({ Component, pageProps }) {
  return (
    <>
      {/*<Script*/}
      {/*  async*/}
      {/*  src="https://www.googletagmanager.com/gtag/js?id=G-7EMKTRW285"*/}
      {/*></Script>*/}
      {/*<Script*/}
      {/*  id="google-analytics"*/}
      {/*  strategy="afterInteractive"*/}
      {/*  dangerouslySetInnerHTML={{*/}
      {/*    __html: `*/}
      {/*    window.dataLayer = window.dataLayer || [];*/}
      {/*    function gtag(){dataLayer.push(arguments);}*/}
      {/*    gtag('js', new Date());*/}
      {/*    gtag('config', 'G-7EMKTRW285', {*/}
      {/*      page_path: window.location.pathname,*/}
      {/*    });*/}
      {/*  `,*/}
      {/*  }}*/}
      {/*/>*/}

      <ThemeProvider theme={theme}>
        <WebsocketProvider>
          <GlobalComponentsProvider>
            <Component {...pageProps} />
          </GlobalComponentsProvider>
        </WebsocketProvider>
      </ThemeProvider>
    </>
  );
}
