import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    name: "Paul Graham",
    content: `One upside of watching year 5 C-team cricket is that you see things you'd never see otherwise. Like a batsman missing the ball on his first try, doing a 360 as a result, and then hitting the ball. Ignore`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paulg",
    bookmark: [],
    createdAt: new Date("Feb 23 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `Yesterday is history,
    tomorrow is a mystery,
    and today is a gift...
    that's why they call it present`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("March 13 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Savita Verma",
    content: `There are no coincidences in this world.`,
    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [],
    },
    username: "savitaverma",
    bookmark: [],
    createdAt: new Date("May 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },

  /****************************************************************/

  {
    _id: uuid(),
    name: "Emanuel",
    content: `In “Bad Day At Black Rock” which I’d never seen before Spencer Tracy is the original Macgyver `,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Emanuel",
    bookmark: [],
    createdAt: new Date("April 18 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Agustin Lebron",
    content: `Kinda relieved that DeFi hadn’t “figured out undercollateralized lending” for this cycle`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AgustinLebron4",
    bookmark: [],
    createdAt: new Date("Jan 01 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `Describe your relationships in one word.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("Dec 15 2020 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Savita Verma",
    content: `If they wrote it to make money, don't read it." - @naval`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "savitaverma",
    bookmark: [],
    createdAt: new Date("May 12 2022 10:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Domink",
    content: `It’s TUESDAY!! Guess that’s a good enough reason to order the things on your wishlist! :P`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("Feb 28 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/
  {
    _id: uuid(),
    name: "Paul Graham",
    content: `Just relax`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paulg",
    bookmark: [],
    createdAt: new Date("October 09 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Domink",
    content: `not all superheros wear capes, some give their detailed reviews on products with pictures.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("November 14 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `Aaj kahana nai milega. Katti`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("February 16 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Agustin Lebron",
    content: `I have gotten *really* good at memorizing 6 digit numbers for a duration of 5 seconds.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AgustinLebron4",
    bookmark: [],
    createdAt: new Date("April 05 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `If you only do what you can do, you will never be more than who you are.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("April 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `There is no secret ingredient`,
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },

    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("March 26 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Emanuel",
    content:
      "What's your name?",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Emanuel",
    bookmark: [],
    createdAt: new Date("April 03 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paul Graham",
    content:
      "The non-conformism of Americans was arguably an advantage relative to European countries a few decades ago. But now that every country has become more polarized and fragmented, European countries may be better off.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paulg",
    bookmark: [],
    createdAt: new Date("August 02 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Savita Verma",
    content: `If you only do what you can do, you will never be more than you are now.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "savitaverma",
    bookmark: [],
    createdAt: new Date("July 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatar:
      "https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    comments: [
      {
        _id: uuid(),
        username: "paulg",
        firstName: "Paul",
        lastName: "Graham",
        avatar:
          "https://pbs.twimg.com/profile_images/1824002576/pg-railsconf_400x400.jpg",
        text: "Live users are awesome",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "veronica_humble",
        firstName: "Veronica",
        lastName: "Humble",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Z2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
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
    name: "Veronica Humble",
    content: "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("July 13 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: "Do your work.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("August 05 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Domink",
    content: "I sometime flip",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("October 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Emanuel",
    content: "I am very good at selling no product.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Emanuel",
    bookmark: [],
    createdAt: new Date("March 27 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Agustin Lebron",
    content: "Today is the best day of our life, we are selling amazon",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AgustinLebron4",
    bookmark: [],
    createdAt: new Date("March 16 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
];
