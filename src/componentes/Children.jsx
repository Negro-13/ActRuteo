import { useState } from 'react'


function Children() {
    const [excuse, setExcuse] = useState('')

    return (
        <>
            <h1>Excusas categoria Children</h1>
            <p>{excuse}</p>
        </>
    )
}

export default Children
