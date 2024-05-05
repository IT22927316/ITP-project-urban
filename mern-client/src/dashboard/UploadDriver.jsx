import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { PiCheckCircleBold } from "react-icons/pi";

const UploadDriver= () => {
  const Dgender = [
    "male",
    "female"
  ]

  const [selectedGender, setSelectedGender] = useState(Dgender[0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedGender(event.target.value);
  }

  const VType = [
    "Car",
    "Van",
    "Motor Bike",
    "Scooty"
  ]

  const [selectedType, setSelectedType] = useState(VType[0]);

  const handleSwitchSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedType(event.target.value);
  }


  //handle driver profile submission
  const handleDriverFormSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;

      const imageURL = form.imageURL.value;
      const name = form.name.value;
      const description = form.description.value;
      const age = form.age.value;
      const gender = form.gender.value;
      const contactNo = form.contactNo.value;
      const NIC = form.NIC.value;
      const category = form.category.value;
      const licenseNo = form.licenseNo.value;
      const vehicleType = form.vehicleType.value;
      const vehicleNo = form.vehicleNo.value;
      const deliveryFee = form.deliveryFee.value;

      const driverObj = {
        imageURL,name,description,age,gender,contactNo,NIC,category,licenseNo,vehicleType,vehicleNo,deliveryFee
      }

      console.log(driverObj)

      //send data to database
      try {
        const response = await fetch("http://localhost:5000/upload-driver", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(driverObj)
        });

        if (response.ok) {
            setShowSuccessMessage(true);
            form.reset();
            setTimeout(() => {
                setShowSuccessMessage(false);
            }, 10000);
        } else {
            console.error('Failed to upload driver profile');
        }
    } catch (error) {
        console.error('Failed to upload driver profile:', error);
    }

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-10 text-3xl font-bold'>Upload A Driver Profile</h2>

          <form onSubmit={handleDriverFormSubmit} className="flex lg:w-[800px] flex-col flex-wrap gap-4">

            {/* Image URL */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                    <Label htmlFor="imageURL" value="Image URL" />
                  </div>
                    <TextInput id="imageURL" name='imageURL' type="text" placeholder="Image URL" required />
                </div>

                {/* name */}
                <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                    <Label htmlFor="name" value="Driver Name" />
                  </div>
                  <TextInput id="name" name='name' type="text" placeholder="Driver Name" required />
                </div>
            </div>

            {/* decription */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="description" value="Profile Description" />
              </div>
              <Textarea id="description" name='description' placeholder="Description of the Driver" required  className='w-full' rows={5} />
            </div>

            {/* age */}
            <div className='flex gap-8'>
                <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                    <Label htmlFor="age" value="Age" />
                  </div>
                    <TextInput id="age" name='age' type="text" placeholder="Age" required />
                </div>

                {/* gender */}
                <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                    <Label htmlFor="inputState" value="Gender"/>
                  </div>

                    <Select id='inputState' name='DriverGender' className='w-full rounded' value={selectedGender} onChange={handleChangeSelectedValue}>
                      {
                        Dgender.map((option) => <option key={option} value={option}>{option}</option>)
                      }
                    </Select>

                  </div>
              </div>

          
                {/* contact number */}
                <div className='flex gap-8'>
                  <div className='lg:w-1/2'>
                    <div className="mb-2 block">
                      <Label htmlFor="contactNo" value="Contact Number" />
                    </div>
                      <TextInput id="contactNo" name='contactNo' type="text" required />
                  </div>

                  {/*license number */}
                  <div className='lg:w-1/2'>
                  <div className="mb-2 block">
                    <Label htmlFor="licenseNo" value="License Number" />
                  </div>
                  <TextInput id="licenseNo" name='licenseNo' type="text" placeholder="Driver's License Number" required />
                </div>

                  </div>

                  {/* vehicleType */}
                  <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                          <Label htmlFor="inputState" value="Vehicle Type"/>
                        </div>

                        <Select id='inputState' name='VehiType' className='w-full rounded' value={selectedType} onChange={handleSwitchSelectedValue}>
                          {
                            VType.map((option) => <option key={option} value={option}>{option}</option>)
                          }
                        </Select>

                    </div>

                    {/* vehicle No */}
                    <div className='lg:w-1/2'>
                      <div className="mb-2 block">
                        <Label htmlFor="vehicleNo" value="Vehicle Number" />
                      </div>
                        <TextInput id="vehicleNo" name='vehicleNo' type="text" placeholder="Number plate of the vehicle" required />
                      </div>
                  </div>

                    {/* delivery fee */}
                 <div className='lg:w-1/2'>
                      <div className="mb-2 block">
                        <Label htmlFor="deliveryFee" value="Delivery Fee"/>
                      </div>
                        <TextInput id="deliveryFee" name='deliveryFee' type="text" required />
                    </div>
          
            
                  <div className='flex justify-between items-center space-x-4 px-4 lg:px-1'>
                        <Link to="/admin/dashboard">
                            <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
                        </Link>
                        <Button type="submit" className='w-48 h-10 bg-green-500'>Upload Driver</Button>
                  </div>
        </form>

        {/* Success Message */}
        {showSuccessMessage && (
            <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded flex items-center">
                <PiCheckCircleBold className="h-6 w-6 mr-2" />
                <span>Driver Profile Uploaded Successfully!</span>
            </div>
        )}

    </div>
  )
}

export default UploadDriver
