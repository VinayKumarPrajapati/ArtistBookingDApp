
# ArtistBooking Dapp

Let's Rewind the Centralization 

Artist Booking Decentralized application will help artist to get listed and user can book them using crypto currency.

# Project Description 
* Backend APIs with help of [Node.js](https://nodejs.org/en/) & [Express](https://expressjs.com/)
* Protecting routes End Points from un-authorized access using [JWT](https://jwt.io/)
* Interation with Cloud Database using [Mongo DB](https://www.mongodb.com/cloud/atlas)
* Created Models using Mongoose [Mongoose](https://mongoosejs.com/)
* Created UI Using React [React](https://reactjs.org/)
* Redux used for state management [Redux](https://redux.js.org/)

## Few of the feature it should support after completion of the Project
* Artist can Register himself/herself
* Artist can Login 
* Artist can Create unique Profile Id
* Artist can view edit it's profile
* Artist can add training details 
* Artist can add previous attended events/performace
* Artist can Create Event list the details for the same
* Artist can mint & publish NFTs
* Artist can buy or sell NFTs




## API Reference

#### Get auth

```http
  GET api/auth
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/user/${userId}
```

| Route     | Access   | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Public` | **Required**. Id of user to fetch |

#### Get Profile

```http
  GET /api/profile
```

| Route     | Access   | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `Private`|**Required** Auth profile to fetch |




## Quick Start Artist Booking Dapp 🧑‍🎨🎨

## Run Locally

Change a default.json file in config folder with the following

```javascript
{
  "mongoURI": "Crediential from mongodb atlas",
  "jwtSecret": "artistdapp",
  "githubToken": "secret token from github"
}
```


Clone the project

```bash
  git clone https://github.com/Vinayk76/ArtistBookingDecentralized.git
```

Go to the project directory

```bash
  cd artist-booking
```

Install dependencies

```bash
  npm install
```

Install front end dependencies

```bash
  cd front-end
  npm install
```

Start the server

```bash
  npm run dev
```

Build for production

```bash
  cd front-end
  npm run build
```

# Test production

After running a build front end. Go to front-end founder and run 

```bash
$env:NODE_ENV="production"
node server.js
```

Check in browser on http://localhost:3000/


## Programming language and tools used to create DApp 

 - [React](https://reactjs.org/)
 - [Node.js](https://nodejs.org/)
 - [Express.js](https://expressjs.com/)
 - [MongoDB Cloud](https://www.mongodb.com/atlas/database)
 


## Documentation

[Documentation](https://linktodocumentation)


## Running Tests

To run tests, run the following command

```bash
  npm run test
```




## Tech Stack

**Client:** React, Redux

**Server:** Node, Express


## Support

For support, email vinay91098@gmail.com


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Roadmap

- Additional browser support

- Add more integrations


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?


## Features

- Cross platform


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NODE_ENV`

`mongoURI`

`githubToken`

`jwtSecret`


 


## Deployment

To deploy this project run

```bash
  npm run deploy
```



# Hi, I'm Vinay! 👋


## 🛠 Skills
Java, Spring, JavaScript, React, Node.js, AWS


## 🚀 About Me
I'm a full stack developer...


## Feedback

If you have any feedback, please reach out to me at vinay91098@gmail.com


## Authors

- [@VinayKumarPrajapati](https://github.com/VinayKumarPrajapati)

