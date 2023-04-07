# React PortFolio 
## Nice and Clean Responsive Dark Theme Portfolio Website with React!

<img width="1167" alt="Screenshot 2023-04-06 at 7 27 55 PM" src="https://user-images.githubusercontent.com/115193125/230516875-a24ceb1f-5bc4-4024-bf98-62e6ffe7c60a.png">

## Demo Page
http://localhost:3000/ccline29/React_My_Portfolio

## Contents
* Greeting and Summary
* Skills
* Experience
* Projects
* Contact Me

## Getting Started
You have to install Node.js and Git for use.

## How To Use
1. Clone this repository.  
```
git clone https://github.com/ccline29/React_My_Portfolio.git
```
2. Fill `portfolio.tsx` with your story!
3. If you want to test your website, open terminal and follow below.
```
# project root directory
npm i
npm start
```
Yarn also possible!
Then, new brower window will pop up with localhost:3000

4. You NEED token, github personal access token, public use
  * goto https://github.com/settings/tokens
  * Click 'Personal access token'
  * Click 'Generate new token' and confirm password
  * Write token name in note
  * __IMPORTANT! DO NOT CHECK IN SELECT SCOPE!!__
  ![token](https://user-images.githubusercontent.com/16658067/94020991-79755d80-fdee-11ea-9ba0-80fb76652d94.PNG)
  * Click Generate token
  * Copy token - If you lose token, click regenerate token
  
5. Create .env.local file in project root directory and write following 1-line code
```
--public
--src
--.env.local  // Create!
--.gitignore
--tsconfig.json
--package.json
...

# .env.local

REACT_APP_GITHUB_TOKEN = /your token/
```

6. Open .gitignore and check .env.local is contained  

7. Change favicon, apple-touch-icon and other images.

8. Change `public/index.html` meta tags!

9. Modify Codes if you want!

## Deploy
* Install gh-pages module 
* `npm i -D gh-pages`
* Modify `package.json` homepage to your github page  

Example: `homepage: https://[username].github.io/ReactFolio` 

* open terminal and following instruction  

`npm run deploy`

## Used Technologies
* CSS3
* TypeScript
* React
* Github GraphQL API
* Apollo-Boost
* react-easy-emoji
* react-reveal  


## Contributes

You can just change `src/portfolio.tsx` to get your portfolio website. Also you can modify component codes if you want!

## Reference
[Github Token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token)  

[Github GraphQL API](https://docs.github.com/en/graphql)  
 
[React Easy Emoji](https://www.npmjs.com/package/react-easy-emoji)  

[gh-pages](https://www.npmjs.com/package/gh-pages)

## Contact Me
