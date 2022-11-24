import {
  ChakraProvider,
  extendTheme,
  type ThemeConfig,
} from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Home from "../Home";
import Portfolio from "../pages/Portfolio";
import Wrapper from "./Wrapper";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper children={<Home />} />,
  },
  {
    path: "/about",
    element: <Wrapper children={<About />} />
  },
  {
    path: "/portfolio",
    element: <Wrapper children={<Portfolio />} />
  },
]);

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  config,
  styles: {
    global: {
      body: {
        backgroundColor: "#141414",
      },
    },
  },
});

function Routes() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={routes} />
    </ChakraProvider>
  );
}

export default Routes;
