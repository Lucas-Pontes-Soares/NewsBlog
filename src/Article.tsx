import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

export function Article(){
    const { id } = useParams();
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        const data = localStorage.getItem('articles');

        if (data) {
          const dataArray: Article[] = JSON.parse(data);
          const item = dataArray.find(item => item.id === id);

          setArticle(item || null);
        }

    }, [id]);

    return(
        <div>
            <div className="w-10/12 text-center mx-auto my-8">
            {article ? (
            <>
                <h1 className="text-5xl font-bold mb-4 text-left">{article.title.toUpperCase()}</h1>
                <p className="text-1xl mb-4 text-left">{article.description}</p>

                <div className="h-px bg-slate-300"/>

                <div className="my-8">
                    {Object.keys(article.session).map((key) => (
                        <div key={key}>
                            <li className="text-3xl font-bold mb-4 text-left">{article.session[key].title}</li>
                            <p className="text-1xl mb-4 text-left px-4">{article.session[key].text}</p>
                        </div>
                    ))}
                </div>
            </>
            ) : (
                <p>Artigo não encontrado</p>
            )}
            </div>

        </div>
    )
}