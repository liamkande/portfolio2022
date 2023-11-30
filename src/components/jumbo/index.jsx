import './jumbo.styles.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt} from 'react-icons/fa'

const resumeUrl = 'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/LiamKandeResume-11-11-2023-1.pdf?alt=media&token=a7b92897-3a43-4342-97e4-c541c68fd1ec'
const mitLogo = 'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/mit-logo.png?alt=media&token=a99ae95a-e31e-4e05-836d-8047050ef97f'
const metaLogo = 'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/meta-logo.png?alt=media&token=cf62cc84-543f-4d83-8dd3-1618220f3d32'
const mitDegree = 'https://certificates.emeritus.org/366dabb4-7b28-4d84-a2b7-278ac3560975'
const metaDegree = 'https://coursera.org/share/1449c237710541d5f0586a391166291a'
const Jumbo = () => {
    return (
        <article className="jumbo-container">
            <article>
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-around',
                }}>
                     <a
                         href={metaDegree}
                         target="_blank"
                         rel="noreferrer"
                     >
                          <img
                              alt={`Meta Degree`}
                              src={metaLogo}
                              style={{width: 100}}
                          />
                    </a>
                    <img
                        alt={`profile`}
                        src="https://avatars.githubusercontent.com/u/23286067?v=4"
                        className="avatar"
                    />
                     <a
                         href={mitDegree}
                         target="_blank"
                         rel="noreferrer"
                     >
                      <img
                          alt={`MIT Degree`}
                          src={mitLogo}
                          style={{width: 60}}
                      />
                </a>
                </span>

                <h3 style={{margin: 20}}>
                    I’m a results-driven software engineer with over 8 years of proven expertise in
                    developing cutting-edge mobile and web applications. I’m also a MIT graduate
                    with a Post-graduate Degree in Professional Coding: Full Stack Development,
                    achieving a remarkable 98% final score and a 4.0 GPA. Specialized in leveraging
                    advanced technologies, including:

                    <span style={{color: '#4879B2'}}>
            {' '}
                        React | React Native | Redux | GraphQL | JavaScript | Node | React
            Hooks | TypeScript | TensorflowJS | RESTful API | Flexbox | Emotion
            | CSS3 | HTML5 | ES6/7+ | Machine Learning...
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
                    href="mailto:liamkande@icloud.com?"
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
                        <FaEnvelope size={33}/>{' '}
                        <span style={{padding: 11}}>liamkande@icloud.com</span>
                    </div>
                </a>
                <a
                    href="tel:424-303-3817"
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
                        <FaPhoneAlt size={33}/>
                        <span style={{padding: 8}}> 424-303-3817</span>
                    </div>
                </a>
                <div style={{margin: 12}}>
                    <a
                        href="https://www.linkedin.com/in/liamkande/"
                        target="_blank"
                        rel="noreferrer"
                        style={{marginRight: 33, color: '#312F2F'}}
                    >
                        <FaLinkedin size={60}/>
                    </a>
                    <a
                        href="https://github.com/liamkande"
                        target="_blank"
                        rel="noreferrer"
                        style={{color: '#312F2F'}}
                    >
                        <FaGithub size={60}/>
                    </a>
                </div>
            </address>
            <button
                className="custom-button"
                onClick={() =>
                    window.open(resumeUrl)
                }
            >
                View Resume
            </button>
        </article>
    )
}

export default Jumbo
