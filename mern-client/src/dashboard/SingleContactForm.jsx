import React from 'react'
import { useLoaderData , Link} from 'react-router-dom'
import { Card, Button } from 'flowbite-react';


const SingleContactForm = () => {
  const {_id, user_name, user_email, category, contact_des} = useLoaderData();

  return (
      <div >
        <Card>
      <div className='space-y-1'>
          <p className='mb-10 text-lg'>Inquiry By : <br/>{user_name}</p>
          <p className='mb-10 text-lg'>User Mail : <br/>{user_email}</p><br/>
          <p className='mb-10 text-lg'>Category : <br/>{category}</p><br/>
          <p className='mb-10 text-lg'>Descripton : <br/>{contact_des}</p>
      </div>
      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard/manage-contactusforms">
                <Button className='w-48 h-10 bg-green-500'>Back</Button>
            </Link>
        </div>

      </Card>
    </div>
  )
}


export default SingleContactForm