import { API_CATS_FACT } from '../constants/APIs'

export const getRandomFact = async () => {
  try {
    const res = await fetch(API_CATS_FACT)
    if (!res.ok) throw new Error('Error fetching fact')

    const data = await res.json()
    const { fact } = data

    return fact
  } catch (error) {
    return error
  }
}
