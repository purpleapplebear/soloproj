import { useState } from 'react'

export default function Data() {

    let [test, setTest] = useState('')

    fetch('https://dummyjson.com/recipes/1')
    .then(res => res.json())
    .then((data) => {

        setTest(data.ingredients)

    })

    return (
        <h1>{test}</h1>
    )
    

        

    // fetch('https://dummyjson.com/recipes/search?q=phone')
    // .then(res => res.json())
    // .then(console.log);
}