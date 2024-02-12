import { Search } from "lucide-react"
import { ArticleCard } from "./ArticleCard"

export function GetArticles(){
    return(
        <div className="w-full bg-neutral-800 my-8 p-12 rounded-md h-auto">
            <div className="flex flex-row items-center mb-8"> 
                <div className="flex-none mr-2"> 
                    <Search />
                </div>
                <div className="flex-grow">
                <input 
                    type="text"
                    placeholder="Filtre aqui as notícias"
                    className="w-2/6 p-1 text-gray-950"
                />
                </div>
            </div>

            <h1 className="text-2xl font-bold">Artigos: </h1>
            <h2>Passe o cursor por cima para ver o conteudo, ou clique para ler por completo.</h2>

            <div className="mt-4">
                <ArticleCard />
                <ArticleCard />
            </div>
        </div>
    )
}