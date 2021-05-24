import React from "react";

export default function Loading(){
    const [loading, setLoading] = React.useState('loading')

    React.useEffect(() => {
        let id = window.setInterval(() => {
            if (loading === "Loading..."){
                setLoading('Loading')
            }else {
                setLoading((prevLoading) => prevLoading + ".")
            }
        }, 1)

        return () => window.clearInterval(id);
    }, [])

    return (<h3>{loading}</h3>)
}
