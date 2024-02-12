export function Article(){
    return(
        <div>
            <div className="w-10/12 text-center mx-auto my-8">
                <img 
                    className="mx-auto w-full mb-4"
                    src="./fundo.png"
                    alt="Imagem principal do Artigo" 
                />
                <h1 className="text-5xl font-bold mb-4 text-left">
                    Titulo do artigo
                </h1>
                <p className="text-1xl mb-4 text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem saepe quidem ipsa reiciendis. Quisquam, suscipit nam facere, magni, autem quod odio labore quos laboriosam nostrum debitis doloribus dolore! Quidem, laborum?</p>
            
                <div className="h-px bg-slate-300"/>

            </div>

        </div>
    )
}