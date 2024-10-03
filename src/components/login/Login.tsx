import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Login.module.css'
import axios from 'axios'
import { baseURL } from '../../constants/baseURL'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface IUserProfile {
  email: string
  password: string
}

export function Login() {
  const { register, handleSubmit } = useForm<IUserProfile>()
  const [responseLogin, setResponseLogin] = useState('')
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IUserProfile> = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, data)
      console.log('Resposta da API:', response)

      const token = response.data.access_token
      localStorage.setItem('userTtoken', token)
      setResponseLogin('Login bem-sucedido!')
      navigate('/page')
    } catch (error: any) {
      setResponseLogin('Erro ao cadastrar o usuário.')
    }
  }

  return (
    <div className={styles['container-main']}>
      <div className={styles['form-container']}>
        <p className={styles.title}>Login</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
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
            <div className={styles.forgot}>
              <a rel="noopener noreferrer" href="#">
                Forgot Password ?
              </a>
            </div>
          </div>
          <button className={styles.sign} type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}
