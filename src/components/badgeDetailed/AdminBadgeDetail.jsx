import * as React from 'react';
import { styled } from '@mui/system';
import { Tabs } from '@mui/base/Tabs';
import { TabsList as BaseTabsList } from '@mui/base/TabsList';
import { TabPanel as BaseTabPanel } from '@mui/base/TabPanel';
import { buttonClasses } from '@mui/base/Button';
import { Tab as BaseTab, tabClasses } from '@mui/base/Tab';

import BadgeDetail from './BadgeDetail';
import DashboardContainer from '../styles/DashboardContainer';
import theme from '../../assets/themes';

export default function UnstyledTabsCustomized() {
    return (
        <DashboardContainer sx={{pt: 1.5}}>
            <Tabs defaultValue={1}>
            <TabsList>
                <Tab value={1}>Description</Tab>
                <Tab value={2}>Earner List</Tab>

            </TabsList>
            <TabPanel value={1}><BadgeDetail /></TabPanel>
            <TabPanel value={2}>Second page</TabPanel>

            </Tabs>
        </DashboardContainer>
    );
}

const blue = {
    50: '#F0F7FF',
    100: '#C2E0FF',
    200: '#80BFFF',
    300: '#66B2FF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    800: '#004C99',
    900: '#003A75',
};

const Tab = styled(BaseTab)`
font-family: 'IBM Plex Sans', sans-serif;
color: black;
cursor: pointer;
font-size: 0.875rem;
font-weight: bold;
background-color: transparent;
width: 100%;
line-height: 1.5;
padding: 8px 12px;
margin: 6px;
border: none;
border-radius: 8px;
display: flex;
justify-content: center;

&:hover {
    background-color: ${blue[50]};
}

&:focus {
    color: #fff;
    outline: 3px solid ${blue[200]};
}

&.${tabClasses.selected} {
    background-color: ${blue[100]};
    color: black;
}

&.${buttonClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
}
`;

const TabPanel = styled(BaseTabPanel)`
    width: 100%;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 0.875rem;
`;

const TabsList = styled(BaseTabsList)(
    ({ theme }) => `
    min-width: 400px;
    background-color: white;
    border-radius: 12px;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: space-between;
    box-shadow: 0px 4px 6px ${
        theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.4)' : 'rgba(0,0,0, 0.2)'
    };
`,
);
