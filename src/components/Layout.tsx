import { Box, Button } from '@chakra-ui/react'
import { FaArrowLeft } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  return (
    <Box p="2%">
      <Button onClick={() => navigate("/")} size="lg" variant={"ghost"} leftIcon={<FaArrowLeft />}>Back</Button>
      {children}
    </Box>
  )
}

export default Layout