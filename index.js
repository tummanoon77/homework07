
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "name"
      }, 
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your URL to your project?",
        name: "url"
      }, 
    {
    type: "input", 
    message: "what is your GitHub project name?",
    name: "projectName"
  },
  {
    type: "input", 
    message: "please write short description of your project",
    name: "write"
  },
  {
    type: "list", 
    message: "What kind of license should your project have?",
    name: "badge",
    choices: [
      "MIT",
      "APACHE2.0",
      "GPL3.0",
      "BSD3",
      "none"
  ]
  },
  {
    type: "input", 
    message: "What command should be run to install dependencies ?",
    name: "inStall"
  },
  {
    type: "input", 
    message: "What command test should be run to run test ?",
    name: "test"
  },
  {
    type: "input", 
    message: "What does the user need to know about using the repo?",
    name: "repo"
  },
  {
    type: "input", 
    message: "What does the user need to know about contributing to the repo?",
    name: "repo"
  },
])



  
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios
  .get(queryUrl)
  .then(resp=>  {
console.log (resp)
  })
  })