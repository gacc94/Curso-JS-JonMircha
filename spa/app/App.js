import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { Loader } from "./components/Loader.js";
import { Router } from "./components/Router.js";
import { InfiniteScroll } from "./helpers/infinite_scroll.js";

export function App() {
   const $root = document.getElementById("root");


   $root.innerHTML = null;
   $root.append(Header());
   $root.append(Main());
   $root.append(Loader());

   Router();
   InfiniteScroll()
}
