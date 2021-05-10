import * as React from 'react';
import {IconButton} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LinkedInIcon = ({size}) => (<FontAwesomeIcon icon={faLinkedin} size={size}/>)

const LinkedIn = ({size = 'md', profileUrl}) => {
    return (
        <a href={profileUrl} target={'_blank'} rel="noopener noreferrer">
            <IconButton variant={'primary'}
                        aria-label={'LinkedIn Icon Button'}
                        size={size}
                        icon={<LinkedInIcon
                            size={size}/>}/>
        </a>
    )
}

export default LinkedIn