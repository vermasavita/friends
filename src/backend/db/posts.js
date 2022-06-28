import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: `In India, everyone is a self taught developer. Fact. Not kidding. The education part of college failed all of us.`,
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
    content: `Sometimes, all the therapy you need is talking to friends.`,
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
    content: `“Usually a good time to invest is when most people are scared of investing.`,
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
    content: `Student: Does patience play an important role here?
	Teacher: Where does it not play, my friend?`,
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
    content: `We want everything
	And that is a disaster
	Because, we are never going to get everything.
	And worse, the one thing that we truly want, will remain under-served.`,
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
    content: `Describe your relationship with JavaScript with one word.`,
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
    content: `“"There are no get rich quick schemes. That’s just someone else getting rich off you." - @naval`,
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
    content: `The Golden State is cooking its golden geese. -@melonmusk`,
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
    content: `Not to mention potential bugs in the code. Open source is the way to go to solve both trust and efficacy.`,
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
    content: `The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela`,
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
    content: `“Do not pity the dead, Harry. Pity the living, and, above all those who live without love.” - Albus Dumbledore`,
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
    content: `"The larger the herd, the lower the returns." - @naval`,
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
    content:
      "Your social media following doesn’t matter when you can’t deliver the quality of work you promised to your customers or clients.",
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
    content: "Today is my best day, how's yours?",
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
    content:
      "I'll rather have pain of discipline than pain of regret. Getting there💪 and anyone reading this believe in yourself and you'll get there eventually.",
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
    content: "Lorem ipsum dolor sit amet.",
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
    content: "I am very good at writing code, React JS ♥",
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
    content: "Today is the best day of my life, i got my first job.",
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
