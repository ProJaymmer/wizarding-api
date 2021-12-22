# Project 4: UNOFFICIAL WIZARDING WORLD--A REVIEW PAGE FOR MAGICAL SCHOOL

### BACK-END README

## WIZARDING WORLD HEADMASTER & STUDENT CRUD

### General Approach

My inspiration actually came from an earlier in-class lab where we architected a Harry Potter API. While doing so, I fell into the black hole that is everything Harry Potter and 14-year-old Jay came rushing forth. I started refreshing my memory and learning about Wizarding schools I'd never even heard about. This project is now two-fold: I get to fine-tune everything we've learned in this cohort by building a full-stack web application AND dive into one of my favorite fantasy worlds. I look forward to sharing all of my findings in the format of a fun and novice-friendly web application.

## Frameworks Used

- React
- Express

### CHALLENGES

1. Getting my remote database (MongoDB Atlas) to connect.
2. Getting my connection.js file to seed data properly:
   The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.

   SOLUTION: You must import require('dotenv').config(); in order for the dotenv reference (as the first argument of mongoose.connect) to reconfigure as a string.
