import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      { title: 'Mua bim bim', isComplete: true },
      { title: 'Di da bong', isComplete: true },
      { title: 'Di do xang' }
    ];
  }
  render(){
    return (
      <div className="App">
        {
          this.todoItems.map((item, index) => 
            <TodoItem key={index} item={item} />
          )
        }
      </div>
    );
  }
}

export default App;
