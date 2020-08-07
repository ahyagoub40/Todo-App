import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './App.scss';
import AddTodo from './Containers/AddTodo';
import TodoList from './Containers/VisibleTodoList'
import Footer from './Components/footers'
import rootReducer from './Store/Reducer'
const store = createStore(rootReducer, composeWithDevTools())

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
