import * as React from 'react';
import {OutboundLink} from "gatsby-plugin-google-gtag";

const linkStyle = {
    backgroundImage: 'url(/listenOn.svg)',
    backgroundPositionX: '-182px',
    backgroundPositionY: '7px',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    height: '40px',
    width: '106px',
    textIndent: '-9000px',
    margin: '2px',
    borderRadius: '5px'
}

const Spotify = () => {
    return (
        <OutboundLink href={'https://open.spotify.com/show/07ENQ8gbcPAMDcazUO2B8I'} style={linkStyle}>
            Spotify
        </OutboundLink>
    )
}

export default Spotify;