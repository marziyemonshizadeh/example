import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { ColumnDef } from '@tanstack/react-table';
import { useMemo } from 'react';
import { Observer, useObserver } from 'rosma';
import BasicTable from '../../table';
import BreakPoints from '../../breakpoint';
import BasicTabs from '../../tabs';


 export interface ObserverOneType {
  state:number,
  lastName:string
 }
 type DataType ={
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
}
export const observerOne = new Observer<ObserverOneType>({
  state:0,
  lastName:"karimi"
})

function Cutting() {
  const { count, setCount } = useObserver(0);
  const { str } = useObserver("qqqq")



  const columns = useMemo<ColumnDef<DataType, any>[]>(
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
    <>
    {/* use Observer package */}
    <Stack justifyContent={'center'} direction={'row'}>
      <Button onClick={()=> setCount(count-1)}> {count}</Button>
      <Button sx={{display:"flex", justifyContent:"center"}}> {str}</Button>
    </Stack>

    <BasicTable column={columns}/>

   <BreakPoints/>
    <BasicTabs/>
    <Stack spacing={2} direction="row">
      <Button variant="text" color='primary'>Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
    </>
  )
}

export default Cutting;
