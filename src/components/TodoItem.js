import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';
import checkImg from '../img/tick.svg';
import checkCompleteImg from '../img/tick1.svg';

class TodoItem extends Component {
    render() {
        const { item, onClick } = this.props;
        let url = checkImg;
        if (item.isComplete) {
            url = checkCompleteImg;
        }

        return (
            <div className={classNames('TodoItem', {
                'TodoItem-complete': item.isComplete
            })}>
            
            <img onClick={onClick} src={url} width={32}/>
            <p>{this.props.item.title}</p>
            </div>
        );
    }
}

export default TodoItem;