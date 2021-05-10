import * as React from 'react';
import {Box, IconButton, Link} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LinkedInIcon = ({size}) => (<FontAwesomeIcon icon={faLinkedin} size={size}/>)

const LinkedIn = ({size = 'md', profileUrl}) => {
    return (
        <Box>
            <Link href={profileUrl} isExternal>
                <IconButton variant={'primary'}
                            aria-label={'LinkedIn Icon Button'}
                            size={size}
                            icon={<LinkedInIcon
                                size={size}/>}/>
            </Link>
        </Box>
    )
}

export default LinkedIn