import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [erreur, setErreur] = useState(null)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setErreur(null)

    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    })
      .then(res => res.json())
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          navigate('/pokemons')
        } else {
          setErreur(data.message)
        }
      })
  }

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <div style={{
        width: '360px',
        padding: '40px',
        borderRadius: '12px',
        border: '1px solid #eee',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      }}>
        <h1 style={{ textAlign: 'center', marginBottom: '32px' }}>Pokédex</h1>

        {erreur && (
          <div style={{
            backgroundColor: '#fff5f5',
            color: '#e63946',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '16px',
            fontSize: '14px',
          }}>
            {erreur}
          </div>
        )}

        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500' }}>
            Nom d'utilisateur
          </label>
          <input
            type="text"
            value={username}
            onChange={e => setUsername(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              boxSizing: 'border-box',
              fontSize: '14px',
            }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ display: 'block', marginBottom: '6px', fontSize: '14px', fontWeight: '500' }}>
            Mot de passe
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={{
              width: '100%',
              padding: '10px 12px',
              borderRadius: '8px',
              border: '1px solid #ddd',
              boxSizing: 'border-box',
              fontSize: '14px',
            }}
          />
        </div>

        <button
          onClick={handleSubmit}
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#e63946',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer',
          }}
        >
          Se connecter
        </button>
      </div>
    </div>
  )
}

export default Login