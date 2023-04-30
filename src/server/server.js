// // const express = require('express');
// import express from 'express';
// import bodyParser from'body-parser';
// import cors from'cors';
// import mongoose from'mongoose';

// // global.Task from './api/models/taskModel';
// import routes from'../server/routes/taskRoutes'

// mongoose.connect(
//     'mongodb://localhost/projectcloud',
//     {useNewUrlParser:true}
// )

// const port = process.env.PORT || 3000;
// const app = express();

// app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}))
// app.use(bodyParser.json())

// routes(app);
// app.listen(port);

// app.use((req,res) => {
//     res.status(404).send({url : `${req.originalUrl} not found`})
// })

// console.log(`Server started on port ${port}`);

// To connect with your mongoDB database
// const mongoose = require("mongoose");
import mongoose from "mongoose";
mongoose
  .connect("mongodb://50.16.86.205:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    connectTimeoutMS: 30000,
  })
  .then(() => console.log("Connected to Your_db database"))
  .catch((err) => console.log(err));

// Schema for users of ap*+..35\
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  sub_title: {
    type: String,
    required: true,
  },
  desc_short: {
    type: String,
    required: false,
  },
  img: {
    type: String,
    required: false,
  },
  desc: {
    type: String,
    required: false,
  },
  form: {
    type: Boolean,
    default: false,
  },
  show_m: {
    type: Boolean,
    default: false,
  },
});

const CommentSchema = new mongoose.Schema({
  account: {
    type: String,
  },
  text: {
    type: String,
  },
});
const User = mongoose.model("users", UserSchema);
const News = mongoose.model("news", NewsSchema);

const Comment = mongoose.model("comments", CommentSchema);

mongoose.connection.on(
  "error",
  console.error.bind(console, "MongoDB connection error:")
);

// For backend and express
import express, { response } from "express";
// const express = require("express");
const app = express();
import cors from 'cors'
// const cors = require("cors");

console.log("App is listening on port 5000");
app.use(express.json({ limit: "300mb" }));
app.use(cors());

app.get("/", (req, resp) => {
  resp.send("App is Working");
});

app.post("/register", async (req, resp) => {
  try {
    const user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    if (result) {
      delete result.password;
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("User already registered");
    }
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const alluser = await User.find({});
    const user = alluser.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      // localStorage.setItem("user", "test");
      res.send(user);
    } else {
      res.send("Wrond id or password");
    }
  } catch (e) {
    console.log(e);
  }
});

app.post("/news", async (req, resp) => {
  try {
    const news = new News(req.body);
    let result = await news.save();
    result = result.toObject();
    if (result) {
      resp.send(req.body);
      console.log(result);
    } else {
      console.log("Error saving post");
    }
  } catch (e) {
    console.log(e);
    resp.send("Something Went Wrong");
  }
});

app.delete("/news/delete/:id", async(req, res) => {
    try{
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) res.status(404).send("No item found");
        res.status(200).send();
    }catch(error){
        res.status(500).send(error);
    }
    
})

app.put("/news/update/:id", async(req, res) => {
    try{
        const news = await News.findByIdAndUpdate(req.params.id, req.body);
        await News.save();
        res.send(news)
    }catch (error){
        res.status(500).send(error);
    }
})

app.get("/getAllNews", async (req, res) => {
  try {
    const allpost = await News.find({});
    res.send({ status: "ok", data: allpost });
  } catch (error) {
    console.log(error);
  }
});

app.listen(5000);