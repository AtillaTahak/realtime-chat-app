'use client'
import Button from '@/components/ui/Button'
import { FC,useState } from 'react'
import { signIn } from 'next-auth/react'
import { toast } from 'react-hot-toast'

interface pageProps {
}

const page: FC<pageProps> = ({ }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
     async function loginWithGoole() {
        setIsLoading(true)
        try {
            await signIn('google')
        } catch (error) {
           toast.error('Something went wrong')
        } finally {
            setIsLoading(false)
        }
    }
    return <>   
     <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50 sm:px-6 lg:px-8">
        <div className="flex flex-col w-full max-w-md px-4 py-6 space-y-4 bg-white border border-gray-300 rounded-md shadow-md sm:px-6 lg:px-8">
            <div className="flex flex-col items-center space-y-2">
                <h1 className="text-2xl font-semibold text-gray-900">Sign in to your Gmail</h1>
                <p className="text-sm text-gray-600">Or
                    <a href="#" className="text-blue-600 hover:underline">start your 14-day free trial</a>
                </p>
            </div>
            <div className="flex flex-col space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">Email address</label>
                <input type="email" id="email" name="email" autoComplete="email" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <input type="password" id="password" name="password" autoComplete="current-password" required className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" />
                <label htmlFor="remember_me" className="inline-flex items-center">
                    <input id="remember_me" name="remember_me" type="checkbox" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                    <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>
            <Button isLoading={isLoading} onClick={loginWithGoole} type='button'
            className='max-w-sm mx-auto w-full'>Sign in</Button>
        </div>
    </div>
</>

}

export default page