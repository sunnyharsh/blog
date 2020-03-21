import Home from "../Component/Home";
import NotFound from "../Component/NotFound";
import Contacts from "../Component/Contacts";
import Content from "../Component/Content";
import About from "../Component/About";
const publicRouting = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/contact",
    component: Contacts,
    exact: true
  },
  {
    path: "/content",
    component: Content,
    exact: true
  },
  {
    path: "/about",
    component: About,
    exact: true
  },
  {
    path: "*/",
    component: NotFound
  }
];

export default publicRouting;
