import phones from "./phones.png";
//importing dashboard assets down here 👇
import chats from "./chats.png";
import feed from "./feed.png";
import home from "./home.png";
import post from "./post.png";
import settings from "./settings.png";
import avatar from "./avatar.png";

//---END OF DASHBOARD ASSETS
export const main = [{ img: avatar }];

export const imgs_assets = [
  {
    phones,
  },
];

//  chats,
//     feed,
//     home,
//     post,
//     settings,
export const side_bar = [
  {
    text: "Home",
    _id: 0,
    img: home,
  },
  {
    text: "Chats",
    _id: 1,
    img: chats,
  },
  {
    text: "Feed",
    _id: 2,
    img: feed,
  },
  {
    text: "post",
    _id: 3,
    img: post,
  },
  {
    text: "Settings",
    _id: 4,
    img: settings,
  },
  {
    text: "post",
    _id: 5,
    img: post,
  },
];
