import './App.css'
import profilePhoto from './assets/profilephoto.jpeg'

function App() {
  const projects = [
    {
      id: 1,
      title: "ChatBot para WhatsApp",
      description: "Chatbot utilizando a lib whatsapp-web.js para automação de mensagens e integração com APIs externas.",
      technologies: ["Javascript", "whatsapp-web.js", "API Integration"],
      link: "#",
      github: "https://github.com/JoClaSS/botWpp"
    },
    {
      id: 2,
      title: "Joystick USB para PC",
      description: "Joystick prototipado com Arduino e integrado a um aplicativo React para controle de jogos e simulações.",
      technologies: ["React", "Arduino", "C#"],
      link: "#",
      github: "https://github.com/JoClaSS/JoystickMicrocontrolador"
    },
    {
      id: 3,
      title: "Sistema de Ponto Eletrônico",
      description: "Um sistema para registro de ponto eletrônico utilizando React, Spring Boot e PostgreSQL.",
      technologies: ["React", "Spring Boot", "PostgreSQL", "TypeScript"],
      link: "#",
      github: "https://github.com/JoClaSS/PontoEletronico"
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section id="hero">
        <div className="hero-content">
          <div className="profile-image">
            <img 
              src={profilePhoto} 
              alt="José - Desenvolvedor Java"
              className="profile-photo"
            />
          </div>
          <div className="hero-text">
            <h1>Olá, eu sou José</h1>
            <h2 className="title">Desenvolvedor Java</h2>
            <p className="intro">
              Atuo com o desenvolvimento Web há mais de 4 anos, criando soluções robustas para diversos setores.
              Transformo ideias em soluções digitais inovadoras. 
            </p>
            <div className="hero-buttons">
              <a href="#projetos" className="btn-primary">Ver Projetos</a>
              <a href="#sobre" className="btn-secondary">Sobre Mim</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="about-section">
        <div className="container">
          <h2>Sobre Mim</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                Sou um desenvolvedor apaixonado por tecnologia com experiência em criar 
                aplicações web modernas. Com foco em código limpo e experiência do usuário excepcional.
              </p>
              <p>
                Tenho experiência trabalhando com tecnologias como Java, ecossistema Spring, como Spring Boot e Spring Batch, React, TypeScript, 
                PostgreSQL e diversas ferramentas de desenvolvimento. Sempre em busca de novos 
                desafios e oportunidades para crescer profissionalmente.
              </p>
            </div>
            <div className="skills">
              <h3>Tecnologias</h3>
              <div className="skills-grid">
                <div className="skill-item">Java</div>
                <div className="skill-item">TypeScript</div>
                <div className="skill-item">Angular</div>
                <div className="skill-item">React</div>
                <div className="skill-item">Spring Boot</div>
                <div className="skill-item">PostgreSQL</div>
                <div className="skill-item">Git</div>
                <div className="skill-item">AWS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projetos" className="projects-section">
        <div className="container">
          <h2>Projetos Pessoais</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <h3>{project.title}</h3>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} className="project-link">GitHub</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="contact-section">
        <div className="container">
          <h2>Vamos Trabalhar Juntos?</h2>
          <p>Estou sempre aberto a novas oportunidades e projetos interessantes.</p>
          <div className="contact-links">
            <a href="mailto:jclaercio8@gmail.com" className="contact-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Email
            </a>
            <a href="https://www.linkedin.com/in/jose-claercio/" className="contact-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              LinkedIn
            </a>
            <a href="https://github.com/JoClaSS" className="contact-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M22 16V22.130435C22 22.3295 21.9113 22.5209 21.7556 22.6543C21.5999 22.7877 21.3906 22.8507 21.1765 22.8276L16 22V16M22 16L18.5 12.5L16 16M16 16V9.38006C16 8.15465 15.2677 7.08943 14.1257 6.73473C13.7831 6.63303 13.4156 6.63958 13.0784 6.75377C12.7412 6.86796 12.4544 7.08373 12.2647 7.36957L9 12.5L7.5 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
