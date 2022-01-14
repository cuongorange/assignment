
import Navigo from 'navigo';
import AboutPage from './pages/about';
import ContactPage from './pages/contact';
import HomePage from './pages/home';
import newDetailpage from './pages/newDetail';
import notFoundPage from './pages/notFoundPage';
import product from './pages/product';

const router = new Navigo ("/", {linksSelector:"a"});
const print = (content) => {
  document.querySelector("#app").innerHTML = content;
}
router.on({
  "/":()=>{
    print(HomePage.render());
  },
  "/about":()=>{
    print(AboutPage.render());
  },
  "/product":()=>{
    print(product.render());
  },
  "/contact":()=>{
    print(ContactPage.render());
  },
  "/news/:id":(value)=>{
    console.log(value.data.id);
    print(newDetailpage.render(value.data.id));
  },
});
router.notFound(()=> print(notFoundPage.render()));
router.resolve();






