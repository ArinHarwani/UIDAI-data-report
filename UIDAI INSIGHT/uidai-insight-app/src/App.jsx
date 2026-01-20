import { useState } from 'react'
import MapComponent from './components/MapComponent'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>India Aadhar Enrollment Heatmap</h1>
        <p className="subtitle">District-wise Demographic Visualization</p>
      </header>
      <main className="map-wrapper">
        <MapComponent />
      </main>
    </div>
  )
}

export default App
