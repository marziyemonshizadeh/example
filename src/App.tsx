import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Observer, useObserver } from 'rosma';
import './App.css';
import BasicTabs from './components/tabs';
import { TextField } from '@mui/material';
import { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

 export interface ObserverOneType {
  state:number,
  lastName:string
 }

export const observerOne = new Observer<ObserverOneType>({
  state:0,
  lastName:"karimi"
})

function App() {
  // const { count, setCount } = useObserver(0);
  // const { str } = useObserver("qqqq")
 const[value,setValue]=useState("")
 console.log("value",value);
 const debounced = useDebouncedCallback(
  // function
  (value) => {
    setValue(value);
  },
  // delay in ms
  1000
);
  return (
    <>
    {/* <Stack justifyContent={'center'} direction={'row'}>
      <Button onClick={()=> setCount(count-1)}> {count}</Button>
      <Button sx={{display:"flex", justifyContent:"center"}}> {str}</Button>
    </Stack>
    <BasicTabs/>
    <Stack spacing={2} direction="row">
      <Button variant="text" color='primary'>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack> */}
    <TextField  onChange={(e)=> debounced(e.target.value)}/>
    </>
  )
}

export default App
