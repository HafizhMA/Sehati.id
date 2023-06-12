import Home from '../views/pages/home';
import Recipe from '../views/pages/recipe';
import Article from '../views/pages/article';
import Forum from '../views/pages/forum';
import Register from '../views/pages/register';
import Login from '../views/pages/login';
import Detail from '../views/pages/recipe-detail';
import Category from '../views/pages/recipe-category';

const routes = {
  '/': Home,
  '/home': Home,
  '/recipe': Recipe,
  '/article': Article,
  '/forum': Forum,
  '/login': Login,
  '/register': Register,
  '/detail/:id': Detail,
  '/category/:id': Category,
};

export default routes;
