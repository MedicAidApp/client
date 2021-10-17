import "tailwindcss/tailwind.css";
import { Layout } from "../components/Layout";
import { UserProvider } from "@auth0/nextjs-auth0";
import { ChakraProvider } from "@chakra-ui/react"

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <ChakraProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ChakraProvider>
    </UserProvider>
  );
}
