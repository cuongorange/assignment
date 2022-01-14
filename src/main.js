
import Navigo from 'navigo';
import AboutPage from './pages/about';

import HomePage from './pages/home';

const router = new Navigo ("/", {linksSelector:"a"});
const render = (content) => {
  document.getElementById("header").innerHTML = Header.print();
  document.getElementById("content").innerHTML = content.print();
  document.getElementById("footer").innerHTML = Footer.print();
};
router.on({
  "/":()=>{
    render(HomePage);
  },
  "/about":()=>{
    render(AboutPage);
  },
});router.resolve();






