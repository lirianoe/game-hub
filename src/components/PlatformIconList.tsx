import { FaLinux, FaPlaystation, FaXbox, FaWindows, FaAndroid, FaApple } from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { HStack, Icon } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[]
}
 
const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbos: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux, 
        ios: MdPhoneIphone,
        web: BsGlobe,
        android: FaAndroid

    }

  return (
    <HStack marginY={1}>
    {platforms.map((platform) => (
    <Icon key={platform.id} as={iconMap[platform.slug]} color='gray.400'/> 
    ))}
    </HStack>
    
  )
}

export default PlatformIconList