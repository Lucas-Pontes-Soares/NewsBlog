import { ChangeEvent, useState } from "react"

interface SessinArticleProps{
    onSessionChanged: (title: string, text: string) => void
}

export function SessionArticle({ onSessionChanged }: SessinArticleProps){
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')

    function handleTitleChanged(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value)
        //console.log(event.target.value)
    }

    function handleTextChanged(event: ChangeEvent<HTMLTextAreaElement>){
        setText(event.target.value)
        //console.log(event.target.value)
    }

    function handleTeste(){
        if(title && text) {
            onSessionChanged(title, text)
        }
    }

        return (
            <div className="my-8">
                <form className="text-left">
                        <h1 className="text-5xl font-bold text-left">
                            Titulo da sessão
                        </h1>
                        <input 
                            className="mb-4 w-full text-slate-900 p-2" 
                            type="text" 
                            placeholder="Digite o titulo" 
                            name="title"
                            required
                            onChange={handleTitleChanged}
                            value={title}
                            onBlur={handleTeste}
                        />

                        <p className="text-1xl text-left">
                            Descrição da sessão
                        </p>
                        <textarea  
                            className="mb-4 w-full text-slate-900 p-2" 
                            placeholder="Digite o texto" 
                            name="text"
                            required
                            onChange={handleTextChanged}
                            value={text}
                            onBlur={handleTeste}
                        />

                    </form>
            </div>
    )
}