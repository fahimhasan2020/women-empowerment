import React from 'react'


class App extends React.Component{


componentDidMount(){
  fetch('http://192.168.219.211:3000').then((response)=>response.json()).then((responseJson)=>{
    console.log(responseJson);
  })
}

render(){
  return(<div>
    <p>This is nothing</p>
  </div>)
}
}

export default App;
