import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {IIngredients} from "../../../interfaces/ingredient";
import Ingredient from "../ingredient/ingredient";
import {ingredientsCall} from "../../../api/ingredientsCall";
import './builder.css'

interface BuilderProps {
    addIngredient: (ingredient: IIngredients) => void;
}

const Builder = ({addIngredient}: BuilderProps) => {
    const [possibleIngredients, setPossibleIngredients] = useState<IIngredients[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        ingredientsCall()
            .then(ingredients => setPossibleIngredients(ingredients))
            .catch(e => {
                console.log(e);
                navigate('/')
            })
    }, [navigate])

    return (
        <div className="possibleIngredients">
            {possibleIngredients.map((ingredient) => {
                return <Ingredient
                    key={ingredient.id}
                    src={ingredient.src}
                    altImg={ingredient.name}
                    className="possibleIngredient"
                    handleClick={() => addIngredient(ingredient)}
                />
            })}
        </div>
    )
}

export default Builder;