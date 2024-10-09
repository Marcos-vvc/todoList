import { Bounce, Flip, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const notifySucess = () =>
  toast.success('Cadastro realizado com sucesso!', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Flip,
  })

export const notifyError = () =>
  toast.error('Erro ao cadastrar o usuário.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Flip,
  })

export const notifyErrorLogin = () =>
  toast.warning('Email ou senha incorretos.', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Flip,
  })

export const notifySucessDelete = () => {
  toast.success('Excluido com sucesso!', {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
    transition: Bounce,
  })
}
