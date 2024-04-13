import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea, Card } from 'flowbite-react';
import { Link } from 'react-router-dom';
import studentpic from '../assets/contact2.jpeg';
import styles from './UploadContactForm.module.css'; // Import your CSS module

const UploadContactForm = () => {
    const contactformCategories = [
        "KnowledgeHub",
        "Student-Projects",
        "Invevntory-Items",
        "Communities",
        "Events",
        "Payments",
        "Deliveries",
        "WeatherHub",
        "Other"
        // ... other categories
      ];
    
      const [selectedContactformCategory, setSelectedContactformCategory] = useState(contactformCategories[0]);
    
      const handleChangeSelectedValue = (event) => {
          console.log(event.target.value);
          setSelectedContactformCategory(event.target.value);
      }
    
      //handle article submission
      const handleContactformSubmit = (event) => {
          event.preventDefault();
          const form = event.target;
    
          const user_name = form.user_name.value;
          const user_email = form.user_email.value;
          const contact_des = form.contact_des.value;
          const category = form.categoryName.value;
          
    
          const contactformObj = {
            user_name, user_email, contact_des, category      }
    
          console.log(contactformObj)
    
          //send data to database
          fetch("http://localhost:5000/upload-contactusform", {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(contactformObj)
          }).then(res => res.json()).then(data => {
            //console.log(data)
            alert("Contact Form Uploaded Successfully!")
            form.reset();
          })
    
      }
  
  return (
    <div className={styles.container}><br/><br/>
      <h2 className={styles.title}>Contact Us</h2>
      <div className={styles.flexContainer}>
        <div className={styles.imageContainer}>
          <img src={studentpic} alt="Students" className={styles.image} />
        </div>
        <form onSubmit={handleContactformSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <Label htmlFor="user_name" value="Name" />
            <TextInput id="user_name" name='user_name' type="text" placeholder="Your Name" required />
          </div>
          <div className={styles.inputGroup}>
            <Label htmlFor="user_email" value="Email" />
            <TextInput id="user_email" name='user_email' type="email" placeholder="Your Email" required />
          </div>
          <div className={styles.inputGroup}>
            <Label htmlFor="inputState" value="Category"/>
            <Select id='inputState' name='categoryName' value={selectedContactformCategory} onChange={(e) => setSelectedContactformCategory(e.target.value)}>
              {contactformCategories.map((option) => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
          <div className={styles.inputGroup}>
            <Label htmlFor="contact_des" value="Description" />
            <Textarea id="contact_des" name='contact_des' placeholder="Write Your Inquiry" required rows={7} />
          </div>
          <div className='flex justify-end items-center space-x-4 px-4 lg:px-1'>
            <Link to="/">
                <Button className='w-48 h-10 bg-red-500'>Cancel</Button>
            </Link>
            <Button type="submit" className='w-48 h-10 bg-green-700'>Submit</Button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default UploadContactForm;

