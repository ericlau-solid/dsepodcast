import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Box } from '@chakra-ui/react'

const Logo = (props) => {
  return (
    <Box {...props}>
      <StaticImage src={'../images/dselogo.png'} alt={'logo'}/>
    </Box>
  )
}

export default Logo