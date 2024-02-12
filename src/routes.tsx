import { Routes, Route,} from 'react-router-dom';
import App from "./App";
import { Article } from "./Article";

export function NewsBlogRoutes() {

   return(
        <Routes>
                <Route path="/" element={<App />} />
                <Route path="/article" element={<Article />} />
        </Routes>
   )
}