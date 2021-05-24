import {FaCodeBranch, FaExclamationTriangle, FaStar, FaUser} from "react-icons/fa";
import React from "react";
import * as PropTypes from "prop-types";
import Tooltip from "./tooltip";
import {IoLogoYoutube} from "react-icons/all";

export class ProfileItems extends React.Component {


    constructor(props, context) {
        super(props, context);
        this.state = {
            location : false
        }
    }

    render() {
        let {playerProfile} = this.props;
        const {name, location, company, followers, following} = playerProfile;
        console.log(`name is ${name}`)
        return (<ul style={{justifySelf: 'center'}}>
            <li>
                <FaUser size={22}/>
                {name}
            </li>

            {{location} && (<li>
                <IoLogoYoutube size={22}/>
                {location}
            </li>)}

            {{company} && (<li> {company}</li>)}

            {{company} && (<li><Tooltip  id="company" text="Hi there!">
                <FaCodeBranch size={22}/>
                {company}
            </Tooltip>}>
            </li>)}

            {{followers} && (<li>
                <FaExclamationTriangle size={22}/>
                {followers}
            </li>)}

            {{following} && (<li>
                <FaExclamationTriangle size={22}/>
                {following}
            </li>)}
        </ul>)
    }
}

ProfileItems.propTypes = {playerProfile: PropTypes.any}