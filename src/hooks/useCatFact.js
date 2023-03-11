import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export function useCatFact () {
  const [fact, setFact] = useState('')

  const updateFact = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  useEffect(() => {
    updateFact()
  }, [])

  return { fact, updateFact }
}
