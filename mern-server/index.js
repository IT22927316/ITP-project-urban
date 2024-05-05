require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;


//middleware
app.use(cors());
app.use(express.json());

//password-database-"urban1"

app.get('/', (req,res) => {
    res.send('Hello World!')
})

//mongodb config
const uri = "mongodb+srv://mern-urban-store:urban1@cluster0.4poakmm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    console.log("Connected successfully to MongoDB");

    //-------------------------------------------------------------------------------------------------------------------------------
    //create a collection for the database
    const userdetailCollections = client.db("UserdetailInventory").collection("userdetails")
    const artcileCollections = client.db("ArticleInventory").collection("articles");
    const eventCollections = client.db("EventInventory").collection("events");
    const reviewCollections = client.db("ReviewInventory").collection("reviewforms");
    const communityCollections = client.db("CommunityInventory").collection("communityforms");
    const inventoryitemCollections = client.db("ItemInventory").collection("inventoryitems");
    const studentprojectCollections = client.db("StudentProjectInventory").collection("studentprojects");
    const questionCollections = client.db("QuestionInventory").collection("questions");
    const answerCollections = client.db("AnswerInventory").collection("answers");
    const driverdetailCollections = client.db("DriverInventory").collection("driverdetails");
    const contactusformCollections = client.db("ContactUsInventory").collection("contactusforms");


    //-----------------for  user authentication routes -------------------------
     // User Authentication Routes

    // User Signup
    app.post('/signup', async (req, res) => {
      const { user_email, password, full_name, address, contact_number, username, user_image_url } = req.body;
      const userExists = await userdetailCollections.findOne({ user_email });
      if (userExists) {
        return res.status(400).json({ message: "User already exists" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await userdetailCollections.insertOne({ user_email, password: hashedPassword, full_name, address, contact_number, username, user_image_url });
      res.status(201).json({ message: "User created successfully", userId: result.insertedId });
    });

    // User Login
    app.post('/login', async (req, res) => {
      const { user_email, password } = req.body;
      const user = await userdetailCollections.findOne({ user_email });
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
      res.json({ message: "Login successful", token });
    });

     //For User Details ----------------------------------------------------------------------------------------------------------------
    //insert a user to the database using post method                                                               
    app.post("/upload-userdetail", async(req,res) => {
      const data = req.body;
      const result = await userdetailCollections.insertOne(data);
      res.send(result);
  })

  //get all user details from database
  app.get("/all-userdetails", async(req, res) => {
      const userdetails = userdetailCollections.find();
      const result = await userdetails.toArray();
      res.send(result);
  })

  //update user data by patch or update methods
  app.patch("/userdetail/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateUserData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateUserData
          }
      }

      //update
      const result = await userdetailCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete user data
  app.delete("/userdetail/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await userdetailCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-userdetails", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await userdetailCollections.find(query).toArray();
      res.send(result);
  })

  //to get single user data
  app.get("/userdetail/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await userdetailCollections.findOne(filter);
    res.send(result);
  })


    //FOR ARTICLES --------------------------------------------------------------------------------------------------------------------
    //insert a article to the database using post method                                                               
    app.post("/upload-article", async(req,res) => {
        const data = req.body;
        const result = await artcileCollections.insertOne(data);
        res.send(result);
    })

    //get all artcile details from database
    app.get("/all-articles", async(req, res) => {
        const articles = artcileCollections.find();
        const result = await articles.toArray();
        res.send(result);
    })

    //update book data by patch or update methods
    app.patch("/article/:id", async(req, res) => {
        const id = req.params.id;
        //console.log(id);
        const updateArticleData = req.body;
        const filter = {_id: new ObjectId(id)};
        const options = { upsert: true };

        const updateDoc = {
            $set: {
                ...updateArticleData
            }
        }

        //update
        const result = await artcileCollections.updateOne(filter, updateDoc, options);
        res.send(result);
    })

    //delete article data
    app.delete("/article/:id", async(req, res) => {
        const id = req.params.id;
        const filter = {_id: new ObjectId(id)};
        const result = await artcileCollections.deleteOne(filter);
        res.send(result);
    })

    //find by category 
    app.get("/all-articles", async(req, res) =>{
        let query = {};
        if(req.query?.category){
            query = {category: req.query.category}
        }
        const result = await artcileCollections.find(query).toArray();
        res.send(result);
    })

    //to get single article data
    app.get("/article/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await artcileCollections.findOne(filter);
      res.send(result);
    })

    //For Student Projects --------------------------------------------------------------------------------------------------------------
    //insert a student project  to the database using post method                                                               
    app.post("/upload-studentproject", async(req,res) => {
      const data = req.body;
      const result = await studentprojectCollections.insertOne(data);
      res.send(result);
  })

  //get all student project details from database
  app.get("/all-studentprojects", async(req, res) => {
      const studentprojects = studentprojectCollections.find();
      const result = await studentprojects.toArray();
      res.send(result);
  })

  //update student project data by patch or update methods
  app.patch("/studentproject/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateStudentprojectData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateStudentprojectData
          }
      }

      //update
      const result = await studentprojectCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete student project data
  app.delete("/studentproject/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await studentprojectCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-studentprojects", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await studentprojectCollections.find(query).toArray();
      res.send(result);
  })

  //to get single student project  data
  app.get("/studentproject/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await studentprojectCollections.findOne(filter);
    res.send(result);
  })


    //FOR EVENTS -----------------------------------------------------------------------------------------------------------------------
    //insert a event to the database: using POST method
    app.post("/upload-event", async(req, res) => {
      const data = req.body;
      const result = await eventCollections.insertOne(data);
      res.send(result);
    })

    //get all events details from database
    app.get("/all-events", async(req, res) => {
      const events = eventCollections.find();
      const result = await events.toArray();
      res.send(result);
    })

    //update event data by patch or update methods
    app.patch("/event/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateEventData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateEventData
          }
      }

      //update
      const result = await eventCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    //delete event data
    app.delete("/event/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await eventCollections.deleteOne(filter);
      res.send(result);
    })

    //find by category 
    app.get("/all-events", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await eventCollections.find(query).toArray();
      res.send(result);
    })

    //to get single event data
    app.get("/event/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await eventCollections.findOne(filter);
    res.send(result);
    })

    //Review section --------------------------------------------------------------------------------------------------
    //insert a review form to the database: using POST method
    app.post("/upload-reviewform", async(req, res) => {
      const data = req.body;
      const result = await reviewCollections.insertOne(data);
      res.send(result);
    })

    //get all review details from database
    app.get("/all-reviewforms", async(req, res) => {
      const reviewforms = reviewCollections.find();
      const result = await reviewforms.toArray();
      res.send(result);
    })

    //update review form data by patch or update methods
    app.patch("/reviewform/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateReviewformData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateReviewformData
          }
      }

      //update
      const result = await reviewCollections.updateOne(filter, updateDoc, options);
      res.send(result);
    })

    //delete review form data
    app.delete("/reviewform/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await reviewCollections.deleteOne(filter);
      res.send(result);
    })

    //find by category 
    app.get("/all-reviewforms", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await reviewCollections.find(query).toArray();
      res.send(result);
    })

    //to get single review form data
    app.get("/reviewform/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await reviewCollections.findOne(filter);
    res.send(result);
    })

    //Communities database connection -------------------------------------------------------------------------------------
    //insert a community to the database using post method                                                               
     app.post("/upload-communityform", async(req,res) => {
      const data = req.body;
      const result = await communityCollections.insertOne(data);
      res.send(result);
    })

  //get all community details from database
  app.get("/all-communityforms", async(req, res) => {
      const communityforms = communityCollections.find();
      const result = await communityforms.toArray();
      res.send(result);
  })

  //update community data by patch or update methods
  app.patch("/communityform/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateCommunityData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateCommunityData
          }
      }

      //update
      const result = await communityCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete community data
  app.delete("/communityform/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await communityCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-communityforms", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await communityCollections.find(query).toArray();
      res.send(result);
  })

  //to get single community data
  app.get("/communityform/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await communityCollections.findOne(filter);
    res.send(result);
  })


    //inventory database connection-------------------------------------------------------------------------------------------
    //insert a new inventory-item to the database using post method                                                               
    app.post("/upload-inventoryitem", async(req,res) => {
      const data = req.body;
      const result = await inventoryitemCollections.insertOne(data);
      res.send(result);
  })

  //get all inventory-item details from database
  app.get("/all-inventoryitems", async(req, res) => {
      const inventoryitems = inventoryitemCollections.find();
      const result = await inventoryitems.toArray();
      res.send(result);
  })

  //update inventory-item data by patch or update methods
  app.patch("/inventoryitem/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateInventoryitemData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateInventoryitemData
          }
      }

      //update
      const result = await inventoryitemCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete inventory-item data
  app.delete("/inventoryitem/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await inventoryitemCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-inventoryitems", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await inventoryitemCollections.find(query).toArray();
      res.send(result);
  })

  //to get single inventory-item data
  app.get("/inventoryitem/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await inventoryitemCollections.findOne(filter);
    res.send(result);
  })

    //FOR Questions --------------------------------------------------------------------------------------------------------------------
    //insert a question to the database using post method                                                               
    app.post("/upload-question", async(req,res) => {
      const data = req.body;
      const result = await questionCollections.insertOne(data);
      res.send(result);
  })

  //get all question details from database
  app.get("/all-questions", async(req, res) => {
      const questions = questionCollections.find();
      const result = await questions.toArray();
      res.send(result);
  })

  //update question data by patch or update methods
  app.patch("/question/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateQuestionData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateQuestionData
          }
      }

      //update
      const result = await questionCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete question data
  app.delete("/question/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await questionCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-questions", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await questionCollections.find(query).toArray();
      res.send(result);
  })

  //to get single question data
  app.get("/question/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await questionCollections.findOne(filter);
    res.send(result);
  })


    //FOR Answerss --------------------------------------------------------------------------------------------------------------------
    //insert a answer to the database using post method                                                               
    app.post("/upload-answer", async(req,res) => {
      const data = req.body;
      const result = await answerCollections.insertOne(data);
      res.send(result);
  })

  //get all answer details from database
  app.get("/all-answers", async(req, res) => {
      const answers = answerCollections.find();
      const result = await answers.toArray();
      res.send(result);
  })

  //update answer data by patch or update methods
  app.patch("/answer/:id", async(req, res) => {
      const id = req.params.id;
      //console.log(id);
      const updateAnswerData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = { upsert: true };

      const updateDoc = {
          $set: {
              ...updateAnswerData
          }
      }

      //update
      const result = await answerCollections.updateOne(filter, updateDoc, options);
      res.send(result);
  })

  //delete answer data
  app.delete("/answer/:id", async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await answerCollections.deleteOne(filter);
      res.send(result);
  })

  //find by category 
  app.get("/all-answers", async(req, res) =>{
      let query = {};
      if(req.query?.category){
          query = {category: req.query.category}
      }
      const result = await answerCollections.find(query).toArray();
      res.send(result);
  })

  //to get single answer data
  app.get("/answer/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await answerCollections.findOne(filter);
    res.send(result);
  })



  //-------------------For Delivery driver-----------------------------------------------------------------------------------------

  //insert a delivery driver to the database using post method                                                               
  app.post("/upload-driver", async(req,res) => {
    const data = req.body;
    const result = await driverdetailCollections.insertOne(data);
    res.send(result);
})

