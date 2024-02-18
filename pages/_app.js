import "../styles/globals.css";

//INTERNAL IMPORT
import { PROVIDER } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";

const activeChain = "mumbai";

export default function App({ Component, pageProps }) {
  return (
    <>
     <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
    >
     
      <PROVIDER>
      
        <Component {...pageProps} />

       
      </PROVIDER>
      <Toaster />
    </ThirdwebProvider>
   
        <Head>
        <script src="/assets/js/jquery.min.js"></script>
        <script src="/assets/js/proper-min.js"></script>
        <script src="/assets/js/bootstrap.min.js"></script>
        <script src="/assets/js/plugin/waypoint.min.js"></script>
        <script src="/assets/js/plugin/owl.carousel.min.js"></script>
        <script src="/assets/js/plugin/jquery.nice-select.min.js"></script>
        <script src="/assets/js/plugin/wow.min.js"></script>
        <script src="/assets/js/main.js"></script>
        </Head>
      
    </>
  );
}
