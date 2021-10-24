# Crypto Exchange pricing

This app uses a React front-end and a Node (Express) back-end, and compares buy & sell prices for Bitcoin and Ethereum across
the Kraken and Coinbase exchanges.

You can visit the Heroku-hosted version of this app at: https://crypto-pricing.herokuapp.com/

## Structure

- `client` contains the code for the React front-end.
- `server` contains the code for the Node/Express server.

## Pre-reqs

### Node

On Windows using npm:

```
npm install node
```

On Mac using homebrew:
```
brew install node
```

### Yarn

On Windows using npm:

```
npm install yarn
```

On Mac using homebrew:
```
brew install yarn
```

## Project Setup

### Cloning from github

```
git clone https://github.com/boristopalov/crypto-prices/
```

After cloning, you should create a .env file in the root of the project and create a `HOST` and a `PORT` variable.

for example:
```
HOST=http://localhost
PORT=5000
```

### Commands you can run 

To start the Node server (this will serve the bundled static files used in production). The server will run on the port specified in the .env file you created above
```
yarn start
```

Next, you should open a new terminal and run the following command to run the React app locally

```
yarn client
```

After running these two commands you should now have the server running on the port you specified in the .env file you created in the step above and load 
the app in your browser at http://localhost:3000.


To bundle the React app into static files for production:
```
yarn build
```


## Questionaire

### 1. Are there any sub-optimal choices( or short cuts taken due to limited time ) in your implementation?

I used create-react-app for this project which is quick and convenient. Ideally I would set up a lighter React environment. I also would have liked to have some error handling in the case that the Kraken or Coinbase APIs go down or stop working. At the moment there is not a good way to tell if this happens. Also, the prices only update on clicks, I think a useful change would be to periodically update them (etc every 30 seconds) in addition to when they are clicked.

### 2. Is any part of it over-designed? ( It is fine to over-design to showcase your skills as long as you are clear about it)

I made this app simple given the time constraints and tried to not over-engineer. I really value design and the look and feel of an app, but I also like things that just work and don't have many unnecessary elements.

### 3. If you have to scale your solution to 100 users/second traffic what changes would you make, if any?

There are a few changes I would make that I think would help:
  1. Load balancing by running multiple Node processes concurrently since JavaScript is single threaded. This can be done with the `cluster` module and is relatively straightfoward to implement, but it adds to the complexity of the app.
  2. Use more dynos (since we are using Heroku in this app).
  3. Use a CDN like Cloudflare to server static content.
### 4. What are some other enhancements you would have made, if you had more time to do this implementation

The biggest UX improvement to this app, in my opinion, would be to allow a user to connect their exchange account(s), so that they can directly purchase crypto from our app. The user could set up rules for when to buy, when to sell, etc. I thought about adding links to the different exchanges but I don't think that would have been very helpful. Having built-in trade functionality, on the other hand, would be very helpful.
