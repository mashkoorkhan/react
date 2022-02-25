import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';


function MyTodo() {

    const [input, setInput] = useState()
    const [quantity, setQuantity] = useState()
    const [price, setPrice] = useState()
    const [total, setTotal] = useState()
    const [edit, setEdit] = useState([])
    const [toggle, setToggle] = useState(false)
    const [all, setAll] = useState(localStorageItem())

    //const data = JSON.parse(localStorage["setAll"]);
    //const data = JSON.parse(localStorage.getItem("table"));
     function localStorageItem(){
        
     const tables =  localStorage.getItem('Table')
        if(tables){
            return JSON.parse(localStorage.getItem("Table"))
        }else{
            return [];
        }
     }


    function ChangeInput(event) {
        setInput(event.target.value)
    }
    function ChangeQuantity(event) {
        setQuantity(event.target.value)
        setTotal(price * event.target.value)
    }
    function ChangePrice(event) {
        setPrice(event.target.value)
        setTotal(quantity * event.target.value)
    }
    function ChangeTotal() {
        setTotal(quantity * price)
    }

    function AddTask(id) {
        if (toggle) {
            const newValue = all.findIndex((text) => text.input == edit.input)
            const updated = [...all]
            updated[newValue].input = input
            updated[newValue].quantity = quantity
            updated[newValue].price = price
            updated[newValue].total = total
            setAll(updated)
            setToggle(true)
            setInput('')
            setQuantity('')
            setPrice('')
            setTotal('')

        } else {
            const record = {
                input: input,
                quantity: quantity,
                price: price,
                total: total
            }
            const newRecord = [record, ...all]
            setAll(newRecord)
            setInput('')
            setQuantity('')
            setPrice('')
            setTotal('')
        }
    }




    function EditItem(item) {
        setEdit(item)
        setInput(item.input)
        setQuantity(item.quantity)
        setPrice(item.price)
        setTotal(item.total)
        setToggle(true)
    }
    function DeleteItem(id) {
        const removed = all.filter((item, index) => {
            return index !== id
        })
        setAll(removed)
    }
    //arraymoveup function created:
    function arraymoveup(Index) {
        var element = all[Index];
        all.splice(Index, 1);
        all.splice(Index - 1, 0, element);
        setAll([])
        setTimeout(() => {
            setAll(all)
            console.log(all)
        })


    }

    //arraymovedown function created:
    function arraymovedown(Index) {
        var element = all[Index];
        all.splice(Index, 1);
        all.splice(Index + 1, 0, element);
        setAll([])
        setTimeout(() => {
            setAll(all)
        }, 0);

        console.log(all)
    }
    //Add to local storage;
    
    
    useEffect(() => {
    localStorage.setItem("Table", JSON.stringify(all))
    }, [all])
    //ye function ok hy
    // useEffect(() => {
    //     localStorage['setAll'] = JSON.stringify(all)
    //   }, [all]); 
    //   //console.log(all)

    return (
        <div>
            <h1>My Todo App</h1>
            <input type="text" value={input} placeholder='Enter the Value...' onChange={ChangeInput} />
            <input type="number" value={quantity} placeholder='Enter the Quantity...' onChange={ChangeQuantity} />
            <input type="number" value={price} placeholder='Enter the Price...' onChange={ChangePrice} />
            <input type="number" value={total} placeholder=' Total Value...' onChange={ChangeTotal} />
            <button onClick={AddTask}>Add Me</button>
            <Table>
                <tbody>
                    <tr>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {
                        all.map((item, id) => {
                            return (
                                <tr key={id}>
                                    <td>{item.input}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.price}</td>
                                    <td>{item.total}</td>
                                    <button onClick={() => DeleteItem(id)}>Delete</button>
                                    <button onClick={() => EditItem(item)}>Edit</button>
                                    <button onClick={() => arraymoveup(id)}>MoveUp</button>
                                    <button onClick={() => arraymovedown(id)}>MoveDwown</button>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default MyTodo;
