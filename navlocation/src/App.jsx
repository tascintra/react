import { useState, useEffect } from 'react'

function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    const whatchId = navigator.geolocation.watchPosition(handlePositionReceived)

    return () => navigator.geolocation.clearWatch(whatchId)
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
