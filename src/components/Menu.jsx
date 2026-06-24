import { useState } from 'react'
import MenuCard from './MenuCard'
import menuItems from '../data/menuData'
import './Menu.css'
import { motion } from 'framer-motion'

const categories = ['all', 'classic', 'premium', 'combo', 'drinks', 'dessert']

function Menu() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory)

  return (
    <section className="menu">
      <motion.div
  className="menu__header"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
        <h2 className="menu__title">Our Menu</h2>
        <p className="menu__subtitle">Fresh, pure and made with love</p>
      </motion.div>

      <motion.div
  className="menu__filters"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  viewport={{ once: true }}
>
        {categories.map(cat => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      <div className="menu__grid">
        {filtered.map((item, index) => (
  <MenuCard
    key={item.id}
    name={item.name}
    description={item.description}
    price={item.price}
    image={item.image}
    index={index}
  />
))}
      </div>
    </section>
  )
}

export default Menu