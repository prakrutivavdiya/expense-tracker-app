import React from 'react'
import TopBar from '../../components/topbar/TopBar'
import SummaryCardGrid from '../../components/cards/SummaryCardGrid'
import Transections from '../../components/transections/Transections'
import { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addDoc, collection, getDocs } from "@firebase/firestore"
import { firestore } from "../../firebase/Firebase"
import { setTransections } from '../../redux/features/transectionSlice';
import { setIncome} from '../../redux/features/incomeSlice';
import { setExpense} from '../../redux/features/expenseSlice';
import {setBalance } from '../../redux/features/balanceSlice';
import ExpenseForm from '../expenseForm/ExpenseForm';
const Home = () => {
  const dispatch = useDispatch()

  const fetchTransections=useCallback(async()=>{
    const txnRef = collection(firestore, "transaction");
    const docRef = await getDocs(txnRef);
    const transactions=[];
    docRef.forEach(doc => {
      let txn=doc.data()
      txn.date=txn.date.toDate()
      txn.id=doc.id
      transactions.push(txn);
    })
    dispatch(setTransections(transactions))
    let income=transactions.filter(ob=>ob.category.toLowerCase()==="income").reduce((ac,ob)=>{return ac+ob.amount},0)
    let expense=transactions.filter(ob=>ob.category.toLowerCase()==="expense").reduce((ac,ob)=>{return ac+ob.amount},0)
    let balance=income-expense;
    dispatch(setBalance(balance))
    dispatch(setIncome(income))
    dispatch(setExpense(expense))
  },[dispatch])
  const addTransection=useCallback(async (data)=>{
    const txnRef = collection(firestore, "transaction");
    const newDocRef = await addDoc(txnRef, data);
    fetchTransections();
  },[fetchTransections])

  useEffect(() => {
    fetchTransections();
  }, [])
  
  return (
    <>
     <TopBar/>
    <SummaryCardGrid/>
    <Transections/>
    <ExpenseForm addTransection={addTransection}/>
    </>
  )
}

export default Home