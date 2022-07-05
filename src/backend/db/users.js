import { formatDate } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Savita",
    lastName: "Verma",
    username: "savitaverma",
    password: "savitaverma123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968346/friends/savita.jpg",
    bio: "Work in Progress",
    website: "https://twitter.com/",
  },
  /****************************************************************/
  {
    _id: uuid(),
    firstName: "Paul",
    lastName: "Graham",
    username: "paulg",
    password: "swiggycares123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968050/friends/paulimage.jpg",
    bio: "I am Paul",
    website: "I am not Paul",
  },
  /****************************************************************/
  {
    _id: uuid(),
    firstName: "Veronica",
    lastName: "Humble",
    username: "veronica_humble",
    password: "paytmcare123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968161/friends/veronica.jpg",
    bio: "I am Veronica",
    website: "",
  },
  /****************************************************************/
  {
    _id: uuid(),
    firstName: "Agustin",
    lastName: "Lebron",
    username: "AgustinLebron4",
    password: "amazonIN123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968234/friends/agustin.jpg",
    bio: "I am Agustin Lebron",
    website: "",
  },

  /****************************************************************/ {
    _id: uuid(),
    firstName: "Emanuel",
    lastName: "",
    username: "Emanuel",
    password: "snapdeal123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968230/friends/emanuel.jpg",
    bio: "For any order related queries, please tweet",
    website: "",
  },
  /****************************************************************/ {
    _id: uuid(),
    firstName: "Domink",
    lastName: "",
    username: "Domink",
    password: "flipkart123",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dus3r5adq/image/upload/v1656968298/friends/domink.jpg",
    bio: "India's favourite destination!",
    website: "",
  },
];
