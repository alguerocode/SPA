import { Home } from "./views/Home";
import {Posts } from "./views/posts";
import { Settings } from "./views/settings";

const navigateTo = (path) => {
  history.pushState(null, null, path);
  router();
};

const router = async () => {
  const routes = [
    { path: "/", view: Home },
    { path: "/posts", view: Posts},
    { path: "/settings", view: Settings },
  ];

  const potentialRoutes = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path,
    };
  });

  const match = potentialRoutes.find((route) => route.isMatch);

  if (!match) {
    match = {
      route: route[0],
      isMatch: true,
    };
  }

  const view = new match.route.view();

  document.getElementById("app").innerHTML = await view.getHtml();
};

document.addEventListener("DOMContentLoaded", (e) => {
  router();
  document.addEventListener("click", (e) => {      
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
});

window.addEventListener("popstate", router);
