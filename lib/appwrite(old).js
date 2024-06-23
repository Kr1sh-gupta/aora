import {ID, Account , Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.jsm.eremlin', 
    projectId: '667670fe002f0d446bb2',
    databaseId: '6676730f00166e1c50c5',
    userCollectionId: '6676736e002ee8a743cb',
    videoCollectionId: '667673e2000a0054a37d',
    storageId: '66767802002a900862b8'
}

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

