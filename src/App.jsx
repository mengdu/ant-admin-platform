import React from 'react'
// import AppLayout from './components/AppLayout'
import RouterView from './components/views'

class App extends React.Component {
  render () {
    return (
      <div className="main">
        {/*<AppLayout />*/}
        <RouterView />
      </div>
    )
  }
}

export default App
