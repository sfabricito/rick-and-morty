import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

const routes = {
    '/': Home,
    '/:i': Character,
    '/Contact': 'Contact',
}