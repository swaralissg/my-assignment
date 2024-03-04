import React from 'react'
import './ToDoListComponent.css'
import { useState } from "react"
import list from '../assets/to-to-list-icon.png'
import UserProfilesComponent from '../UserProfilesComponent/UserProfilesComponent'


function ToDoListComponent({ ...currentTodos }) {

    const [newItem, setNewItem] = useState("");
    const [todos, setTodos] = useState([])
   

    function handleSubmit(e) {
        e.preventDefault()
        setTodos(currentTodos => [...currentTodos, { id: crypto.randomUUID(), title: newItem, completed: false },])
        setNewItem("")
    }

    function toggleTodo(id, completed) {
        setTodos(currentTodos => {
            return currentTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed }
                }
                return todo
            })
        })
    }

    function deleteTodo(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id)

        })
    }

    return (
        <>
            <div id="todo-main-container" className='container'>
                <div id='to-do-list-card' className='card'>
                    <div className='container'>
                        <div className='to-do-list-title'>
                            To Do List
                            <img className='to-do-list-image' src={list} />
                        </div>
                        <form onSubmit={handleSubmit} className="new-item-form">
                            <div id='add-items=row' className='row'>
                                <div className='col'>
                                    <input value={newItem} onChange={e => setNewItem(e.target.value)} placeholder='Enter your item' type="text" id="add-item-placeholder" />
                                </div>
                                <div className='col'>
                                    <button id='add-button'>Add</button>
                                </div>
                            </div>
                        </form>
                        <ul id='list-items' className="list">
                            {todos.length === 0 && "No Todos"}
                            {todos.map(todo => {
                                return (
                                    <li id='list-item' key={todo.id}>
                                        <div className='row'>
                                            <div className='col'>
                                                <label id='list-item-name'>
                                                    <input id='checkbox' className='style-checkbox' type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
                                                    {todo.title}
                                                </label>
                                            </div>

                                            <div className='col'>
                                                <button id='delete-button' className="btn btn-danger" onClick={() => deleteTodo(todo.id)}><i class="fa fa-trash"></i></button>

                                            </div>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoListComponent