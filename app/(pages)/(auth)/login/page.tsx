"use client";
import Input from '@/app/_components/Input'
import Link from 'next/link'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query';
import { login } from '@/app/utils/services/user';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import Test from '@/app/_components/Test';

const schema = z.object({
  userName: z.string().min(2, "Invalid username"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
type FormData = z.infer<typeof schema>
export default function Login() {
  const router=useRouter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

const{mutate , error} = useMutation({
mutationFn:({ userName, password }: { userName: string, password: string }) => login({ userName, password }),

  onSuccess: (data) => {
toast.success(`Welcome back,!`);
if(data.data.user.role===1)
    router.push('/admin/dashboard');
else
    router.push('/user/home');
  },
  onError: (error: any) => {
     const message =
    typeof error?.response?.data === "string"
      ? error.response.data
      : "Registration failed";

  toast.error(message);}
}); 

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    mutate({ userName: data.userName, password: data.password });
  }


  return (
    <div className='h-screen flex items-center justify-center'>
      <div className=' md:w-[60%] lg:w-[40%] bg-surface-highest px-4 py-8 rounded-2xl '>
        <h2 className='text-3xl md:text-5xl font-bold text-white text-center'>Welcome back</h2>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input label='Username' placeholder="testuser" {...register("userName")} error={errors.userName?.message} />
          <Input label='Password' placeholder="********" type='password' {...register("password")} error={errors.password?.message} />
          <button className='bg-primary-container text-white w-full p-3 rounded-lg text-2xl  font-bold mt-8  
          active:scale-[0.98] active:bg-primary-container/80 hover:cursor-pointer transition-all duration-200'>Login</button>
        </form>
        <hr className='my-6 border-t border-gray-600' />
        <p className='text-center text-gray-400'>Don&apos;t have an account? <Link href="/register" className='text-primary-container font-bold hover:cursor-pointer'>Sign up</Link></p>
      </div>
    </div>
  )
}
