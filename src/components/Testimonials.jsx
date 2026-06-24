import { motion } from 'framer-motion'
import './Testimonials.css'

const reviews = [
  {
    id: 1,
    name: "Priya Patel",
    location: "Ahmedabad, Gujarat",
    review: "The Kesar Aamras here took me straight back to my dadi's kitchen. Pure, thick and absolutely divine. Nothing artificial, just real mango bliss.",
    stars: 5,
    avatar: "PP"
  },
  {
    id: 2,
    name: "Rajan Shah",
    location: "Surat, Gujarat",
    review: "I've had aamras all my life but this is on another level. The Aamras Puri combo is unbeatable. Reminded me of summer afternoons in Gir.",
    stars: 5,
    avatar: "RS"
  },
  {
    id: 3,
    name: "Meera Desai",
    location: "Vadodara, Gujarat",
    review: "Finally found authentic Gujarati Aamras outside of home. The mango pulp is so fresh and naturally sweet. Will definitely order again!",
    stars: 5,
    avatar: "MD"
  },
  {
    id: 4,
    name: "Anjali Mehta",
    location: "Rajkot, Gujarat",
    review: "The Mango Lassi is absolutely heavenly! Thick, creamy and full of real mango flavour. Best I've ever had outside of Gujarat.",
    stars: 5,
    avatar: "AM"
  },
  {
    id: 5,
    name: "Vishal Joshi",
    location: "Junagadh, Gujarat",
    review: "Aamras Kulfi is a masterpiece. The perfect summer dessert — rich mango flavour and creamy texture. My whole family loved it!",
    stars: 5,
    avatar: "VJ"
  },
  {
    id: 6,
    name: "Kavya Shah",
    location: "Gandhinagar, Gujarat",
    review: "Ordered the Aamras Puri combo and was blown away. The aamras was thick, sweet and perfectly chilled. Tasted just like home!",
    stars: 5,
    avatar: "KS"
  }
]

function Testimonials() {
  return (
    <section className="testimonials">
      <motion.div
        className="testimonials__header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <p className="testimonials__tag">અભિપ્રાય</p>
        <h2 className="testimonials__title">What Our <span>Customers</span> Say</h2>
        <p className="testimonials__subtitle">Real reviews from real mango lovers</p>
      </motion.div>

      <div className="testimonials__marquee-wrapper">
        <div className="testimonials__marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-card__stars">
                {'★'.repeat(review.stars)}
              </div>
              <p className="testimonial-card__review">"{review.review}"</p>
              <div className="testimonial-card__footer">
                <div className="testimonial-card__avatar">
                  {review.avatar}
                </div>
                <div>
                  <h4 className="testimonial-card__name">{review.name}</h4>
                  <p className="testimonial-card__location">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials