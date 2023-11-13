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
  return (
    <div>
      <Button>Button</Button>
    </div>
  )
}

export default SignupForm
