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
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg",
    bio: "I am Paul",
    website: "https://www.swiggy.com/restaurants",
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
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Ym95fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1596392927852-2a18c336fb78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
      "https://images.unsplash.com/photo-1482849737880-498de71dda8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJveXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    bio: "India's favourite destination!",
    website: "",
  },
];
