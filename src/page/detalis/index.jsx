import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detalis() {
  const { id } = useParams();
  const [cocteil, setcocteil] = useState([]);
  console.log(id);
  useEffect(() => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => setcocteil(res.data?.drinks[0]));
  }, [id]);
  console.log(cocteil);
  return (
    <>
      <section className="section cocktail-section">
        <Link className="btn btn-primary" to={"/"}>
          back home
        </Link>
        <h2 className="section-title">{cocteil?.strDrink}</h2>
        <div className="drink">
          <img src={cocteil?.strDrinkThumb} alt="A1" />
          <div className="drink-info">
            <p>
              <span className="drink-data">name :</span> {cocteil?.strDrink}
            </p>
            <p>
              <span className="drink-data">category :</span>{" "}
              {cocteil?.strCategory}
            </p>
            <p>
              <span className="drink-data">info :</span> {cocteil?.strAlcoholic}
            </p>
            <p>
              <span className="drink-data">glass :</span> {cocteil?.strGlass}
            </p>
            <p>
              <span className="drink-data">instructons :</span>{" "}
              {cocteil?.strInstructions}
            </p>
            <p className="r">
              <span className="drink-data">ingredients :</span>
              {Array.from({ length: 15 }).map((_, ind) => {
                return (
                  <span className="r">
                    {cocteil[`strIngredient${ind + 1}`] ?? ""}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Detalis;
