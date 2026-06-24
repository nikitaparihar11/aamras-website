import { motion } from 'framer-motion'
import './About.css'
import about1 from '../assets/about1.png'
import about2 from '../assets/about2.png'

function About() {
  return (
    <section className="about">

      <motion.div
        className="about__heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="about__tag">આમ્રસ નો ઇતિહાસ</p>
        <h2 className="about__main-title">The Heart of <span>Gujarat</span></h2>
      </motion.div>

      <div className="about__row">
        <motion.div
          className="about__img-side"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="about__img-wrapper">
            <img src={about1} alt="Aamras Bowl" className="about__img" />
          </div>
        </motion.div>

        <motion.div
          className="about__text-side"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="about__tag">આમ્રસ નો ઇતિહાસ</p>
          <h2 className="about__title">The Story of <span>Aamras</span></h2>
          <p className="about__desc">
            Aamras is a traditional Gujarati delicacy made from ripe mango pulp.
            It has been a staple in Gujarati households for centuries, served during
            summer festivals and special occasions with hot puris.
          </p>
          <p className="about__desc">
            The word "Aamras" comes from "Aam" (mango) and "Ras" (juice/pulp) in
            Gujarati and Hindi. Gujarat is home to the finest Kesar mangoes in the
            world, grown in the Gir region of Saurashtra.
          </p>
          <div className="about__tags">
            <span>🥭 Kesar Mango</span>
            <span>🌿 100% Natural</span>
            <span>❤️ Traditional Recipe</span>
            <span>🏡 Home Style</span>
          </div>
        </motion.div>
      </div>

      <div className="about__row about__row--reverse">
        <motion.div
          className="about__text-side"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="about__tag">ગુજરાત નો ગર્વ</p>
          <h2 className="about__title">Why Gujarat's <span>Aamras?</span></h2>
          <p className="about__desc">
            Gujarat's Kesar mango is known as the "Queen of Mangoes" — with its
            deep saffron colour, rich aroma and naturally sweet taste. No sugar
            needed, just pure mango goodness.
          </p>
          <p className="about__desc">
            We source our mangoes directly from farms in Talala, Gir — the heartland
            of Kesar mango cultivation. Every bowl of our Aamras carries the warmth
            of Gujarat in every spoon.
          </p>
          <div className="about__tags">
            <span>🌅 Gir Region</span>
            <span>👨‍🌾 Farm Fresh</span>
            <span>✨ Kesar Variety</span>
            <span>🍯 No Added Sugar</span>
          </div>
        </motion.div>

        <motion.div
          className="about__img-side"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="about__img-wrapper">
            <img src={about2} alt="Kesar Mango" className="about__img" />
          </div>
        </motion.div>
      </div>

    </section>
  )
}

export default About