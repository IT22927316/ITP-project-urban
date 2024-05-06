import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { PiCheckCircleBold } from "react-icons/pi";

const EditCommunities = () => {
  const {id} = useParams();
  const {community_name, community_type, communityImage, location, description, community_vision} = useLoaderData();

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
  const handleUpdate = (event) => {
      event.preventDefault();
      const form = event.target;

      const community_name = form.community_name.value;
      const community_type = form.community_type.value;
      const communityImage = form.communityImage.value;
      const location = form.location.value;
      const description = form.description.value;
      const community_vision = form.community_vision.value;

      const updateCommunityObj = {
        community_name,community_vision, communityImage,community_type,location, description
      }

    
      //update community data
      fetch(`http://localhost:5000/communityform/${id}`,{
        method: "PATCH",
        headers:{
          "Content-type": "application/json"
        },
        body: JSON.stringify(updateCommunityObj)
      }).then(res => res.json()).then(data => {
        // Show success message
        setShowSuccessMessage(true);
        setTimeout(() => {
            setShowSuccessMessage(false);
        }, 5000); // Hide the message after 5 seconds
    });

  }

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Community Details</h2>

      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
       {/* First Row */}
       <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="community_name" value="Community Name" />
          </div>
          <TextInput id="community_name" name='community_name' type="text" placeholder="Community Name" required defaultValue={community_name} />
        </div>

        {/* communityImage */}
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
            <Label htmlFor="communityImage" value="Community Image URL" />
          </div>
          <TextInput id="communityImage" name='communityImage' type="text" placeholder="Community Image URL" required defaultValue={communityImage}/>
        </div>
      </div>

      {/* Second Row - location */}
      <div className='flex gap-8'>
        <div className='lg:w-1/2'>
          <div className="mb-2 block">
          <Label htmlFor="location" value="Location" />
          </div>
          <TextInput id="location" name='location' type="text" placeholder="Location" required defaultValue={location}/>
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

      {/* 3rd Row - community location  */}
      <div>
        <div className="mb-2 block">
        <Label htmlFor="community_vision" value="Community Vision" />
        </div>
        <Textarea id="community_vision" name='community_vision' type="text" placeholder="Community Vision" required defaultValue={community_vision}/>
      </div>

      {/* 4th Row - community description */}
      <div>
        <div className="mb-2 block">
        <Label htmlFor="description" value="Community Description" />
        </div>
        <Textarea id="description" name='description' placeholder="Community Description" required  className='w-full' rows={10} defaultValue={description}/>
      </div>

      <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/admin/dashboard/manage-community">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-700'>Update Community</Button>
        </div>
    </form>

    {/* Success Message */}
    {showSuccessMessage && (
                <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-lg flex items-center">
                    <PiCheckCircleBold className="h-6 w-6 mr-2" />
                    <span className="text-lg">Community Details Updated Successfully!</span>
                </div>
            )}
    </div>
  )
}

export default EditCommunities