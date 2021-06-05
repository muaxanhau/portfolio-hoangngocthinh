import React from 'react'
import { Input } from './InputTextElements'
import useGlobalStates from '../../../store/globalStates/useGlobalStates'

const InputText = ({ placeholder, label, type, register, required }) => {
  const { state } = useGlobalStates()

  return (
    <Input
      placeholder={placeholder}
      type={type || 'text'}
      isNightMode={state.isNightMode}
      {...register(label, { required })}
    />
  )
}

export default InputText
