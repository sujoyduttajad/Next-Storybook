import React from 'react'
import Home, { getServerSideProps } from '../../pages/index'

export default {
    title: "Pages/Home",
    component: Home,
    // ------ Add Default args -----
    // args: {
    //     name: "John Doe",
    // },
};


// ------ Add Controls to Next.js Page Props with Story Args -----
// export const HomePage = (args) => <Home {...args} />
// HomePage.args = { name: "John Damon" } 

// ------ Add Default args -----
export const HomePage = (args) => <Home {...args} />

// ------ Add MSW MOck getServerSideProps request -----
export const HomePage = (args, { loaded: { name }}) => (
    <Home {...args} name={name} />
);

// We use loaders as much as we use args. So we give it an array
HomePage.loaders = [
    async () => {
        let data = await getServerSideProps();
        // Remember, getServerSideProps returns an object with props as one of the properties.
        return data.props;
    },
];
