import React from 'react'
import ResumenItem from '../ResumeItem'
import * as C from './styled'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
  return (
    <C.Container>
      <ResumenItem title= "Entradas" Icon={FaRegArrowAltCircleUp} value = {income}/>
      <ResumenItem title= "Salida" Icon={FaRegArrowAltCircleDown} value = {expense}/>
      <ResumenItem title= "Total" Icon={FaDollarSign} value = {total}/>
    </C.Container>
  )
}

export default Resume;
