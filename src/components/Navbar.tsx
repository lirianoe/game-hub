import { HStack, Image, Switch, Text, useColorMode } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import SearchInput from './SearchInput'

interface Props {
    onSearch: (searchText: string) => void;
  }

const Navbar = ({ onSearch}: Props) => {

    const {colorMode, toggleColorMode} = useColorMode()

  return (
    <HStack>
        <Image src={logo} boxSize='60px'/>
        <SearchInput onSearch={onSearch} />
        <HStack>
            <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text>{colorMode === 'dark' ? 'Dark' : 'Light'} Mode</Text>
        </HStack>
    </HStack>
  )
}

export default Navbar