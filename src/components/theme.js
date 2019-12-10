import { base, dark } from 'grommet/themes'
import { deepMerge } from "grommet/utils";

const theme = deepMerge(dark, {
    global: {
        colors: {
            pale: '#fff1d7',
            dark: '#222222'
        },
        body: {
            background: 'dark-1',
        },

        font: {
            family: 'Glacial',
            size: '16px',
            height: '20px',
        },
    },
    heading: {
        font: {
            family: 'Amatic'
        }
    }
});

export default theme