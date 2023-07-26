import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SummaryCard from './SummaryCard';
import { openModal } from '../../redux/features/modalSlice'
import { useSelector, useDispatch } from 'react-redux'

const SummaryCardGrid = () => {
    const balance = useSelector((state) => state.balance.value);
    const income = useSelector((state) => state.income.value);
    const expense = useSelector((state) => state.expense.value);
    const dispatch = useDispatch() 
    
  return (
    <Box sx={{ flexGrow: 1 }} my={2} mx={1}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <SummaryCard title="Current Balance" value={balance} />
        </Grid>
        <Grid item xs={12}  sm={4}>
        <SummaryCard theme="green" title="Total Income" value={income} actionText="add income" onActionClick={()=>{dispatch(openModal('income'))}}/>
        </Grid>
        <Grid item xs={12}  sm={4}>
        <SummaryCard theme="red" title="Total Expense" value={expense} actionText="add expense" onActionClick={()=>{dispatch(openModal('expense'))}}/>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SummaryCardGrid