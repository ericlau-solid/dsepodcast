import * as React from 'react';
import {Link} from "@chakra-ui/react";

const linkStyle = {
    backgroundImage: 'url(/listenOn.svg)',
    backgroundPositionX: '-317px',
    backgroundPositionY: '7px',
    backgroundColor: 'black',
    backgroundRepeat: 'no-repeat',
    height: '40px',
    width: '121px',
    textIndent: '-9000px',
    margin: '2px',
    borderRadius: '5px'
}

const Rss = () => {
    return (
        <Link href={'https://feeds.buzzsprout.com/1776406.rss'} isExternal style={linkStyle}>
            Rss Feed
        </Link>
    )
}

export default Rss;