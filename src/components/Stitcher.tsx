import * as React from 'react';
import {OutboundLink} from "gatsby-plugin-google-gtag";

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
        <OutboundLink href={'https://www.stitcher.com/podcast/diverse-software-engineers-podcast'} style={linkStyle}>
            Stitcher
        </OutboundLink>
    )
}

export default Stitcher;