import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams, Link } from 'react-router-dom';

const EditArticles = () => {
  const { id } = useParams();
  const { articleTitle, authorName, imageUrl, category, articleDescription, articlePdfUrl } = useLoaderData();

  const articleCategories = [
    "Techniques", "Sustainability", "Innovations", "Community",
    "Biodiversity", "Technology", "Trends", "Health", "Nutrition", "Self-Learning"
  ];

  const [selectedArticleCategory, setSelectedArticleCategory] = useState(articleCategories[0]);

  const handleChangeSelectedValue = (event) => {
      setSelectedArticleCategory(event.target.value);
  };

  const validateInput = (input) => {
    // Allows only letters and spaces
    return /^[a-zA-Z\s]*$/.test(input);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const articleTitle = form.articleTitle.value;
    const authorName = form.authorName.value;

    // Validate inputs
    if (!validateInput(articleTitle) || !validateInput(authorName)) {
      alert("Please use only letters and spaces for the article title and author name.");
      return; // Prevent form submission
    }

    const imageUrl = form.imageUrl.value;
    const category = form.categoryName.value;
    const articleDescription = form.articleDescription.value;
    const articlePdfUrl = form.articlePdfUrl.value;

    const updateArticleObj = {
      articleTitle, authorName, imageUrl, category, articleDescription, articlePdfUrl
    };

    fetch(`http://localhost:5000/article/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(updateArticleObj)
    }).then(res => res.json()).then(data => {
      alert("Article Updated Successfully!");
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update The Article</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        {/* First Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="articleTitle" value="Article Title" />
            </div>
            <TextInput id="articleTitle" name='articleTitle' type="text" placeholder="Article Name" required defaultValue={articleTitle} />
          </div>

          {/* authorName */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required defaultValue={authorName}/>
          </div>
        </div>

        {/* Second Row */}
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Article Image URL" />
            </div>
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Article Image Url" required defaultValue={imageUrl}/>
          </div>

          {/* category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Article Category"/>
            </div>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedArticleCategory} onChange={handleChangeSelectedValue}>
              {articleCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>

        {/* 3rd Row - article description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="articleDescription" value="Article Description" />
          </div>
          <Textarea id="articleDescription" name='articleDescription' placeholder="Write Your Book Description" required  className='w-full' rows={10} defaultValue={articleDescription}/>
        </div>

        {/* 4th Row - Article Tutorial Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="articlePdfUrl" value="Your Tutorial Link" />
          </div>
          <TextInput id="articlePdfUrl" name='articlePdfUrl' type="text" placeholder="Your Tutorial Link" required defaultValue={articlePdfUrl}/>
        </div>

        <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
          <Link to="/admin/dashboard/manage-articles">
              <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
          </Link>
          <Button type="submit" className='w-48 h-10 bg-green-500'>Update Article</Button>
        </div>
      </form>
    </div>
  )
}

export default EditArticles;
