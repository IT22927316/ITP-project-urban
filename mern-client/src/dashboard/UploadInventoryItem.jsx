import React, { useState } from 'react'

import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadInventoryItem = () => {
    const itemCategories = [
        "Vegetables",
        "Fruits",
        "Herbs",
        "Condiments",
        "Grains",
        "Dairy",
        "Seeds",
        "Supplies",
        "Equipment",
        "Livestock",
        "Miscellaneous"
    ]

    const [selectedItemCategory, setSelectedItemCategory] = useState(itemCategories[0]);

    const handleChangeSelectedValue = (event) => {
        console.log(event.target.value);
        setSelectedItemCategory(event.target.value);
    }

    //handle item submission
    const handleItemSubmit = (event) => {
        event.preventDefault();
        const form = event.target;

        const item_name = form.item_name.value;
        const category = form.categoryName.value;
        const unitOfMearsurement = form.unitOfMearsurement.value;
        const quantity = form.quantity.value;
        const productDescription = form.productDescription.value;
        const manufactureDate = form.manufactureDate.value;
        const expireDate = form.expireDate.value;
        const price = form.price.value;
        const imageUrl = form.imageUrl.value;


        const itemObj = {
            item_name, category, unitOfMearsurement, quantity, productDescription, manufactureDate, expireDate, price, imageUrl
        }

        console.log(itemObj)

        //send data to database
        fetch("http://localhost:5000/upload-inventoryitem", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(itemObj)
        }).then(res => res.json()).then(data => {
            //console.log(data)
            alert("Item Uploaded Successfully!")
            form.reset();
        })

    }

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Upload An Item</h2>

            <form onSubmit={handleItemSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
                {/* First Row */}
                <div className='flex gap-8'>
                    {/* item_name */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="item_name" value="Item Name" />
                        </div>
                        <TextInput id="item_name" name='item_name' type="text" placeholder="Item Name" required />
                    </div>

                    {/* category */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="inputState" value="Item Category" />
                        </div>

                        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedItemCategory} onChange={handleChangeSelectedValue}>
                            {
                                itemCategories.map((option) => <option key={option} value={option}>{option}</option>)
                            }
                        </Select>

                    </div>
                </div>

                {/* Second Row */}
                <div className='flex gap-8'>
                    {/*unitOfMearsurement*/}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="unitOfMearsurement" value="Unit Of Mearsurement" />
                        </div>
                        <TextInput id="unitOfMearsurement" name='unitOfMearsurement' type="text" placeholder="Unit Of Mearsurement" required />
                    </div>

                    {/*quantity*/}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="quantity" value="Quantity" />
                        </div>
                        <TextInput id="quantity" name='quantity' type="Number" placeholder="Quantity" required />
                    </div>
                </div>

                {/* 3rd Row */}
                <div className='flex gap-8'>
                    {/* manufactureDate */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="manufactureDate" value="Manufacture Date" />
                        </div>
                        <TextInput id="manufactureDate" name='manufactureDate' type="Date" placeholder="Manufacture Date" required />
                    </div>

                    {/* expireDate */}
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="expireDate" value="Expire Date" />
                        </div>
                        <TextInput id="expireDate" name='expireDate' type="Date" placeholder="Expire Date" />
                    </div>
                </div>

                {/*4rd Row - Price*/}
                <div className='flex gap-8'>
                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="price" value="Price" />
                        </div>
                        <TextInput id="price" name='price' type="Number" placeholder="Price" required />

                    </div>

                    <div className='lg:w-1/2'>
                        <div className="mb-2 block">
                            <Label htmlFor="imageUrl" value="Item Image URL" />
                        </div>
                        <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Item Image Url" required />
                    </div>
                </div>
                {/* 5rd Row - Product Description */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="productDescription" value="Product Description" />
                    </div>
                    <Textarea id="productDescription" name='productDescription' placeholder="Write Your Product Description" required className='w-full' rows={6} />
                </div>




                <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
                    <Link to="/admin/dashboard">
                        <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
                    </Link>
                    <Button type="submit" className='w-48 h-10 bg-green-500'>Upload Item</Button>
                </div>
            </form>
        </div>
    )
}

export default UploadInventoryItem