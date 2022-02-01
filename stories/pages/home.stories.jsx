import React from 'react'
import Home from '../../pages/index'

export default {
    title: "Pages/Home",
    component: Home,
    // ------ Add Default args -----
    args: {
        name: "John Doe",
    },
};


// ------ Add Controls to Next.js Page Props with Story Args -----
// export const HomePage = (args) => <Home {...args} />
// HomePage.args = { name: "John Damon" } 

// ------ Add Default args -----
export const HomePage = (args) => <Home {...args} />