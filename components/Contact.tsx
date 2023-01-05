
import {PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {}

type Inputs = {
  name: string,
  email: string,
  subject:string,
  message:string,
};
const Contact = ({}: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto:gio1818ggg@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  };
  return (
    <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row items-center justify-evenly'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>
          I have got just what you need. <span className='decoration-[#f7ab0a]/50 underline'> Lets Talk.</span>
        </h4>

        <div className='space-y-10 flex flex-col items-center'>
          <div className='flex items-center space-x-5'>
            <PhoneIcon className='text-[#f7ab0a] h-7 2-7 animate-pulse'/>
            <p className='text-2xl'>+995599801314</p>
          </div>
          <div className='flex items-center space-x-5'>
            <EnvelopeIcon className='text-[#f7ab0a] h-7 2-7 animate-pulse'/>
            <p className='text-2xl'>gio1818ggg@gmail.com</p>
          </div>
          <div className='flex items-center space-x-5'>
            <MapPinIcon className='text-[#f7ab0a] h-7 2-7 animate-pulse'/>
            <p className='text-2xl'>Georgia,Imereti,Bagdati</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')}placeholder='Name' className='contactInput w-40 md:w-60' type='text'/> 
            <input {...register('email')}placeholder='Email' className='contactInput' type='email'/>
          </div>
          <input {...register('subject')}placeholder='Subject' type='text' className='contactInput'/>
          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button type='submit' className='bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact