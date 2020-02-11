/*---------- STRINGS ----------*/
export const SLASH = "/";
export const ABOUT = "about";
export const CONTACT = "contact";
export const RESULT = "result";
export const LOGIN = "login";
export const REGISTER = "register";
export const SEARCH = "search";
export const DETAILS = "details";
export const ACCOUNT = "account";

/*---------- PATHS ----------*/
export const PATH_LOGIN = SLASH + LOGIN;
export const PATH_REGISTER = SLASH + REGISTER;
export const PATH_ACCOUNT = SLASH + ACCOUNT;

export const PATH_HOME = SLASH;
export const PATH_RESULT = SLASH + RESULT;
export const PATH_SEARCH = SLASH + SEARCH;
export const PATH_DETAILS = SLASH + DETAILS;

export const PATH_ABOUT = SLASH + ABOUT;
export const PATH_CONTACT = SLASH + CONTACT;

/*---------- API ----------*/
const API_LINK_BASIC = "https://api.themoviedb.org/3";
export const API_LINK_SEARCH_MOVIE = API_LINK_BASIC + "/search/movie";
export const API_LINK_POPULAR_MOVIE = API_LINK_BASIC + "/movie/popular";
export const API_LINK_DETAILS_MOVIE = API_LINK_BASIC + "/movie" + SLASH;
export const LANG_EN_US = "en-US";
export const API_LINK_IMAGE = "http://image.tmdb.org/t/p/w500";

/*---------- STORAGE KEY ----------*/
export const SEARCHED_MOVIE_DATA = "searchedMovieData";
export const CHOSEN_MOVIE = "chosenMovieId";

/*---------- DATABASE PATHS ----------*/
const USERS = "users";
const FAVOURITES = "favourites";
export const USERS_PATH = SLASH + USERS;
export const FAVOURITES_PATH = SLASH + FAVOURITES;
export const VALUE = "value";
