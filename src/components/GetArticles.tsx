import { Search } from "lucide-react"
import { ArticleCard } from "./ArticleCard"
import { ChangeEvent, useEffect, useState } from "react";

interface Article {
    id: string;
    title: string;
    description: string;
    dateCreatedAt: Date;
    session: {
      [key: string]: { 
        title: string;
        text: string;
      };
    };
  }

  
export function GetArticles(){
  const [articles, setArticles] = useState<Article[]>([]);
  const [search, setSearch] = useState('')

  useEffect(() => {
    const articlesOnStorage = localStorage.getItem('articles');

    if (articlesOnStorage) {
      const parsedArticles = JSON.parse(articlesOnStorage);
      setArticles(parsedArticles);
    }
  }, []);

  function handleSearch(event: ChangeEvent<HTMLInputElement>){
    const query = event.target.value

    setSearch(query)
  }

  const filteredArticles = search != ''
    ? articles.filter(art => art.title.toLowerCase().includes(search.toLowerCase()))
    : articles

    return(
        <div className="w-full bg-neutral-800 my-8 p-12 rounded-md h-auto">
            <div className="flex flex-row items-center mb-8"> 
                <div className="flex-none mr-2"> 
                    <Search />
                </div>
                <div className="flex-grow">
                <input 
                    type="text"
                    placeholder="Filtre aqui os artigos pelo título"
                    className="w-full p-1 text-gray-950 sm:w-3/6"
                    onChange={handleSearch}
                />
                </div>
            </div>

            <h1 className="text-2xl font-bold">Artigos: </h1>
            <h2>Passe o cursor por cima para ver a descrição, ou clique para ler por completo.</h2>

            {filteredArticles.map((article) => (
                <div className="mt-4" key={article.id}>
                    <ArticleCard article={article}/>
                </div>
            ))}
        </div>
    )
}