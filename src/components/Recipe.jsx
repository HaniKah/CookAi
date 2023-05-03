export default function Recipe() {
  return (
    <div className="recipe">
      <div className="recipe_main">
        <h1 className="title"></h1>
        <div className="recipe_left">
          <div className="recipe_img"></div>
          <div className="recipe_serv">
            <span>Servings</span>
            <span>
              <button>+</button>4<button>-</button>
            </span>
          </div>
          <div className="recipe_prep">
            <div>
              <span>🕒</span>
              <p>prep:variable here</p>
              <p>cook:variable here</p>
            </div>
            <div>
              <span>🧑‍🍳</span>
              <p>Easy</p>
            </div>
          </div>
          <div className="recipe_ing"></div>
          <div className="recipe_nut"></div>
        </div>
        <div className="recipe_text"></div>
        <div className="recipe_tags"></div>
      </div>
      <div className="recipe_side"></div>
    </div>
  );
}
