import styles from './Nav.module.css'

export default function Footer() {
    return (
      
        <div className={styles.container}> 
            <div className={styles.brand}>Ronnelson.dev</div>
            <div className={styles.links}>
                <a href="/" alt="Home">Home</a>
                <a href="/about" alt="About Me">About</a>
                <a href="/blog" alt="blog">Blog</a>
            </div>
        </div>
    )
  }