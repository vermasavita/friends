import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1451",
    firstName: "Guest",
    lastName: "User",
    username: "guestuser",
    password: "guestuser123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "Amazon",
        lastName: "India",
        username: "amazonIN",
        avatar:
          "https://pbs.twimg.com/profile_images/1369544638021857281/PtmH2Qj__400x400.jpg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Swiggy",
        lastName: "Cares",
        username: "SwiggyCares",
        avatar:
          "https://pbs.twimg.com/profile_images/1176803431396151296/_VRXuYc4_400x400.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "Amazon",
        lastName: "India",
        username: "amazonIN",
        avatar:
          "https://pbs.twimg.com/profile_images/1369544638021857281/PtmH2Qj__400x400.jpg",
      },
    ],
    bookmarks: [],
    bio: "I am Guest User",
    website: "https://twitter.com/",
  },
  /****************************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
    firstName: "Swiggy",
    lastName: "Cares",
    username: "SwiggyCares",
    password: "swiggycares123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/1176803431396151296/_VRXuYc4_400x400.jpg",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1451",
        firstName: "Guest",
        lastName: "User",
        username: "guestuser",
        avatarURL:
          "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Paytm",
        lastName: "Care",
        username: "paytmcare",
        avatar:
          "https://pbs.twimg.com/profile_images/487960166445223938/6gD-vpHX_400x400.jpeg",
      },
    ],
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Paytm",
        lastName: "Care",
        username: "paytmcare",
        avatar:
          "https://pbs.twimg.com/profile_images/487960166445223938/6gD-vpHX_400x400.jpeg",
      },
    ],
    bookmarks: [],
    bio: "Download the Swiggy App http://Swiggy.com/App",
    website: "https://www.swiggy.com/restaurants",
  },
  /****************************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
    firstName: "Paytm",
    lastName: "Care",
    username: "paytmcare",
    password: "paytmcare123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/487960166445223938/6gD-vpHX_400x400.jpeg",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "Amazon",
        lastName: "India",
        username: "amazonIN",
        avatar:
          "https://pbs.twimg.com/profile_images/1369544638021857281/PtmH2Qj__400x400.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1452",
        firstName: "Swiggy",
        lastName: "Cares",
        username: "SwiggyCares",
        avatar:
          "https://pbs.twimg.com/profile_images/1176803431396151296/_VRXuYc4_400x400.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
        firstName: "Flipkart",
        lastName: "",
        username: "flipkart",
        avatar:
          "https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg",
      },
    ],
    bookmarks: [],
    bio: "We are here 24x7!",
    website: "https://paytm.com/",
  },
  /****************************************************************/
  {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
    firstName: "Amazon",
    lastName: "India",
    username: "amazonIN",
    password: "amazonIN123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/1369544638021857281/PtmH2Qj__400x400.jpg",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Snapdeal",
        lastName: "",
        username: "Snapdeal",
        avatar:
          "https://pbs.twimg.com/profile_images/774270055555137538/MHkmX_fU_400x400.jpg",
      },
    ],
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1451",
        firstName: "Guest",
        lastName: "User",
        username: "guestuser",
        avatarURL:
          "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
        firstName: "Snapdeal",
        lastName: "",
        username: "Snapdeal",
        avatar:
          "https://pbs.twimg.com/profile_images/774270055555137538/MHkmX_fU_400x400.jpg",
      },
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Paytm",
        lastName: "Care",
        username: "paytmcare",
        avatar:
          "https://pbs.twimg.com/profile_images/487960166445223938/6gD-vpHX_400x400.jpeg",
      },
    ],
    bookmarks: [],
    bio: "The official Twitter profile of http://Amazon.in",
    website: "https://www.amazon.in/",
  },

  /****************************************************************/ {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1455",
    firstName: "Snapdeal",
    lastName: "",
    username: "Snapdeal",
    password: "snapdeal123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/774270055555137538/MHkmX_fU_400x400.jpg",
    following: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1454",
        firstName: "Amazon",
        lastName: "India",
        username: "amazonIN",
        avatar:
          "https://pbs.twimg.com/profile_images/1369544638021857281/PtmH2Qj__400x400.jpg",
      },
    ],
    followers: [],
    bookmarks: [],
    bio: "For any order related queries, please twee",
    website: "https://www.snapdeal.com/",
  },
  /****************************************************************/ {
    _id: "1b288c33-ff6d-49c0-a8d3-58b297f1456",
    firstName: "Flipkart",
    lastName: "",
    username: "flipkart",
    password: "flipkart123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      "https://pbs.twimg.com/profile_images/1267713887165485061/WUR4QXtd_400x400.jpg",
    followers: [
      {
        _id: "1b288c33-ff6d-49c0-a8d3-58b297f1453",
        firstName: "Paytm",
        lastName: "Care",
        username: "paytmcare",
        avatar:
          "https://pbs.twimg.com/profile_images/487960166445223938/6gD-vpHX_400x400.jpeg",
      },
    ],
    following: [],
    bookmarks: [],
    bio: "India's favourite online shopping destination!",
    website: "https://www.flipkart.com/",
  },
];
