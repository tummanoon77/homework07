
const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");


//const createATag =(url, img) =>{
//  return `<a href =${url}>${img}</a>`
//};

inquirer
  .prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
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
      "GPL",
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
    type: "checkbox", 
    message: "What is List your collaborators?",
    name: "collab",
    choices: [
      "Gary",
      "Dan",
      "Erik"
  ]
  },
  {
    type: "input", 
    message: "What does the user need to know about using the repo?",
    name: "use"
  },
  {
    type: "input", 
    message: "What does the user need to know about contributing to the repo?",
    name: "repo"
  },
]).then (function generateMarkdown(data){
let md =`

# ${data.username}
My email address:  ${data.email}
My GITHUB URL : ${data.url}

![](https://img.shields.io/github/followers/tummanoon77?style=social)

<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script>
## Description
${data.write}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)

## Installation
${data.inStall}

## Usage 
${data.use}
## Credits
${data.collab}
## License
${data.badge}
## Contributing
${data.repo}
## Tests
${data.test}

<div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="tummanoon-sripechpong-b47266a"><a class="LI-simple-link" href='https://www.linkedin.com/in/tummanoon-sripechpong-b47266a?trk=profile-badge'>tummanoon sripechpong</a></div>

`



/*.then(response =>{

  const gitHubUrl = `https://github.com/${response.username}`;
  let readMe = ``;

  // add header
  const  header = createTag("h1", `${response.username}+"\n"`);
  readMe += header;

  //add email address
  const email = createTag("h3", `${response.email}`)
  readMe += email;

// add badge source
 /* const mit =` https://img.shields.io/apm/l/nuk`
  const apache2 = `https://img.shields.io/hexpm/l/nuk`
  const gpl =`https://img.shields.io/eclipse-marketplace/l/license_GPL`
  const bsd3 =`https://img.shields.io/pypi/l/bsd`
  
  
  const mitBadge = createATag(mit,"MIT License");
  const apache2Badge =createATag(apache2, "APACHE2 License");
  const gplBadge = createATag(gpl,"GPL License");
  const bsd3Badge = createATag(bsd3,"BSD3 License");

  let badge = data.badge;
   if( data = "MIT" => {
     return mit 
   };

  if (badge =MIT.badge => mitBadge){
      console.log("Party on ,dude!")
  }
})
*/

 fs.writeFile("readme.md", md, err => {
    if(err){
      return console.log(err)
    }

    console.log("Success!")
  })
})
