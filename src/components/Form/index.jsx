import React, { useState } from 'react'
import { Grid } from '../Grid';
import * as C from './styled'

const Form = ({ handleAdd, transactionsList, setTransactionsList }) => {
  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const generateID = () => Math.round(Math.random() * 1000)


  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (amount < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const transactions = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    }

    handleAdd(transactions)
    setDesc('')
    setAmount('')
  }

  return (
    <>
      <C.Container>
        <C.InputContet>
          <C.Label>Description</C.Label>
          <C.Input value={desc} onChange={(e) => { setDesc(e.target.value) }}></C.Input>
        </C.InputContet>
        <C.InputContet>
          <C.Label>Valor</C.Label>
          <C.Input type='number'
            value={amount}
            onChange={(e) => { setAmount(e.target.value) }} />
        </C.InputContet>
        <C.RadioGroup>
          <C.Input type='radio'
            id="rIncome"
            defaultChecked
            name='group1'
            onChange={() => setExpense(!isExpense)} />
          <C.Label htmlFor='rIcome'>Entrada</C.Label>
          <C.Input type='radio'
            id='rExpenses'
            name='group1'
            onChange={() => setExpense(!isExpense)} />
          <C.Label htmlFor='rExpenses'>salida</C.Label>
        </C.RadioGroup>
        <C.Button onClick={handleSave}>ADICCIONAR</C.Button>
      </C.Container>
      <Grid items={transactionsList} setItems={setTransactionsList} />
    </>
  )
}


export default Form;