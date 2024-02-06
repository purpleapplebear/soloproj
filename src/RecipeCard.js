import { useState } from 'react'


export default function Data(props) {

    let [name, setName] = useState('')
    let [ingredients, setIngredients] = useState('')

    if (name === '') {
        fetch('https://dummyjson.com/recipes/' + props.num)
        .then(res => res.json())
        .then((data) => {

            setName(data.name)
            setIngredients(data.ingredients)
        })
    }

    console.log(ingredients)

    return (
        <>
        <h1>{name}</h1>
        <p>{ingredients + '' }</p>
        </>
    )

}





// let test = ''
// import parse from 'html-react-parser'

// function RecipeCard(data) {
//     let recipe = data
//         for (let i in recipe) {
//             html = html + `<p>${i}: ${recipe[i]}</p>`
//         }
// }


