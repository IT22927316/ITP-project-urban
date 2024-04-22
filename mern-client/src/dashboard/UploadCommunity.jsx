import React, { useState } from 'react'
import { PiCheckCircleBold } from "react-icons/pi";
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadCommunity = () => {
  const communityCategories = [
    "Agriculture Technology",
    "Beginners",
    "DIY",
    "Educators",
    "Flowers and Decorative plant growers ",
    "Food Entrepreneurs",
    "Garden Keepers",
    "Local Farmers",
    "Urban Livestock",
    "Volunteer",
    "Youth and Students"
  ]

  const [selectedCommunityCategory, setSelectedCommunityCategory] = useState(communityCategories[0]);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleChangeSelectedValue = (event) => {
      console.log(event.target.value);
      setSelectedCommunityCategory(event.target.value);
  }

  //handle community submission
  const handleCommunitySubmit = async (event) => {
      event.preventDefault();
      const form = event.target;

      const community_name = form.community_name.value;
      const community_type = form.community_type.value;
      const communityImage = form.communityImage.value;
      const location = form.location.value;
      const description = form.description.value;
      const community_vision = form.community_vision.value;

      const communityObj = {
        community_name, community_type, communityImage, location, description, community_vision
      }

      console.log(communityObj)

      //send data to database
      try {
      const response = await fetch("http://localhost:5000/upload-communityform", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(communityObj)
      });

      if (response.ok) {
        setShowSuccessMessage(true);
        form.reset();
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 10000);
    } else {
        console.error('Failed to upload item');
    }
  } catch (error) {
    console.error('Failed to upload item:', error);
  }

}

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Create a New Community</h2>

      <form onSubmit={handleCommunitySubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      {/* First Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="community_name" value="Community Name" />
          </div>
          <TextInput id="community_name" name='community_name' type="text" placeholder="Community Name" required />
        </div>

        {/* communityImage */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="communityImage" value="Community Image URL" />
          </div>
          <TextInput id="communityImage" name='communityImage' type="text" placeholder="Community Image URL" required />
        </div>
      </div>

      {/* Second Row */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="location" value="Community Location" />
          </div>
          <TextInput id="location" name='location' type="text" placeholder="Community Location" required />
        </div>

        {/* category */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="inputState" value="Community Category"/>
          </div>

          <Select id='inputState' name='community_type' className='w-full rounded' value={selectedCommunityCategory} onChange={handleChangeSelectedValue}>
            {
              communityCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }
          </Select>

        </div>
      </div>

      {/* 3rd Row - community vision */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="community_vision" value="Community Vision " />
        </div>
        <Textarea id="community_vision" name='community_vision' type="text" placeholder="Community Vision" required/>
      </div>

      {/* 4th Row - community description */}
      <div>
        <div className="mb-2 block">
          <Label htmlFor="description" value="Community Description" />
        </div>
        <Textarea id="description" name='description' placeholder="Community Description" required  className='w-full' rows={10} />
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/communitymain">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-700'>Create Community</Button>
        </div>

    </form>

    {/* Success Message */}
    {showSuccessMessage && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded flex items-center">
                    <PiCheckCircleBold className="h-6 w-6 mr-2" />
                    <span>Community Added Successfully!</span>
                </div>
            )}

    </div>
  )
}

export default UploadCommunity