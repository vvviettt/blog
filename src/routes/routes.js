import Account from "~/layouts/Account";
import Main from "~/layouts/Main";
import Home from "~/pages/Home";
import Login from "~/pages/Login";
import Post from "~/pages/Posts";
import Register from "~/pages/Register";
import Write from "~/pages/Write";

const routes = [
  { path: "/", page: Home, layout: Main },
  { path: "/user/posts", page: Post, layout: Main },
  { path: "/user/write", page: Write, layout: Main },
  { path: "/account/login", page: Login, layout: Account },
  { path: "/account/register", page: Register, layout: Account },
];

export default routes;
