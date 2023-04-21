import {useEffect, useState} from "react";
import {ingredientImgCall} from "../../../api/ingredientImgCall";

interface IngredientProps {
    src: string;
    altImg: string;
    className?: string;
    handleClick?: () => void;
}

const Ingredient = ({src, altImg, className, handleClick}: IngredientProps) => {
    const [imgSrc, setImgSrc] = useState<string>();
    useEffect(() => {
        ingredientImgCall(src)
            .then(src => setImgSrc(src.data))
    }, [src])

    return (
        <div>
            <img onClick={handleClick} src={imgSrc}
                 alt={altImg}
                 className={className}
            />
        </div>
    )
}

export default Ingredient;