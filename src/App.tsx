import { GetArticles } from "./components/GetArticles";

export default function App() {

  function handleCreateArticle(){

  }

  return (
    <div className="mx-12 my-12 px-5">
      <h1 className="text-3xl font-bold">
        Escolha uma noticia para ler
      </h1>

      <div className="w-full text-center my-8">
        <button 
          className="bg-neutral-800 rounded-md p-4 hover:ring-2 hover:ring-gray-200 "
          onClick={handleCreateArticle}
          >
            Criar Artigo
        </button>
      </div>

      <div className="h-px bg-slate-300"/>

      <GetArticles />
    </div>
  )
}