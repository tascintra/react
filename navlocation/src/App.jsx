import { useState, useEffect } from 'react'

function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, [])

  function handlePositionReceived(coordinates) {
    console.log(coordinates)
  }

  return (
    <>
      Latitude: 34.33 <br />
      Longitude: 1243432556767
    </>
  )
}

export default App
