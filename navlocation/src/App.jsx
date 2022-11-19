import { useState, useEffect } from 'react'

function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived)
  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords

    setLocation({ latitude, longitude })
  }

  return (
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  )
}

export default App
