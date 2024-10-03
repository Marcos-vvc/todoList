import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Signin.module.css'
import { useState } from 'react'
import axios from 'axios'
import { baseURL } from '../../constants/baseURL'
import { useNavigate } from 'react-router-dom'

interface IUserFormInput {
  name: string
  email: string
  password: string
}

export function Signin() {
  const { register, handleSubmit } = useForm<IUserFormInput>()
  const [responseMessage, setResponseMessage] = useState('')
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IUserFormInput> = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/user/create-user`, data)
      setResponseMessage(response.data)
      navigate('/login')
    } catch (error: any) {
      setResponseMessage('Erro ao cadastrar o usuário.')
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Cadastro</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-group']}>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="" {...register('name')} />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder=""
              {...register('email')}
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder=""
              {...register('password')}
            />
          </div>
          <button className={styles.sign} type="submit">
            Cadastrar
          </button>
        </form>
        {responseMessage && <p>{responseMessage}</p>}
        <p className={styles.login}>
          Já tem conta?{' '}
          <a rel="noopener noreferrer" href="#" className="">
            Login
          </a>
        </p>
      </div>
    </div>
  )
}
