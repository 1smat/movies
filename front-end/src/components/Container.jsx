import React from 'react'

const style = {
    container: {
        width: '1200px',
        marginLeft: 'auto',
        marginLight: 'auto',
    },
}

const Container = ({ children }) => {
    return (
        <div id='container' style={style.container}>
            {children}
        </div>
    )
}

export default Container
