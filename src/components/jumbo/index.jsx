import './jumbo.styles.css'
import {FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt} from 'react-icons/fa'

const Jumbo = () => {
    return (
        <article className="jumbo-container">
            <article>
                <img
                    alt={`profile`}
                    src="https://avatars.githubusercontent.com/u/23286067?v=4"
                    className="card-image"
                />
                <h3 style={{margin: 20}}>
                    I’m a results-driven software engineer with over 8 years of experience
                    in mobile and web app development. Committed to delivering
                    high-quality solutions by leveraging cutting-edge technologies with
                    strong problem-solving skills and a collaborative team player mindset.
                    Advanced expertise in:
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
                    window.open(
                        'https://firebasestorage.googleapis.com/v0/b/liam-portfolio.appspot.com/o/LiamKande(2023).pdf?alt=media&token=f261eb70-c9a3-491f-888c-d5d46259eb6c&_gl=1*w8lolu*_ga*Nzc4NjUyOTguMTY4MTkyNDgzNQ..*_ga_CW55HF8NVT*MTY4NjUxNDYzNS42LjEuMTY4NjUxNDY3NC4wLjAuMA..'
                    )
                }
            >
                View Resume
            </button>
        </article>
    )
}

export default Jumbo
