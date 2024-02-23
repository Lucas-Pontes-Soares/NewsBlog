import { ChangeEvent, useState } from "react";
import { SessionArticle } from "./SessionArticle";
import { toast } from 'sonner'

interface Session {
    id: string;
}

interface SessionValue {
    title: string;
    text: string;
}
 
export function CreateArticle() {
    const [session, setSession] = useState<Session[]>([]);
    const [quantidadeSessoes, setQuantidadeSessoes] = useState<number>(0);
    const [sessionArray, setSessionArray] = useState<SessionValue[]>([]);
  
    const [titleArticle, setTitleArticle] = useState('')
    const [description, setDescription] = useState('')

    function handleAddSessions() {
        const updatedSessions = Array.from({ length: quantidadeSessoes }, () => ({
           id: crypto.randomUUID(),
        }));
        
        setSession(prevSessions => [...prevSessions, ...updatedSessions]);
    }
  
    function handleQuantidadeSessoesChange(event: React.ChangeEvent<HTMLInputElement>) {
      const quantidade = parseInt(event.target.value);
      setQuantidadeSessoes(quantidade);
    }

    function onSessionChanged(title: string, text: string){
        const newSession = {
            title: title,
            text: text,
        }
      
        console.log(title)
        console.log(text)
        const sessionValue = [...sessionArray, newSession]
        setSessionArray(sessionValue)
    }

    function handleCreateArticle(){
      const newArticle = {
        id: crypto.randomUUID(),
        title: titleArticle,
        description: description,
        dateCreatedAt: new Date(),
        session: sessionArray,
      };

      if(titleArticle == '' && description == '' && sessionArray.toString() == ''){
        toast.error('Preencha todos os campos!')
      } else {
        const existingArticlesJSON = localStorage.getItem('articles');
        const existingArticles = existingArticlesJSON ? JSON.parse(existingArticlesJSON) : [];
  
        const updatedArticles = [...existingArticles, newArticle];
  
        localStorage.setItem('articles', JSON.stringify(updatedArticles));
        toast.success('Artigo criado com sucesso!')
      }
    }

    function titleArticleChanged(event: ChangeEvent<HTMLInputElement>){
        setTitleArticle(event.target.value)
    }

    function descriptionChanged(event: ChangeEvent<HTMLInputElement>){
        setDescription(event.target.value)
    }


    return (
      <div>
        <div className="w-10/12 text-center mx-auto my-8">
          <img
            className="mx-auto w-full mb-4"
            src="./fundo.png"
            alt="Imagem principal do Artigo"
          />
          <form className="text-left">
            <h1 className="text-5xl font-bold text-left mb-2">
              Titulo do artigo
            </h1>
            <input 
                className="mb-4 w-full text-slate-900 p-2" 
                type="text"
                placeholder="Digite o titulo" 
                name="title" 
                required
                onChange={titleArticleChanged}
                value={titleArticle}
            />
  
            <p className="text-1xl text-left mb-2">
              Descrição do artigo
            </p>
            <input 
                className="mb-4 w-full text-slate-900 p-2" 
                type="text" 
                placeholder="Digite a descrição" 
                name="description" 
                required
                onChange={descriptionChanged}
                value={description}
            />
  
  
            <div className="h-px bg-slate-300" />
          </form>
  
            <div className="flex flex-col items-center mt-4">
                <h3>Vai precisar de quantas sessões?</h3>

                <input 
                    type="number" 
                    className="text-slate-900 mb-4 p-2 rounded-md"
                    placeholder="Digite a quantidade" 
                    name="qtdSessions" 
                    required
                    onChange={handleQuantidadeSessoesChange}
                />
                <button 
                    onClick={handleAddSessions}
                    className="bg-neutral-800 rounded-md p-4 hover:ring-2 hover:ring-gray-200"
                >
                    Adicionar Sessões
                </button>
            </div>
  
            {session.map((session) => (
              <SessionArticle key={session.id} onSessionChanged={onSessionChanged}/>
            ))}

            <button 
                onClick={handleCreateArticle}
                className="bg-neutral-800 rounded-md p-4 hover:ring-2 hover:ring-gray-200 my-4"
            >
                Criar Artigo
            </button>
        </div>
      </div>
    );
}