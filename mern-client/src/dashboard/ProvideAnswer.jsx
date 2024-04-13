import React from 'react'
import UploadAnswer from './UploadAnswer'
import SingleQuestion from './SingleQuestion'

import { Card } from 'flowbite-react';

function ProvideAnswer() {
  return (
    <div className='w-full'>
        <Card>
        <SingleQuestion/>
        <UploadAnswer/>
        </Card>
    </div>
  )
}

export default ProvideAnswer