import React from "react";
import {useForm} from "react-hook-form";
import {SessionStorageSaveItem} from "../../../main/controller/StorageController";
import {PATH_RESULT, SEARCHED_MOVIE_DATA} from "../../../constants";
import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";
import "../../../index.css";
import GlobalStyles from "../../../main/GlobalStyles";

export const SearchPage = (props) => {

  /*----------------------- VARIABLE REGION -----------------------*/
  const {register, handleSubmit} = useForm();
  const globalStyles = GlobalStyles();

  const onSubmit = (data) => {
    SessionStorageSaveItem(SEARCHED_MOVIE_DATA, data);
    document.location.replace(PATH_RESULT);
  };

  /*------------------------ RETURN REGION ------------------------*/
  return (
    <div className="container custom-container-sm custom-margin-top-4">

      <div className="row justify-content-center mb-2">
        <Avatar className={globalStyles.materialBlueBackground}>
          <SearchIcon/>
        </Avatar>
      </div>

      <div className="row justify-content-center mb-2">
        <Typography component="h1" variant="h5">
          Search Movie
        </Typography>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          type="text"
          inputRef={register({required: true})}
          name="title"
          label="Movie Title"
          variant="outlined"
          margin="normal"
          fullWidth
          autoFocus
        />

        <TextField
          type="number"
          inputRef={register({min: 1900, max: new Date().getFullYear(), maxLength: 4})}
          name="year"
          label="Release year"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" className="mt-4" variant="contained" color="primary" fullWidth>
          Search
        </Button>

      </form>
    </div>
  );
};

SearchPage.propTypes = {};

export default SearchPage;
    