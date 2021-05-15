import * as React from 'react';
import {IconButton} from "@chakra-ui/react";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { OutboundLink } from "gatsby-plugin-google-gtag"

const LinkedInIcon = () => (<FontAwesomeIcon color={'#805AD5'} icon={faLinkedin} size={'2x'}/>)

const LinkedIn = ({profileUrl}) => {
    return (
        <OutboundLink href={profileUrl}>
            <IconButton variant="outline"
                        aria-label={'LinkedIn Icon Button'} icon={<LinkedInIcon/>}
                        _hover={{
                            bg: ["primary.text", "primary.text", "primary.text", "primary.text"],
                            color: ["primary.bg", "primary.bg", "primary.bg", "primary.bg"]
                        }}/>
        </OutboundLink>
    )
}

export default LinkedIn