import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import './style.css'
import App from './App'
// import Counter from './components/Counter'

/* const Hello = ({firstName, lastName}) => {
  return (<h1>Hello, {firstName} {lastName} </h1>)
} */

/* const render = Counter =>
    ReactDOM.render(
      <AppContainer>
        <Counter label="Counter"></Counter>
      </AppContainer>,
    document.getElementById('app')
  )
  */

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  );

render(App)

if (module.hot) {
  module.hot.accept('./App', () => render(App))
}