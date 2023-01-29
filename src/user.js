import React from 'react'

const user = (props) => {
    console.log(props.data)
    const data = props.data
    return (
        <>
            <h1>User Components</h1>
            <h4>{data.name}</h4>
            <h4>{data.age}</h4>
        </>
    )
}

export default user;