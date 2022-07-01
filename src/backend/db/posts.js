import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    name: "Swiggy Cares",
    content: `Hope the callback was helpful, we will work on making your ordering experiences more pleasant going forward.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SwiggyCares",
    bookmark: [],
    createdAt: new Date("Feb 23 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: `Hi, helping you out is our priority. Please follow us back so that further information can be shared with you via DM.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("March 13 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Guest User",
    content: `Usually a good time to invest is when most people are scared of investing.`,
    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [],
    },
    username: "guestuser",
    bookmark: [],
    createdAt: new Date("May 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Snapdeal",
    content: `Make your home the better version of itself with Snapdeal's #HomeAndKitchenMela 🥰 `,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Snapdeal",
    bookmark: [],
    createdAt: new Date("April 18 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Amazon India",
    content: `Maintain a perfect work-life balance by playing your favourite music with the Amazon Prime Membership.
    Join Prime Now -  https://amazon.in/amazonprime and listen to more than 90 million songs Ad-Free!`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amazonIN",
    bookmark: [],
    createdAt: new Date("Jan 01 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: `Describe your relationship with Paytm with one word.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("Dec 15 2020 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Guest User",
    content: `"If they wrote it to make money, don't read it." - @naval`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "guestuser",
    bookmark: [],
    createdAt: new Date("May 12 2022 10:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Flipkart",
    content: `It’s TUESDAY!! Guess that’s a good enough reason to order the things on your wishlist! :P`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "flipkart",
    bookmark: [],
    createdAt: new Date("Feb 28 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/
  {
    _id: uuid(),
    name: "Swiggy Cares",
    content: `The journey of a thousand miles begins with one step. -Lao Tzu`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SwiggyCares",
    bookmark: [],
    createdAt: new Date("October 09 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Flipkart",
    content: `not all superheros wear capes, some give their detailed reviews on products with pictures.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "flipkart",
    bookmark: [],
    createdAt: new Date("November 14 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: `Aaj kahana nai milega. Katti`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("February 16 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Amazon India",
    content: `Celebrate equality this Pride Day with Amazon Pay Gift Cards.
    https://amzn.to/3A2ViKI`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amazonIN",
    bookmark: [],
    createdAt: new Date("April 05 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: `Receive money directly in your Bank A/c from anyone, anywhere using #PaytmSeUPI 📲`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("April 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: `Use Paytm se UPI. Scan any QR and make payments directly from your Bank A/c 📲`,
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },

    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("March 26 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Snapdeal",
    content:
      "What’s better than monsoon essentials that match your style? Nothing! Head to #Snapdeal and shop now 😍",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Snapdeal",
    bookmark: [],
    createdAt: new Date("April 03 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Swiggy Cares",
    content: "Today is my best day, order food from zomato?",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "SwiggyCares",
    bookmark: [],
    createdAt: new Date("August 02 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Guest User",
    content: `Nothing can beat the joy of seeing live users on your website.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "guestuser",
    bookmark: [],
    createdAt: new Date("July 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatar:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    comments: [
      {
        _id: uuid(),
        username: "SwiggyCares",
        text: "Live users are awesome",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "paytmcare",
        text: "yes you are right!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: "Just read Kurt Vonnegaut's Slaughter House 5 and it's amazing!",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("July 13 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paytm Care",
    content: "Do UPI payment. Make us rich.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paytmcare",
    bookmark: [],
    createdAt: new Date("August 05 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Flipkart",
    content: "We sometime flip",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "flipkart",
    bookmark: [],
    createdAt: new Date("October 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Snapdeal",
    content: "I am very good at selling no product, React JS ♥",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Snapdeal",
    bookmark: [],
    createdAt: new Date("March 27 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Amazon India",
    content: "Today is the best day of our life, we are selling amazon",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "amazonIN",
    bookmark: [],
    createdAt: new Date("March 16 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
];
