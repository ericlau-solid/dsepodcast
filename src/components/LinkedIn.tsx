import * as React from 'react';
import {Box, IconButton, Link} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LinkedInIcon = () => (<FontAwesomeIcon icon={faLinkedin} size={'2x'}/>)

const LinkedIn = ({profileUrl}) => {
    return (
        <Box display={'block'}>
            <Link href={profileUrl} isExternal aria-label={'LinkedIn Icon Button'}>
                <LinkedInIcon />
            </Link>
        </Box>
    )
}

export default LinkedIn