import { motion } from 'framer-motion'

function MenuCard({ name, description, price, image, index }) {
  return (
    <motion.div
      className="menu-card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
    >
      <div className="menu-card__img-wrapper">
        <img src={image} alt={name} className="menu-card__img" />
      </div>
      <h3 className="menu-card__name">{name}</h3>
      <p className="menu-card__desc">{description}</p>
      <div className="menu-card__footer">
        <span className="menu-card__price">{price}</span>
        <button className="menu-card__btn">Add to Order</button>
      </div>
    </motion.div>
  )
}

export default MenuCard