import React, { useEffect, useState } from 'react'

import { Card } from 'flowbite-react';

const APage = () => {
    const [answers, setAnswers] = useState([]);

    useEffect( () =>{
        fetch("http://localhost:5000/all-answers").then(res => res.json()).then(data => setAnswers(data));
      }, [])
  return (
    <div >
    <h2 className='px-4 mb-16 text-3xl font-bold text-center'>Answers</h2>
    <div className='lg:px-3 py-4'>
            <Card>
                {
                    answers.map((answer, index) => (
                        <div key={answer._id}>
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Answer for Question Number : {index + 1}
                            </h5>
                            <div className="font-normal text-gray-700 dark:text-gray-400">
                            <div className="my-4">
                                    <p className='font-semibold'>Question By : {answer.user_name}</p>
                                </div>
                                <div className="mb-4">
                                    <p className='font-semibold'>Answer By : {answer.admin_name}</p>
                                </div>
                                <p className='font-semibold'>Answer :</p>
                                <p>{answer.answer_des}</p>
                                <br/>
                                {answers.length > 1 && index < answers.length - 1 ? <hr/> : null}
                                {index < answers.length - 1 && <hr/>} {/* Only add a horizontal rule if it's not the last item */}
                            </div>
                        </div>
                    ))
                }
            </Card>
        </div>
        </div>
  )
}

export default APage