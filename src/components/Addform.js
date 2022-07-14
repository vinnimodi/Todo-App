import Axios from 'axios';
import React, { useState, useEffect } from 'react'

const url = `https://jsonplaceholder.typicode.com/todos`

function Addform() {
    const [data, setData] = useState([])
    const [currdata, setcurrdata] = useState([])
    const [title, setTitleInput] = useState("")
    const [id, setId] = useState("")
    const [updatetitle, setUpdatedtitle] = useState("")
    const [currentPage, setCurrentPage] = useState(1);
    const [totalpages, setTotalpages] = useState(1)
    //const [startpg, setStartpg] = useState(1)
    const [selectedTitle, setSelectedTitle] = useState("")
    const todoPerPage = 10;
    const pg = 5;

    useEffect(() => {
        Axios.get(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => {
                setData(res.data)
                pagify(currentPage, res.data);
            })
            .catch(err => { console.log(err) })
    }, [])

    useEffect(() => {
        const totalpages = Math.ceil(data.length / todoPerPage);
        setTotalpages(totalpages)
    }, [data])

    useEffect(() => {
        pagify(currentPage, data)
    }, [currentPage, data])

    const submit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: data.length + 1,
            title: title,
            completed: false,
        }
        const newTodos = [...data, newTodo];
        setData(newTodos)
        setCurrentPage(Math.ceil(newTodos.length / todoPerPage))
        //console.log(Math.ceil(newTodos.length / todoPerPage))
    }

    const postdelete = (id) => {
        const idToDelete = parseInt(id)
        const newTodos = data.filter(newdata => newdata.id !== idToDelete)
        setData(newTodos)
        pagify(currentPage, data);
    }

    const edit = (id, title) => {
        setSelectedTitle(id);
        setUpdatedtitle(title)
    }
    const update = (id) => {
        const toupdateid = parseInt(id)
        const newTodos = data.map((todo) => todo.id === toupdateid ? { ...todo, title: updatetitle } : todo)
        setData(newTodos);
        setSelectedTitle("")
    }

    const taskComplete = (id) => {
        const iddone = parseInt(id)
        if (iddone === -1) {
            return
        }
        const newTodos = data.map((todo) => todo.id === iddone ? { ...todo, completed: !todo.completed } : todo)
        setData(newTodos)
        pagify(currentPage, newTodos);
    }

    const nextpage = () => {
        if (currentPage != totalpages)
            setCurrentPage(currentPage + 1);
    }

    const prevpage = () => {
        if (currentPage != 1)
            setCurrentPage(currentPage - 1);
    }

    const taskleft = () => {
        const newTodos = data.filter((todo) => !todo.completed);
        console.log("after : ", newTodos)
        setData(newTodos)
        pagify(currentPage, newTodos);
    }

    function pagify(pagenum, data) {
        let start = (pagenum - 1) * todoPerPage
        let end = start + todoPerPage
        const newtodo = data.slice(start, end);
        setcurrdata(newtodo);
    }

    const getButtons = () => {
        const buttonarr = [<button type='button' onClick={prevpage}>Previous</button>]
        let endpg = Math.ceil(currentPage / pg) * pg;
        for (let i = endpg - (pg - 1); i <= endpg; i++) {
            buttonarr.push(<button style={{ margin: "3px", fontSize: i === currentPage && "1.25rem" }} key={i + Math.random()}
                onClick={() => setCurrentPage(i)}>{i}</button>)
        }
        buttonarr.push(<button type='button' onClick={nextpage}>Next</button>)
        return buttonarr
    }

    return (
        <div>
            {/* submit */}
            <form>
                <label><strong>Add New Todo:-</strong></label><br />
                <input style={{ padding: "5px" }} onChange={(e) => setTitleInput(e.target.value)} id="title" value={title}
                    placeholder='new Todo' type="text"></input>
                <button style={{ margin: "10px", padding: "5px", borderRadius: "3px" }}
                    type='button' onClick={submit}>➕</button>
                <br />
            </form>

            < button style={{ margin: "10px", padding: "5px", backgroundColor: "lightseagreen", borderRadius: "5px", fontSize: "15px" }}
                type='button' onClick={() => taskleft(id)}> Pending</button >
            <br />

            <div style={{ border: "2px solid black", columnGap: "25px", display: "grid", width: "1200px" }}>
                <div style={{ padding: "5px", border: "3px solid black", display: "grid", fontWeight: "bold", fontSize: "15px", gridTemplateColumns: "auto auto 5ch 5ch 5ch 8ch " }}>
                    <div>Id</div>
                    <div>Title</div>
                </div>

                {currdata.map((todo) => (
                    <div style={{ border: "1px solid black", display: "grid", gridTemplateColumns: "auto auto 5ch 5ch 5ch 8ch" }} key={todo.id}>
                        <div> {todo.id}</div>
                        {selectedTitle === (todo.id) ? (<input onKeyDown={(e) => { if (e.key === "Enter") update(todo.id) }} onChange={(e) => { setUpdatedtitle(e.target.value) }}
                            style={{ margin: "8px", padding: "5px", width: "max-content" }} id="edittitle" value={updatetitle}
                            type="text"></input>) : (<div style={{ textDecoration: todo.completed ? "line-through" : " " }}>{todo.title}</div>)}

                        <div style={{ padding: "5px", fontWeight: "bold", fontSize: "1.25rem", display: "grid", gridTemplateColumns: "auto auto auto auto" }}>
                            <button type='button' onClick={() => postdelete(todo.id)}>🗑️    </button>
                            <button type='button' onClick={() => taskComplete(todo.id)}>{todo.completed ? "X" : "✓"}</button>
                            <button type='button' onClick={() => edit(todo.id, todo.title)}>Edit</button>
                            <button type='button' onClick={() => update(todo.id)}>Update</button>
                        </div>
                    </div>
                ))}
            </div><br></br>
            {getButtons()}
        </div >
    )
}
export default Addform;