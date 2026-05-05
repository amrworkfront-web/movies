'use client';
import Input from '@/app/_components/Input'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { reg } from '@/app/utils/services/user';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation'
import { toast } from 'sonner';
import { AxiosError } from 'axios';




const schema = z.object({
  userName: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})
type FormData = z.infer<typeof schema>
export default function Register() {

  const router = useRouter();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ resolver: zodResolver(schema) })

  const { mutate, error } = useMutation({
    mutationFn: ({ userName, password }: { userName: string, password: string }) => reg({ userName, password }),

    onSuccess: (data) => {
      toast.success("Registration successful!");
      router.push('/login');
    },
onError: (error: unknown) => {
  if (error instanceof AxiosError) {
    const message = error.response?.data ?? "Registration failed";

    // optional تحسين الرسالة
    if (message.includes("username")) {
      toast.error("Username not found");
    } else {
      toast.error(message);
    }
  } else {
    toast.error("Something went wrong");
  }
}
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Data:", data);
    mutate({ userName: data.userName, password: data.password });
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className='w-[60%] lg:w-[40%] bg-surface-highest px-4 py-8 rounded-2xl '>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <h2 className='text-3xl md:text-5xl font-bold text-white text-center'>Create an account</h2>

          <Input label='Username' placeholder="John Doe" {...register("userName")} error={errors.userName?.message} />
          <Input label='Password' placeholder="********" {...register("password")} error={errors.password?.message} type='password' />
          <button className='bg-primary-container text-white w-full p-3 rounded-lg text-2xl  font-bold mt-8           active:scale-[0.98] active:bg-primary-container/80 hover:cursor-pointer transition-all duration-200
 '>Sign up</button>
        </form>
        <hr className='my-6 border-t border-gray-600' />
        <p className='text-center text-gray-400'>Already have an account? <Link href="/login" className='text-primary-container font-bold hover:cursor-pointer'>Login</Link></p>
      </div>
    </div>
    )
}
