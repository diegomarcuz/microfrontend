import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'



// Mount function

const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    )
}

// development + in isolation to run the mount function

if (process.env.NODE_ENV === 'development'){
    const devRoot = document.querySelector("#marketing-dev-root")

    if(devRoot){
        mount(devRoot)
    }
}

// container decides where to run the mount function
export {mount}