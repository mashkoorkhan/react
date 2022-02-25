import React from 'react'
import Child from './Components/Child';

//send Data parent to Child -----


// function App(){
//     const data = 'Muhammad Mashkoor Khan'
//     return(
//         <div>
//             <Child name={data}/>
//         </div>
//     )
// }
// export default App;

//Received Data From Child ----

function App(){
    function ReceivedChild(ele){
        alert(ele)
    }
    return(
        <div>
            <Child alert ={ReceivedChild}/>
        </div>
    )
}
export default App;