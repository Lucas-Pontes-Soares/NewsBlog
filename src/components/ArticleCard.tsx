import { useState } from "react";

export function ArticleCard() {
  const [showDescription, setShowDescription] = useState(false);

  function handleSeeArticle(){
    console.log("teste")
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
        Artigo
      </div>

      {showDescription && (
        <div>
          Description
        </div>
      )}

    </div>
  );
}
