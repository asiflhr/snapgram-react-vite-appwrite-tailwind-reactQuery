import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  Formlabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Loader from '@/components/shared/Loader'
// import { useToast} from '@/components/ui/use-toast'

// import {useCreateUserAccount, useSignInAccount} from '@/react-query/queries'
import { SignupValidation } from '@/lib/validation'
import { useUserContext } from '@/context/AuthContext'

const SignupForm = () => {
  // const {toast} = useToast()
  const navigate = useNavigate()
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext()

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: '',
      username: '',
      email: '',
      password: '',
    },
  })

  // Queries
  // const {mutateAsync: createUserAccount, isLoading: isCreatingAccount} = useCreateUserAccount()
  // const {mutateAsync: signInAccount, isLoading: isSigningIn} = userSignInAccount()

  // Handler
  const handleSignup = async (user: z.infer<typeof SignupValidation>) => {
    try {
      // const newUser = await createUserAccount(user)

      // if(!newUser){
      //   toast({title: 'Sign up failed. Please try again.'})
      //   return
      // }

      // const session = await signInAccount({
      //   email: user.email,
      //   password: user.password,
      // })

      // if(!session){
      //   toast({title: 'Something went wrong. Please login your new account'})
      //   navigate('/sign-in')
      //   return
      // }

      const isLoggedIn = await checkAuthUser()

      if (isLoggedIn) {
        form.reset()

        navigate('/')
      } else {
        // toast({title: 'Login failed. Please try again.'})

        return
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form {...form}>
      <div className='sm:w-420 flex-center flex-col'>
        <img src='/assets/images/logo.svg' alt='logo' />

        <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>
          Create a new account
        </h2>

        <p className='text-light-3 small-medium md:base-regular mt-2'>
          To use snapgram, Please enter your details
        </p>

        <form
          onSubmit={form.handleSubmit(handleSignup)}
          className='flex flex-col gap-5 w-full mt-4'
        >
          <FormField
          control={}
        </form>
      </div>
    </Form>
  )
}

export default SignupForm
