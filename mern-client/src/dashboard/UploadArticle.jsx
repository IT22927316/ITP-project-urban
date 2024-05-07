import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { Link } from 'react-router-dom';

const UploadArticle = () => {
  const articleCategories = [
    "Techniques", "Sustainability", "Innovations", "Community", "Biodiversity",
    "Technology", "Trends", "Health", "Nutrition", "Self-Learning"
  ];

  const [selectedArticleCategory, setSelectedArticleCategory] = useState(articleCategories[0]);
  const [formData, setFormData] = useState({
    articleTitle: '',
    authorName: '',
    imageUrl: '',
    articleDescription: '',
    articlePdfUrl: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "articleTitle" || name === "authorName") {
      if (/^[a-zA-Z ]*$/.test(value)) {
        setError('');  // Clear error if input is valid
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      } else {
        setError('Only alphabetic characters and spaces are allowed for article titles and article authors.');
      }
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleChangeSelectedValue = (event) => {
    setSelectedArticleCategory(event.target.value);
  };

  const handleArticleSubmit = (event) => {
    event.preventDefault();
    if (error) {
      alert(error);
      return; // Prevent form submission if there's an error
    }
    const { articleTitle, authorName, imageUrl, articleDescription, articlePdfUrl } = formData;
    const category = selectedArticleCategory;

    const articleObj = {
      articleTitle, authorName, imageUrl, category, articleDescription, articlePdfUrl
    };

    console.log(articleObj);

    fetch("http://localhost:5000/upload-article", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(articleObj)
    }).then(res => res.json()).then(data => {
      alert("Article Uploaded Successfully!");
      event.target.reset();
    });
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload An Article</h2>
      {error && <div className="text-red-500">{error}</div>}

      <form onSubmit={handleArticleSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <Label htmlFor="articleTitle" value="Article Title" />
            <TextInput id="articleTitle" name='articleTitle' type="text" placeholder="Article Name" required value={formData.articleTitle} onChange={handleChange} />
          </div>
          <div className='lg:w-1/2'>
            <Label htmlFor="authorName" value="Author Name" />
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required value={formData.authorName} onChange={handleChange} />
          </div>
        </div>

        <div className='flex gap-8'>
          <div className='lg:w-1/2'>
            <Label htmlFor="imageUrl" value="Article Image URL" />
            <TextInput id="imageUrl" name='imageUrl' type="text" placeholder="Article Image Url" required value={formData.imageUrl} onChange={handleChange} />
          </div>
          <div className='lg:w-1/2'>
            <Label htmlFor="inputState" value="Article Category"/>
            <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedArticleCategory} onChange={handleChangeSelectedValue}>
              {articleCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="articleDescription" value="Article Description" />
          <Textarea id="articleDescription" name='articleDescription' placeholder="Write Your Book Description" required className='w-full' rows={10} value={formData.articleDescription} onChange={handleChange} />
        </div>

        <div>
          <Label htmlFor="articlePdfUrl" value="Your Tutorial Link" />
          <TextInput id="articlePdfUrl" name='articlePdfUrl' type="text" placeholder="Your Tutorial Link" required value={formData.articlePdfUrl} onChange={handleChange} />
        </div>

        <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
          <Link to="/admin/dashboard">
            <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
          </Link>
          <Button type="submit" className='w-48 h-10 bg-green-500'>Upload Article</Button>
        </div>
      </form>
    </div>
  )
}

export default UploadArticle;
