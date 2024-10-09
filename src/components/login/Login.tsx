import { SubmitHandler, useForm } from 'react-hook-form'
import styles from './Login.module.css'
import axios from 'axios'
import { baseURL } from '../../constants/baseURL'
import { useNavigate } from 'react-router-dom'
import { notifyErrorLogin } from '../../utils/notifications'
import { ToastContainer } from 'react-toastify'

interface IUserProfile {
  email: string
  password: string
}

export function Login() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<IUserProfile>()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<IUserProfile> = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/auth/signin`, data)
      const token = response.data.access_token
      localStorage.setItem('userToken', token)
      reset()
      navigate('/page')
    } catch (error) {
      notifyErrorLogin()
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
            <div className={styles.forgot}>
              <a rel="noopener noreferrer" href="#">
                Esqueceu sua senha ?
              </a>
            </div>
          </div>
          <button className={styles.sign} type="submit" disabled={isSubmitting}>
            Login
            <ToastContainer />
          </button>
        </form>
      </div>
    </div>
  )
}
