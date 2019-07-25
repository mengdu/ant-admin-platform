import React from 'react'
import router from './router'

function App () {
  return (
    <div className="main">
      {router.view()}
    </div>
  )
}

export default App
