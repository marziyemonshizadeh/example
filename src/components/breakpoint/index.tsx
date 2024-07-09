import { Grid } from '@mui/material';
import { Item } from '../../style';
import {  useObserver } from 'rosma';
import { observerOne, ObserverOneType } from '../pages/cutting';
// import { observerOne, ObserverOneType } from '../../App';

type Props = {}

function BreakPoints({}: Props) {
    const {lastName,state}= useObserver<ObserverOneType>(observerOne)
    // const count = observer.get('count');
    // const str = observer.get('str');
    // const observerOne = observer.get('observerOne');

  return (
    <Grid container spacing={2}>
    <Grid item xs={8} md={6} lg={12}>
      <Item>{lastName}</Item>
    </Grid>
    <Grid item xs={4} md={6} lg={12}>
      <Item>{state}</Item>
    </Grid>
    <Grid item xs={4} md={6} lg={12}> 
      <Item>fff</Item>
    </Grid>
    <Grid item xs={8} md={6} lg={12}> 
      <Item>xs=8</Item>
    </Grid>
  </Grid>
  )
}

export default BreakPoints