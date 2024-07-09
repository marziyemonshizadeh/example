import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}


export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [valueTwo, setValueTwo] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChange2 = (event: React.SyntheticEvent, newValue: number) => {
    setValueTwo(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One"/>
          <Tab label="Item Two" />
          <Tab label="Item Three" />
        </Tabs>
      </Box>
      <CustomTabPanel  value={value} index={0}>
             Item One 
            <Box sx={{ width: '100%'}}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={valueTwo} onChange={handleChange2} aria-label="basic tabs example">
                  <Tab label="Item One"/>
                  <Tab label="Item Two" />
                  <Tab label="Item Three" />
                </Tabs>
              </Box>
              <CustomTabPanel value={valueTwo} index={0}>
              <Box
                component="form"
                sx={{
                  '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <TextField id="outlined-basic" label="qqqqqqqqq" variant="outlined" />
                <TextField id="outlined-basic" label="aaaaaa" variant="outlined" />
                <TextField id="outlined-basic" label="zzzzzzzzz" variant="outlined" />
                <TextField id="outlined-basic" label="dddddddddd" variant="outlined" />

              </Box>
              </CustomTabPanel>
              <CustomTabPanel value={valueTwo} index={1}>
                Item Two
              </CustomTabPanel>
              <CustomTabPanel value={valueTwo} index={2}>
                Item Three
              </CustomTabPanel>
            </Box>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
  );
}