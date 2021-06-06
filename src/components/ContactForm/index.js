import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormContainer,
  InputWrapperSpan1,
  InputWrapperSpan2,
  Textarea,
  RequiredIconWrapper
} from './ContactFormElements'
import InputText from './../common/InputText/index'
import Button from './../common/Button/index'
import Backdrop from './../common/Backdrop/index'
import { BsArrowReturnLeft } from 'react-icons/bs'
import DefaultValue from './../../constants/DefaultValue'
import useGlobalStates from './../../store/globalStates/useGlobalStates'

const ContactForm = () => {
  const { state } = useGlobalStates()
  const [isSending, setIsSending] = useState(false)
  const [isAlert, setIsAlert] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm()
  const onSubmit = (data, e) => {
    setIsSending(oldState => (oldState = true))

    fetch(DefaultValue.urlFirebase, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => setIsSending(oldState => (oldState = false)))
      .then(() => e.target.reset())
      .then(() => setIsAlert(oldState => (oldState = true)))
  }
  const alertRequired = errorType =>
    errorType === 'required' && (
      <RequiredIconWrapper isNightMode={state.isNightMode}>
        <BsArrowReturnLeft size='100%' />
      </RequiredIconWrapper>
    )
  useEffect(() => {
    isAlert &&
      setTimeout(() => {
        setIsAlert(oldState => (oldState = false))
      }, 3000)
  }, [isAlert])

  return (
    <>
      {isSending && <Backdrop title='SENDING...' />}
      {isAlert && <Backdrop title='Success' content='I will reply you soon!' />}
      <FormContainer
        onSubmit={handleSubmit(onSubmit)}
        isMenuOpen={state.isMenuOpen}
      >
        <InputWrapperSpan1>
          <InputText
            placeholder='First Name'
            label='firstName'
            register={register}
            required
          />
          {alertRequired(errors.firstName?.type)}
        </InputWrapperSpan1>
        <InputWrapperSpan1>
          <InputText
            placeholder='Last Name'
            label='lastName'
            register={register}
          />
        </InputWrapperSpan1>
        <InputWrapperSpan1>
          <InputText
            placeholder='Email'
            label='email'
            register={register}
            type='email'
            required
          />
          {alertRequired(errors.email?.type)}
        </InputWrapperSpan1>
        <InputWrapperSpan1>
          <InputText
            placeholder='Mobile No.'
            label='mobileNo'
            register={register}
          />
        </InputWrapperSpan1>
        <InputWrapperSpan2 isMenuOpen={state.isMenuOpen}>
          <Textarea
            isNightMode={state.isNightMode}
            placeholder='Message'
            rows={6}
            {...register('message', { required: true })}
          />
          {alertRequired(errors.message?.type)}
        </InputWrapperSpan2>
        <InputWrapperSpan2 isMenuOpen={state.isMenuOpen}>
          <Button title='SEND' type='submit' />
        </InputWrapperSpan2>
      </FormContainer>
    </>
  )
}

export default ContactForm
