
# 🐒 MonkeyShare

Hey Folks! MonkeyShare is a Decentralised Web-application [Dapp] 💰 built with **Reef Chain** where you can store your files, without paying money. You only have to pay for the Gas Fees & that too once. After that you have the privilege to store as much files as you want.


## Features
|Property      |Use case         | Reliability  |
| ------------- |:-------------:| -----:|
| Connect Wallet| No need to login 🗝️ | ⭐⭐⭐ |
| Unlimited File storage  | Free of cost 🆓    |    ⭐⭐⭐ |
| Security | Built on blockchain 🤙    |    ⭐⭐⭐ |
| Transaction Speed | Fastest (As REEF is used) |    ⭐⭐⭐ |
| Efficient | Saves your precious time⌛ |    ⭐⭐⭐ |

## Screenshots
- Connect Wallet 📮
![alt text](https://raw.githubusercontent.com/anukulpandey/MonkeyShare-reef/main/img/auth.png "auth")

- Landing Page 🛫
![alt text](https://raw.githubusercontent.com/anukulpandey/MonkeyShare-reef/main/img/landing.png "landing page")

- Loading Page 📂
![alt text](https://raw.githubusercontent.com/anukulpandey/MonkeyShare-reef/main/img/loading.png "loading page")

- Upload Files 🌍
![alt text](https://raw.githubusercontent.com/anukulpandey/MonkeyShare-reef/main/img/upload.png "upload page")

## Run Locally

Run these commands

```bash
    git clone https://github.com/anukulpandey/MonkeyShare-reef monkeyshare
    cd monkeyshare
    yarn install
    yarn serve
```
After running these commands , open a new terminal & run the following commands

```bash
    cd ipfssetup
    npm install
    node app.js
```
When you run these commands you will encounter an error. So make an (dot)env file [.env] in the ipfssetup folder.
```javascript
MONGO_URL = 'ENTER_YOUR_TOKEN'
TOKEN ="ENTER_YOUR_TOKEN"
```
Enter your tokens here & you are good to go.
Get your MONGO_URL by making a new project in mongodb atlas
and for another token visit web3.storage & claim your free token from there.

## Environment Variables

Mentioning again! To run this project you need to set the Environment variables in the .env file inside ipfssetup folder
`MONGO_URL`
`TOKEN`

## Tech Stack

**Client:** Bootstrap, ejs 

**Server:** Node, Express, ethers.js, Reef Chain


## Requirements

At the moment, to interact with the application, you would need to use [polkadot.js](https://polkadot.js.org/extension/) extension in a desktop device. 
You can see [here](https://www.youtube.com/watch?v=FdWmdGZfXw4) how to set up your Reef account.

Make sure to use the Reef Extension else you will get some ugly errors in dev mode.

## Future developments

These are some of the features planned for future developments:
- Mobile support.
- NFT collections
- File Sharing Platform
- Better Interface

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
