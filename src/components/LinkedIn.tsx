import * as React from 'react';
import {Link} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LinkedInIcon = () => (<FontAwesomeIcon color={'#805AD5'} icon={faLinkedin} size={'2x'}/>)

const LinkedIn = ({profileUrl}) => {
    return (
        <Link display="block" fontSize={'1rem'} href={profileUrl} isExternal aria-label={'LinkedIn Icon Button'}>
            <LinkedInIcon />
        </Link>
    )
}

export default LinkedIn