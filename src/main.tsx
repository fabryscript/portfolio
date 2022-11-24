import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes, { theme } from "./routes/Routes"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ColorModeScript initialColorMode={"dark"} />
    <Routes />                                                                                                                                                                                                                                                                                              
  </React.StrictMode>
)
