import './jumbo.styles.css'
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa'

const Jumbo = () => {
  return (
    <article className="jumbo-container">
      <article>
        <img
          alt={`profile`}
          src="https://avatars.githubusercontent.com/u/23286067?v=4"
          className="card-image"
        />
        <h3 style={{ margin: 20 }}>
          I'm a software engineer with over 7 years of experience in mobile and
          web apps development offering advanced knowledge of :
          <span style={{ color: '#4879B2' }}>
            {' '}
            React | React Native | Redux | GraphQL | JavaScript | React Hooks |
            NodeJS | TypeScript | RESTful API | SASS | Flexbox | CSS3 | HTML5 |
            ES6 | ES7...
          </span>
        </h3>
      </article>

      <address
        style={{
          margin: 12,
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <a
          href="liamkande@icloud.com"
          style={{
            fontSize: 24,
            textDecoration: 'none',
            color: '#312F2F',
            margin: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaEnvelope size={33} />{' '}
            <span style={{ padding: 11 }}>liamkande@icloud.com</span>
          </div>
        </a>
        <a
          href="tel:646-717-0370"
          style={{
            fontSize: 24,
            textDecoration: 'none',
            color: '#312F2F',
            margin: 12,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <FaPhoneAlt size={33} />
            <span style={{ padding: 8 }}> 646-717-0370</span>
          </div>
        </a>
        <div style={{ margin: 12 }}>
          <a
            href="https://www.linkedin.com/in/liamkande/"
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: 33, color: '#312F2F' }}
          >
            <FaLinkedin size={60} />
          </a>
          <a
            href="https://github.com/liamkande"
            target="_blank"
            rel="noreferrer"
            style={{ color: '#312F2F' }}
          >
            <FaGithub size={60} />
          </a>
        </div>
      </address>
      <button
        className="custom-button"
        onClick={() =>
          window.open(
            'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/Liam_Kande%CC%81_Resume1111(2022).pdf?alt=media&token=9728c63f-3660-408b-87bb-148ade4efa50'
          )
        }
      >
        View Resume
      </button>
    </article>
  )
}

export default Jumbo
