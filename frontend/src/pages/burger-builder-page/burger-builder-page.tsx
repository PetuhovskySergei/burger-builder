import { useState} from "react";
import {IIngredients} from "../../interfaces/ingredient";
import Ingredient from "../../componets/burger-builder/ingredient/ingredient";
import Builder from "../../componets/burger-builder/builder/builder";

const BurgerBuilderPage = () => {
    const [ingredients, setIngredients] = useState<IIngredients[]>([]);

    const addIngredient = (addIngredient: IIngredients) => {
        setIngredients(prevState => [...prevState, addIngredient])
    }

    return (
        <div>
            <div>
                <Ingredient src='bun_top.png' altImg='bun top' />
                {ingredients.map((ingredient, ingredientsIndex) => {
                    return <Ingredient
                        handleClick={() => setIngredients(
                            ingredients.filter((e, index) =>
                                index !== ingredientsIndex
                            )
                        )}
                        src={ingredient.src}
                        altImg={ingredient.name}
                        key={ingredient.name + ingredientsIndex}
                    />
                })}
                <Ingredient src='bun_bottom.png' altImg='bun bottom' />
            </div>
            <Builder addIngredient={addIngredient}/>
        </div>
    )
}

export default BurgerBuilderPage;