//get all driver details from database
app.get("/all-driverdetails", async(req, res) => {
    const driverdetails = driverdetailCollections.find();
    const result = await driverdetails.toArray();
    res.send(result);
})

//update driver data by patch or update methods
app.patch("/driverdetail/:id", async(req, res) => {
    const id = req.params.id;
    //console.log(id);
    const updateDriverData = req.body;
    const filter = {_id: new ObjectId(id)};
    const options = { upsert: true };

    const updateDoc = {
        $set: {
            ...updateDriverData
        }
    }

    //update
    const result = await driverdetailCollections.updateOne(filter, updateDoc, options);
    res.send(result);
})

//delete driver data
app.delete("/driverdetail/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await driverdetailCollections.deleteOne(filter);
    res.send(result);
})

//find by category 
app.get("/all-driverdetails", async(req, res) =>{
    let query = {};
    if(req.query?.category){
        query = {category: req.query.category}
    }
    const result = await driverdetailCollections.find(query).toArray();
    res.send(result);
})

//to get single driver data
app.get("/driverdetail/:id", async(req, res) => {
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const result = await driverdetailCollections.findOne(filter);
  res.send(result);
})

//-----------Contact Us Database----------------------------------------------------------------------------------------------------
//insert contact form to the database using post method                                                               
app.post("/upload-contactusform", async(req,res) => {
    const data = req.body;
    const result = await contactusformCollections.insertOne(data);
    res.send(result);
})

