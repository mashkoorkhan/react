import React from 'react'


//Received Data parent to Child -----


// function Child(props){
//     return(
//         <div>
//             <h1>My Name is {props.name}</h1>
//         </div>
//     )
// }
// export default Child;

//send Data to parent----

// function Child(props){
//     const data = 'Muhammad Taimoor khan'
//     return(
//         <div>
//             <h1>My Name is </h1>
//             <button onClick={() =>props.alert(data)}>Click Me</button>
//         </div>
//     )
// }
// export default Child;

function Child(props){
    const ele = 'Muhammad Mashkoor Khan s/o Haji Lal Khan'
    return(
        <div>
            <h1>My Name is </h1>
            <button onClick={props.alert(ele)}>Click Me</button>
        </div>
    )
}
export default Child;