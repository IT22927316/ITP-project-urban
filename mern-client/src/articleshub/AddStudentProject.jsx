import React, { useState } from 'react'
import { Card } from 'flowbite-react';
import { Link } from 'react-router-dom';

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';

const AddStudentProject = () => {
  const studentprojectCategories = [
    "Design and Innovation",
    "Community Impact",
    "Technology Integration",
    "Sustainability Practices",
    "Policy and Planning",
    "Social and Cultural Studies",
    "Other"
  ]

  const [selectedStudentprojectCategory, setSelectedStudentprojectCategory] = useState(studentprojectCategories[0]);

  const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedStudentprojectCategory(event.target.value);
  }

  //handle review form submission
  const handleStudentprojectSubmit = (event) => {
      event.preventDefault();
      const form = event.target;

      const student_name = form.student_name.value;
      const project_category = form.categoryName.value;
      const project_title = form.project_title.value;
      const project_mainpic = form.project_mainpic.value;
      const project_summary = form.project_summary.value;
      const step1_image = form.step1_image.value;
      const step1_title = form.step1_title.value;
      const step1_dedscription = form.step1_dedscription.value;
      const step2_image = form.step2_image.value;
      const step2_title = form.step2_title.value;
      const step2_dedscription = form.step2_dedscription.value;
      const step3_image = form.step3_image.value;
      const step3_title = form.step3_title.value;
      const step3_dedscription = form.step3_dedscription.value;
      const step4_image = form.step4_image.value;
      const step4_title = form.step4_title.value;
      const step4_dedscription = form.step4_dedscription.value;
      const step5_image = form.step5_image.value;
      const step5_title = form.step5_title.value;
      const step5_dedscription = form.step5_dedscription.value;
      const faliures = form.faliures.value;

      const studentprojectObj = {
        student_name, project_title, project_category, project_mainpic, project_summary,
        step1_image, step1_title, step1_dedscription, step2_image, step2_title, step2_dedscription,
        step3_image, step3_title, step3_dedscription,step4_image, step4_title, step4_dedscription,
        step5_image, step5_title, step5_dedscription, faliures}

      console.log(studentprojectObj)

      //send data to database
      fetch("http://localhost:5000/upload-studentproject", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(studentprojectObj)
      }).then(res => res.json()).then(data => {
        //console.log(data)
        alert("Project Uploaded Successfully!")
        form.reset();
      })

  }

  return (
    <div className='w-full px-4 my-12'>
        <br/><br/>
      <h2 className='mb-8 text-3xl font-bold text-center text-green-500'>UPLOAD YOUR PROJECT</h2>

      <form onSubmit={handleStudentprojectSubmit} className="flex flex-col gap-4">

        <Card className='bg-teal-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center '>Project Summary Section</h2>
        </div>


        {/* First Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="student_name" value="Student Name" />
          </div>
          <TextInput id="student_name" name='student_name' type="text" placeholder="Student Name" required />
        </div>

        {/* authorName */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="project_title" value="Project Title" />
          </div>
          <TextInput id="project_title" name='project_title' type="text" placeholder="Project Title" required />
        </div>
      </div>

        {/* Second Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="project_mainpic" value="Cover Picture" />
          </div>
          <TextInput id="project_mainpic" name='project_mainpic' type="text" placeholder="Cover Picture URL" required />
        </div>

        {/* category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Category Type"/>
          </div>

          <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedStudentprojectCategory} onChange={handleChangeSelectedValue}>
            {
              studentprojectCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>

        </div>
      </div>

        {/* Third Row: summary Description */}
        <div className='w-full'>
          <Label htmlFor="project_summary" value="Project Summary" />
          <Textarea id="project_summary" name='project_summary' placeholder="Write Your Project Summary" required rows={10} />
        </div>
        </Card>

        <Card className='bg-yellow-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center'>Step 1 Section</h2>
        </div>
        {/* step 1 - title */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step1_title" value="Step 1 Title" />
          </div>
          <TextInput id="step1_title" name='step1_title' type="text" placeholder="Step 1 Title - Required " required />
        </div>

        {/* step 1 - image */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step1_image" value="Step 1 Image" />
          </div>
          <TextInput id="step1_image" name='step1_image' type="text" placeholder="Step 1 Image - Required" required />
        </div>
      </div>

        {/* Step 1 description */}
        <div className='w-full'>
          <Label htmlFor="step1_dedscription" value="Step 1 Description" />
          <Textarea id="step1_dedscription" name='step1_dedscription' placeholder="Write Your Step 1 Description" required rows={10} />
        </div>
        </Card>

        <Card className='bg-red-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center'>Step 2 Section</h2>
        </div>


        {/* step 2 - title */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step2_title" value="Step 2 Title" />
          </div>
          <TextInput id="step2_title" name='step2_title' type="text" placeholder="Step 2 Title - Required " required />
        </div>

        {/* step 2 - image */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step2_image" value="Step 2 Image" />
          </div>
          <TextInput id="step2_image" name='step2_image' type="text" placeholder="Step 2 Image - Required" required />
        </div>
      </div>

        {/* Step 2 description */}
        <div className='w-full'>
          <Label htmlFor="step2_dedscription" value="Step 2 Description" />
          <Textarea id="step2_dedscription" name='step2_dedscription' placeholder="Write Your Step 2 Description" required rows={10} />
        </div>
        </Card>

        <Card className='bg-purple-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center '>Step 3 Section</h2>
        </div>

        {/* step 3 - title */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step3_title" value="Step 3 Title" />
          </div>
          <TextInput id="step3_title" name='step3_title' type="text" placeholder="Step 3 Title - Required " required />
        </div>


        {/* step 3 - image */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step3_image" value="Step 3 Image" />
          </div>
          <TextInput id="step3_image" name='step3_image' type="text" placeholder="Step 3 Image - Required" required />
        </div>
      </div>

        {/* Step 3 description */}
        <div className='w-full'>
          <Label htmlFor="step3_dedscription" value="Step 3 Description" />
          <Textarea id="step3_dedscription" name='step3_dedscription' placeholder="Write Your Step 3 Description" required rows={10} />
        </div>
        </Card>

        <Card className='bg-green-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center'>Step 4 Section</h2>
        </div>

        {/* step 4 - title */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step4_title" value="Step 4 Title (optional)" />
          </div>
          <TextInput id="step4_title" name='step4_title' type="text" placeholder="Step 4 Title" />
        </div>

        {/* step 4 - image */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step4_image" value="Step 4 Image (optional)" />
          </div>
          <TextInput id="step4_image" name='step4_image' type="text" placeholder="Step 4 Image "/>
        </div>
      </div>

        {/* Step 4 description */}
        <div className='w-full'>
          <Label htmlFor="step4_dedscription" value="Step 4 Description (optional)" />
          <Textarea id="step4_dedscription" name='step4_dedscription' placeholder="Write Your Step 4 Description"  rows={10} />
        </div>
        </Card>

        <Card className='bg-orange-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center '>Step 5 Section</h2>
        </div>


        {/* step 5 - title */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step5_title" value="Step 5 Title (optional)" />
          </div>
          <TextInput id="step5_title" name='step5_title' type="text" placeholder="Step 5 Title" />
        </div>

        {/* step 5 - image */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="step5_image" value="Step 5 Image (optional)" />
          </div>
          <TextInput id="step5_image" name='step5_image' type="text" placeholder="Step 5 Image "/>
        </div>
      </div>

        {/* Step 5 description */}
        <div className='w-full'>
          <Label htmlFor="step5_dedscription" value="Step 5 Description (optional)" />
          <Textarea id="step5_dedscription" name='step5_dedscription' placeholder="Write Your Step 5 Description"  rows={10} />
        </div>
        </Card>


        <Card className='bg-blue-100'>
        <div>
            <h2 className='text-2xl font-semibold text-center'>Project Faliures Section</h2>
        </div>

        {/* last Row: Faliuers Description */}
        <div className='w-full'>
          <Label htmlFor="faliures" value="Project Faliures" />
          <Textarea id="faliures" name='faliures' placeholder="Write Your Faliures Here" required rows={10} />
        </div>
        </Card>

        <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/studentprojects">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-700'>Upload Project</Button>
        </div>
      </form>
    </div>
  )
}

export default AddStudentProject