import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import CodeIcon from './icons/footprint'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

const Logo = () => {
  const footPrintImg = `/image/footprint${useColorModeValue('', '-dark')}.png`
  return (
    <Link href="/">
      <LogoBox>
        {/* <CodeIcon /> */}
        <Text
          color={useColorModeValue('#008000', '#90EE90')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Dashpeljee Battur:~$
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
