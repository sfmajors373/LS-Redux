import React from 'react';
import Footer from './Footer';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VisibleTodoList';
import './App.css';

const App = () => (
  <div>
    <h5>To-Do List</h5>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App;
