import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Navbar from './Navbar'
import Hero from './Hero'
import Technologies from './Technologies'
import Footer from './Footer'
import type { Technology } from './TechnologyCard'
import './App.css'

export default function App() {
  const [technologies, setTechnologies] = useState<Technology[]>([])
  const [selected, setSelected] = useState<Technology[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/technologies.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Data could not be loaded')
        }
        return response.json()
      })
      .then((data: Technology[]) => {
        setTechnologies(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Technology data could not be loaded. Please refresh the page.')
        setLoading(false)
      })
  }, [])

  function addToStack(technology: Technology) {
    const alreadyAdded = selected.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setSelected([...selected, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  function removeFromStack(id: string) {
    const item = selected.find((technology) => technology.id === id)
    setSelected(selected.filter((technology) => technology.id !== id))

    if (item) {
      toast.info(`${item.name} removed from your stack.`)
    }
  }

  function removeAll() {
    if (selected.length === 0) {
      toast.warning('Your stack is already empty.')
      return
    }

    setSelected([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading technologies...</p>
          </div>
        ) : error ? (
          <div className="error-state">{error}</div>
        ) : (
          <Technologies
            technologies={technologies}
            selected={selected}
            onAdd={addToStack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        )}
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={2200} />
    </>
  )
}
