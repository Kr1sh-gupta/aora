import {ID, Account , Client } from 'react-native-appwrite';

export const config = {
  endpoint: "",
  platform: "",
  projectId: "",
  databaseId: "",
  userCollectionId: "",
  videoCollectionId: "",
  storageId: "",
};

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.


const account = new Account(client);

export const createUser =() =>{
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}

