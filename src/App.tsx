import React from 'react'
import Home from "./pages/home/Home";
import { ChakraProvider } from "@chakra-ui/react";
import theme from './theme/theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Home />
    </ChakraProvider>
  )
}

export default App
