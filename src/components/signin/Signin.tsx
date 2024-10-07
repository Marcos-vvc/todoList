import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Signin.module.css'
import axios from 'axios'
import { baseURL } from '../../constants/baseURL'
import { useNavigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { notifyError, notifySucess } from '../../utils/notifications'

interface IUserFormInput {
  name: string
  email: string
  password: string
}

export function Signin() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUserFormInput>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IUserFormInput> = async (data) => {
    try {
      await axios.post(`${baseURL}/user/create-user`, data)
      reset()
      notifySucess()
      setTimeout(() => navigate('/login'), 2000)
    } catch (error) {
      notifyError()
    }
  }
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <p className={styles.title}>Cadastro</p>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles['input-group']}>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder=""
              {...register('name')}
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder=""
              {...register('email')}
              required
            />
          </div>
          <div className={styles['input-group']}>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              id="password"
              placeholder=""
              {...register('password')}
              required
            />
          </div>
          <button className={styles.sign} type="submit" disabled={isSubmitting}>
            Cadastrar
            <ToastContainer />
          </button>
        </form>
        <p className={styles.login}>
          Já tem conta?{' '}
          <button onClick={() => navigate('/login')}>Login</button>
        </p>
      </div>
    </div>
  )
}
