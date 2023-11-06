import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App!....</h1>
    </div>
  )
}

// const reactElement = {
//   type:'a',
//   props:{
//       href:'https://google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visist google'
// }
// const anotherElement = (
//   <a href="https://google.com" target='_blank' >visit Here </a>
// )

const username = "Rajnish Kumar verma"
//react ka rule ke according

const reactElement = React.createElement(
  'a',
  {href:"https://google.com", target:'_blank'},
  'Click me to visit google',
     username
)

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  // anotherElement
  reactElement
)
