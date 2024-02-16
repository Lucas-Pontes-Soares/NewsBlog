import { Routes, Route,} from 'react-router-dom';
import App from "./App";
import { Article } from "./Article";
import { CreateArticle } from './components/CreateArticle';

export function NewsBlogRoutes() {

   return(
        <Routes>
                <Route path="/" element={<App />} />
                <Route path="/article" element={<Article />} />
                <Route path="/CreateArticle" element={<CreateArticle />} />
        </Routes>
   )
}