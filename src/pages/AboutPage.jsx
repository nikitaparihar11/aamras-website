import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <div>
      <div style={{ 
        padding: '120px 60px', 
        textAlign: 'center',
        minHeight: '100vh',
        background: '#fffbf2'
      }}>
        <h1 style={{ fontSize: '2.8rem', color: '#1a1a1a', marginBottom: '16px' }}>
          About Us 🥭
        </h1>
        <p style={{ color: '#888', fontSize: '1.1rem', marginBottom: '30px' }}>
          Rooted in the rich culinary heritage of Gujarat, we take pride in serving the finest Kesar Kairi Aamras—a timeless delicacy crafted with tradition, purity, and uncompromising quality.

Every batch is prepared from carefully selected Kesar raw mangoes, preserving their natural aroma, vibrant flavor, and refreshing essence. Our recipe celebrates authenticity, blending age-old techniques with premium ingredients to create an experience that is both nostalgic and refined.
        </p>
        <Link 
          to="/" 
          style={{
            padding: '12px 30px',
            background: '#f5a623',
            color: 'white',
            borderRadius: '50px',
            textDecoration: 'none',
            fontWeight: '500'
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  )
}

export default AboutPage