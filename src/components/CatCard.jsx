import { useCatFact } from '../hooks/useCatFact'
import { useCatImage } from '../hooks/useCatImage'

export function CatCard () {
  const { fact, updateFact } = useCatFact()
  const { catImageSrc } = useCatImage({ fact })

  const handleClick = async () => {
    await updateFact()
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
