import React from 'react';
import PropTypes from 'prop-types'
import './css/todoItem.css'
class TodoItem extends React.Component {
    HandleClick=()=>{
        this.props.onDelete(this.props.index)
    }
    render() {
        return (

                <li className='todo-item' >
                    <span className='item-name'>{this.props.val}</span>
                    <span className='item-remove' onClick={this.HandleClick}>X</span>
                </li>

        );
    }
}
TodoItem.propTypes={
    index:PropTypes.number.isRequired,
    val:PropTypes.string,
}

export default TodoItem;
