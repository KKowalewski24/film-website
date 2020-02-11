# [Film website]()

### Project Description
React film website based on functional components with React Hooks. 
Project consumes The Movie Database (TMDb) API. Provides possibility to display the most popular 
movies and checking it's details. What is more users have opportunity to create their own account 
and to add movies to favourites. All user data are being stored on Google server so they are 
safe thanks to firebase facilities.

### Used Dependencies
* react-dom
* react-router-dom
* react-hook-form
* firebase-authentication
* firebase-realtime-database
* axios
* prop-types
* bootstrap
* mdbreact
* Material UI
* react-infinite-scroll-component

### Issues and Solutions
* The Movie Database (TMDb) API does not provide method to get list of movies by internal ID 
so the only efficient way to store favourites movies was to store them in own database instead of
making get request in loop based on movies ID. Making request in loop would easily use the limit
of request per day for free plan. There is one disadvantage because movies in list of favourites of 
chosen user are not automatically updated so all new updates are not included in this list.

### Firebase Rules
```
{
  "rules": {
    "users": {
      "$uid": {
          ".read": "auth != null && auth.uid == $uid",
          ".write": "auth != null && auth.uid == $uid"
      }
    }
  }
}
```

## Available Scripts

### `yarn start` 
Runs the app in the development mode.<br />

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
The build is minified and the filenames include the hashes.<br />
