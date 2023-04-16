import AddFriendButton from '@/components/AddFriendButton'
import { FC } from 'react'


const page: FC = () => {
  return <main className='pt-8'>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h1 className='text-2xl font-semibold text-gray-900'>Dashboard</h1>
    </div>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <AddFriendButton />
    </div>
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* <!-- Replace with your content --> */}
        <div className='py-4'>
            <div className='border-4 border-dashed border-gray-200 rounded-lg h-96' />
        </div>
        {/* <!-- /End replace --> */}
    </div>
  </main>
}

export default page