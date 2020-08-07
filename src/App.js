import React from 'react';
import './App.scss';
import AddTodo from './Containers/AddTodo';
import TodoList from './Containers/VisibleTodoList'
import Footer from './Components/footers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './Store/Reducer'

const store = createStore(rootReducer)

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddTodo />
        <TodoList />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
