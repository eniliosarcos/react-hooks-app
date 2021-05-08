import React from 'react'
import PropTypes from 'prop-types'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, handleToggle, handleDelete}) => {

    return (
        <div>
            <ul className="list-group list-group-flush">
            {
                todos.map( (todo,i) => [
                    <TodoListItem 
                        key={todo.id}
                        todo={todo} 
                        index={i} 
                        handleToggle={handleToggle} 
                        handleDelete={handleDelete}
                    />
                ])
            }
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    todos: PropTypes.any.isRequired
}

export default TodoList
