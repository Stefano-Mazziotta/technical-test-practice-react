import { useEffect, useState } from 'react'
import { useCatImage } from '../hooks/useCatImage'

import { getRandomFact } from '../services/getRandomFact'

export function CatCard () {
  const [fact, setFact] = useState('')
  const { catImageSrc } = useCatImage({ fact })

  useEffect(() => {
    getRandomFact().then((fact) => setFact(fact))
  }, [])

  const handleClick = () => {
    getRandomFact().then((fact) => setFact(fact))
  }

  return (
    <section className='container'>
      <div className='wrap-img-text'>
        {
          catImageSrc &&
            <img
              src={catImageSrc}
              alt={`image extracted using three first words from '${fact}'`}
            />
        }
        {fact && <p>{fact}</p>}
      </div>
      <button className='btn' onClick={handleClick}>Change fact</button>
    </section>
  )
}
