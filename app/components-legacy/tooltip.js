import React from "react";
import ReactTooltip from "react-tooltip";
import useHover from "../hooks/useHover";

function Tooltip({text, id, children}) {

    const {hovering, attr} = useHover('false')

    console.log({hovering, attr})
    if (hovering) { return (<div {...attr}>
            <div id={id} place="top-right" effect="solid">
                {text}
            </div>
            <ReactTooltip data-tip data-for={id}>
                {children}
            </ReactTooltip>
        </div>)
    } else { return (<div {...attr}>
            {children}
        </div>)
    }
}

export default Tooltip