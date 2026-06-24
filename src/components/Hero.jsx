import './Hero.css'
import heroBg from '../assets/hero-bg.jpg'
import { motion } from 'framer-motion'
import mango from '../assets/mango.png'

function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero__overlay" />
      <div className="hero__content">

        <motion.div
          className="hero__left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="hero__gujarati">આમ્રસ</p>
          <h1 className="hero__title">
            Pure Mango <br />
            <span>Bliss</span>
          </h1>
          <p className="hero__subtitle">
            Experience the pure taste of Gujarati Aamras — made from the finest Kesar and Alphonso mangoes, just like your dadi made it.
          </p>
          <div className="hero__buttons">
            <button className="btn btn--primary">અત્યારે ઓર્ડર કરો</button>
            <button className="btn btn--outline">Our Story ↓</button>
          </div>
          <div className="hero__stats">
            <div className="hero__stat">
              <h3>24k+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="hero__stat">
              <h3>15+</h3>
              <p>Mango Varieties</p>
            </div>
            <div className="hero__stat">
              <h3>100%</h3>
              <p>Pure & Natural</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero__right"
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        >
          <div className="hero__img-wrapper">
            <img src={mango} alt="Aamras" className="hero__dish-img" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero