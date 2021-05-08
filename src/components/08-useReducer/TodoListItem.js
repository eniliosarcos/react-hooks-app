import React from 'react'
import PropTypes from 'prop-types'

const TodoListItem = ({todo, index, handleToggle, handleDelete}) => {
    return (
        <div>
            <li 
                className="list-group-item"
            >
                <p className={`${todo.done && 'complete'}`}
                    onClick={()=>handleToggle(todo.id)}
                >
                    {index+1}. {todo.desc}
                </p>

                <button
                    onClick={() => handleDelete(todo.id)}
                    className="btn btn-danger"
                >
                    Borrar
                </button>
            </li>
        </div>
    )
}

TodoListItem.propTypes = {
    todo: PropTypes.any.isRequired
}

export default TodoListItem
