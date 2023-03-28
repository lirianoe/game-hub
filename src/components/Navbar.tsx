import { HStack, Image, Switch, Text, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import React from 'react'
import { color } from 'framer-motion'

const Navbar = () => {

    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <Text>Navbar</Text>
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text>{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
        </HStack>
    </HStack>
  )
}

export default Navbar