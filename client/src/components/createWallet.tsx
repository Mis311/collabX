import { createKintoSDK } from 'kinto-web-sdk';

const appAddress = 'your-app-address';
const kintoSDK = createKintoSDK(appAddress);

kintoSDK.createNewWallet()
  .then(() => {
    console.log('New wallet created successfully');
  })
  .catch((error) => {
    console.error('Failed to create new wallet:', error);
  });

kintoSDK.connect()
  .then((accountInfo) => {
    console.log('Connected account info:', accountInfo);
  })
  .catch((error) => {
    console.error('Failed to connect:', error);
  });