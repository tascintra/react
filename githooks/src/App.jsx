import { useState, useEffect } from "react"

export default function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://api.github.com/users/tascintra/repos")
      const data = await response.json()
      setRepositories(data)
    }
    fetchData();
  }, [])

  useEffect(() => {
    const filtered = repositories.filter(repo => repo.favorite)

    document.title = `Você tem ${filtered.length} favoritos`
  }, [repositories])

  function handleFavorite(id) {
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    })

    setRepositories(newRepositories)
  }

  return (
    <ul style={{display: "flex", flexDirection: "column", gap: "12px"}}>
      { repositories.map( repo => (
        <li key={repo.id} style={{display: "flex", gap: "4px", alignItems: "center", fontFamily: "Arial"}}>
          {repo.name}
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          {repo.favorite && <span>[Favorito]</span>}
        </li>
      ))}
    </ul>
  )
}