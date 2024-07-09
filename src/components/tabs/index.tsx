import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BasicTable from '../table';
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@mui/material';
import Form from '../Form';

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
      {value === index && <Box sx={{paddingY:"12px"}}>{children}</Box>}
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
  type DataType ={
    firstName: string;
    lastName: string;
    age: number;
    visits: number;
    status: string;
    progress: number;
  }
  const columns = React.useMemo<ColumnDef<DataType, any>[]>(
    () => [
    {
      accessorFn:(row)=>row.firstName,
      header:"firstName"
    },
    {
      accessorFn:(row)=>row.lastName,
      header:"lastName"
    },
    {
      accessorFn:(row)=>row.age,
      header:"age"
    },
    {
      accessorFn:(row)=>row.progress,
      header:"progress"
    },
    {
      accessorFn:(row)=>row.status,
      header:"status"
    },
    {
      accessorFn:(row)=>row.visits,
      header:"visits",
      cell: (cell)=> cell.getValue() === 100 ? <Button>{cell.getValue()}</Button> : cell.getValue()
    },
    ],
    []
  );

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
                Item Two sub tab
              </CustomTabPanel>
              <CustomTabPanel value={valueTwo} index={2}>
                Item Three sub tab
              </CustomTabPanel>
            </Box>
            Item One sub tab
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
          <BasicTable column={columns}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Form/>
      </CustomTabPanel>
    </Box>
  );
}