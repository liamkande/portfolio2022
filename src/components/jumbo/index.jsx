import './jumbo.styles.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const links = {
  resumeUrl:
    'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/LiamKandeResume1024.pdf?alt=media&token=53c63d3e-29c0-4a2d-9699-814d540e4b72',
  mitLogo:
    'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/mit-logo.png?alt=media&token=a99ae95a-e31e-4e05-836d-8047050ef97f',
  metaLogo:
    'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/meta-logo.png?alt=media&token=cf62cc84-543f-4d83-8dd3-1618220f3d32',
  mitDegree:
    'https://certificates.emeritus.org/366dabb4-7b28-4d84-a2b7-278ac3560975',
  metaDegree: 'https://coursera.org/share/1449c237710541d5f0586a391166291a',
  profilePic: 'https://avatars.githubusercontent.com/u/23286067?v=4',
  spiritSyncUrl: 'https://spiritsync.ai/',
  linkedIn: 'https://www.linkedin.com/in/liamkande/',
  github: 'https://github.com/liamkande',
}

const Jumbo = () => {
  return (
    <article className="jumbo-container">
      <article>
        <span
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <a href={links.metaDegree} target="_blank" rel="noreferrer">
            <img
              alt={`Meta Degree`}
              src={links.metaLogo}
              style={{ width: 88 }}
            />
          </a>
          <img alt={`profile`} src={links.profilePic} className="avatar" />
          <a href={links.mitDegree} target="_blank" rel="noreferrer">
            <img alt={`MIT Degree`} src={links.mitLogo} style={{ width: 60 }} />
          </a>
        </span>
        <div className="title">
          Founder • Full Stack Developer • MIT Graduate
          <br />
          <a href={links.spiritSyncUrl} className="spirit-sync-link">
            SpiritSync.AI 🎉
          </a>
        </div>
        <h3 style={{ margin: 20 }}>
          I’m a results-driven software engineer with over 9 years of proven
          expertise in developing cutting-edge mobile and web applications. I’m
          also a MIT graduate with a Post-graduate Degree in Professional
          Coding: Full Stack Development, achieving a remarkable 98% final score
          and a 4.0 GPA. Specialized in leveraging advanced technologies,
          including:
          <span style={{ color: '#4879B2' }}>
            {' '}
            React | React Native | Redux | GraphQL | JavaScript | Node | React
            Hooks | TypeScript | TensorflowJS | RESTful API | Flexbox | Emotion
            | CSS3 | HTML5 | ES6/7+ | Machine Learning | LangChain | OpenAI...
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
        <div style={{ margin: 12 }}>
          <a
            href={links.linkedIn}
            target="_blank"
            rel="noreferrer"
            style={{ marginRight: 33, color: '#312F2F' }}
          >
            <FaLinkedin size={60} />
          </a>
          <a
            href={links.github}
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
        onClick={() => window.open(links.resumeUrl)}
      >
        View Resume
      </button>
    </article>
  )
}

export default Jumbo
