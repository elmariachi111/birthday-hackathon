import React from 'react';

import { Box } from 'grommet';

const Main = ({ ...rest }) => (
    <Box as="main"  {...rest} />
);

export { Main };