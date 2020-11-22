import styles from './Hero.module.css'

export default function Hero({url, alt, title, cta}) {
    return (
      
        <div className={styles.container}>
            <img src={url} alt={alt}/>
            <h1>{title}</h1>
            <button>{cta}</button>  

        </div>
    )
  }