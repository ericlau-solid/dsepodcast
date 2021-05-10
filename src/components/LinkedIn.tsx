import * as React from 'react';
import {IconButton, Link} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const LinkedInIcon = () => (<FontAwesomeIcon color={'#805AD5'} icon={faLinkedin} size={'2x'}/>)

const LinkedIn = ({profileUrl}) => {
    return (
        <Link fontSize={'1rem'} href={profileUrl} isExternal>
            <IconButton variant="outline"
                        aria-label={'LinkedIn Icon Button'} icon={<LinkedInIcon/>}
                        _hover={{
                            bg: ["primary.text", "primary.text", "primary.text", "primary.text"],
                            color: ["primary.bg", "primary.bg", "primary.bg", "primary.bg"]
                        }}/>
        </Link>
    )
}

export default LinkedIn