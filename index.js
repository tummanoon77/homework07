
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
      }, 
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
      {
        type: "input",
        message: "What is your URL?",
        name: "URL"
      }, 
    {
    type: "input", 
    message: "Enter your GitHub username",
    name: "username"
  }])
  
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;
    axios
  .get(queryUrl)
  .then(resp=>  {
console.log (resp)
  })
  })