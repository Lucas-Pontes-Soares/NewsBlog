import { useState } from "react";

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

interface ArticleCardProps{
  article: Article;
}

export function ArticleCard({ article }: ArticleCardProps) {
  const [showDescription, setShowDescription] = useState(false);

  function handleSeeArticle() {
    window.location.href = `/article/${article.id}`;
  }

  return (
    <div
      className={
        `w-full ring-1 ring-gray-200 p-4 border rounded-md cursor-pointer my-2 relative 
        ${
          showDescription ? "h-auto" : "h-18"
        }`
      }
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
      onClick={() => handleSeeArticle()}
    >
        <div className="flex items-center">
          {article.title.toUpperCase()}
        </div>

        {showDescription ? (
          <div>
            <p>{article.description}</p>
          </div>
        ): null}

    </div>
  );
}
