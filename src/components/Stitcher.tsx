import * as React from 'react';
import {Link} from "@chakra-ui/react";

const linkStyle = {
    backgroundImage: 'url(/listenOn.svg)',
    backgroundPositionX: '-669px',
    backgroundPositionY: '7px',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    height: '40px',
    width: '106px',
    textIndent: '-9000px',
    margin: '2px',
    borderRadius: '5px'
}

const Stitcher = () => {
    return (
        <Link href={'https://www.stitcher.com/podcast/diverse-software-engineers-podcast'} isExternal style={linkStyle}>
            Stitcher
        </Link>
    )
}

export default Stitcher;