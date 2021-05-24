import React, {useState} from "react";

export default function useHover(){

    const [hovering, setHovering] = useState(false);

    const onMouseOver = () => {
        console.log(`Mouse Hovered In`)
        setHovering(true)
    }

    const onMouseOut = () => {
        console.log(`Mouse Hovered Out`)
        setHovering(false)
    }

    return {
        hovering,
        attr :{
            onMouseOut,
            onMouseOver
        }
    }
}