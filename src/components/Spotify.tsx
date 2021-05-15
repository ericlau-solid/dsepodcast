import * as React from 'react';
import {Link} from "@chakra-ui/react";

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
    const handleClick = () => {
        // @ts-ignore
        typeof window !== "undefined" && window.gtag("event", "click", {target: 'episode-Spotify'})
    }
    return (
        <Link href={'https://open.spotify.com/show/07ENQ8gbcPAMDcazUO2B8I'} isExternal onClick={handleClick} style={linkStyle}>
            Spotify
        </Link>
    )
}

export default Spotify;