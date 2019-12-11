import React from 'react';

import { Box } from 'grommet';


const Header = ({ ...rest }) => {

    return <Box
        align="center"
        as="header"
        direction="row"
        flex={false}
        justify="between"
        gap="medium"
        {...rest}
    />
};


export { Header }