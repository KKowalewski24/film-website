import config from "../../config";
import {FAVOURITES_PATH, SLASH, USERS_PATH, VALUE} from "../../constants";

export const keyValueObjectToArray = (object) => {
  if (object) {
    return Object.entries(object).map(([key, value]) => (value));
  } else {
    return [];
  }
};

/*----------------------- DATABASE FUNCTIONS -----------------------*/
export const setDataToDatabase = (path, childPath, data) => {
  const reference = config.database().ref(path).child(childPath);

  reference.once(VALUE, (it) => {
    if (it.val() === null) {
      if (config.auth().currentUser) {
        reference
          .set(data)
          .catch((err) => alert(err));
      }
    }
  });
};

export const updateDataToDatabase = (path, childPath, data) => {
  const reference = config.database().ref(path).child(childPath);

  reference.once(VALUE, (it) => {
    if (it.val() === null) {
      if (config.auth().currentUser) {
        reference
          .update(data)
          .catch((err) => alert(err))
      }
    } else {
      alert("Item is already exists in database");
    }
  });
};

export const deleteDataFromDatabase = (path, childPath) => {
  const reference = config.database().ref(path).child(childPath);

  reference.once(VALUE, (it) => {
    if (it.val() !== null) {
      if (config.auth().currentUser) {
        reference
          .remove()
          .catch((err) => alert(err))
      }
    } else {
      alert("Item does not exists in database");
    }
  });
};

export const readDataFromDatabase = (path, eventType, setDataFunction,
                                     setIsLoaded, setIsError, isSnapshotValue) => {
  if (config.auth().currentUser) {
    config.database()
      .ref(path)
      .on(eventType, (res) => {
        isSnapshotValue ? setDataFunction(res.val()) : setDataFunction(res);
        setIsLoaded(true);
        setIsError(false);
      }, () => {
        setIsLoaded(true);
        setIsError(true);
      });
  }
};

/*----------------------- AUTH FUNCTIONS -----------------------*/
export const registerUser = (firstName, lastName, email, password) => {
  const nameData = {
    firstName: firstName,
    lastName: lastName,
  };

  config.auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      config.auth().currentUser.sendEmailVerification().catch((err) => alert(err));
      setDataToDatabase(USERS_PATH + SLASH + config.auth().currentUser.uid, SLASH, nameData);
    })
    .catch((err) => alert(err));
};

export const loginUser = (email, password) => {
  config.auth()
    .signInWithEmailAndPassword(email, password)
    .catch((err) => alert(err));
};

export const logoutUser = () => {
  config.auth()
    .signOut()
    .catch((err) => alert(err));
};

/*----------------------- ACCOUNT FUNCTIONS -----------------------*/
export const addFavouriteMovie = (data) => {
  const path = USERS_PATH + SLASH + config.auth().currentUser.uid + FAVOURITES_PATH;
  updateDataToDatabase(path, data.id, data);
};

export const removeFavouriteMovie = (data) => {
  const path = USERS_PATH + SLASH + config.auth().currentUser.uid + FAVOURITES_PATH;
  deleteDataFromDatabase(path, data.id);
};
