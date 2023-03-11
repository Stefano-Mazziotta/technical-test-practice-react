import { useState, useEffect } from 'react'
import { API_PREFIX_CAT_IMG, API_CATS_GET_IMG } from '../constants/APIs'

export function useCatImage ({ fact }) {
  const [catImageSrc, setCatImageSrc] = useState('')

  const getWordsFromFact = (fact) => {
    const words = fact.split(' ', 3).join(' ')
    return words
  }

  useEffect(() => {
    if (!fact) return

    const words = getWordsFromFact(fact)
    const queryString = `${words}?size=${50}&color=black&json=true`

    fetch(API_CATS_GET_IMG + queryString)
      .then(res => {
        if (!res.ok) throw new Error('Error fetching img cat')
        return res.json()
      })
      .then(data => {
        let { url } = data
        url = API_PREFIX_CAT_IMG + url

        setCatImageSrc(url)
      })
      .catch(error => console.log(error))
  }, [fact])

  return { catImageSrc }
}