//get all contactus form details from database
app.get("/all-contactusforms", async(req, res) => {
    const contactusforms = contactusformCollections.find();
    const result = await contactusforms.toArray();
    res.send(result);
})

//update contactus form by patch or update methods
app.patch("/contactusform/:id", async(req, res) => {
    const id = req.params.id;
    //console.log(id);
    const updatecontactusformData = req.body;
    const filter = {_id: new ObjectId(id)};
    const options = { upsert: true };

    const updateDoc = {
        $set: {
            ...updatecontactusformData
        }
    }

    //update
    const result = await contactusformCollections.updateOne(filter, updateDoc, options);
    res.send(result);
})

//delete contactus form data
app.delete("/contactusform/:id", async(req, res) => {
    const id = req.params.id;
    const filter = {_id: new ObjectId(id)};
    const result = await contactusformCollections.deleteOne(filter);
    res.send(result);
})

//find by category 
app.get("/all-contactusform", async(req, res) =>{
    let query = {};
    if(req.query?.category){
        query = {category: req.query.category}
    }
    const result = await contactusformCollections.find(query).toArray();
    res.send(result);
})

//to get single contactusform data
app.get("/contactusform/:id", async(req, res) => {
  const id = req.params.id;
  const filter = {_id: new ObjectId(id)};
  const result = await contactusformCollections.findOne(filter);
  res.send(result);
})



//------------------------------------------------------------------------------------------------------------------------

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
    console.log(`Sample app listening on port ${port}`)
})




