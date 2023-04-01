import styled from "styled-components"
import Company from "../components/Company"
import Subtitle from "../components/Subtitle"

export default function Experience() {
  let jobs: { year: string, name: string, job: string, description: string, skills: string[] }[] = [
    {
      year: "2023", name: "Sofisa", job: "Engenheiro de Software", description: "Trabalhando nos módulos de pagamento bem como investimentos",
      skills: ["Java", "Spring", "React", "Microservices"]
    },

    {
      year: "2021", name: "Americanas S/A", job: "Desenvolvedor Java", description: "Trabalhando nos módulos de pagamento bem como investimentos",
      skills: ["Java", "Spring", "Sql Server", "Microservices"]
    },

    {
      year: "2020", name: "Capco", job: "Desenvolvedor Java", description: "Trabalhando nos módulos de pagamento bem como investimentos",
      skills: ["Java", "Spring", "Oracle", "Microservices"]
    }
  ]

  return (
    <>
      <ExperienceContainer id="experience" aria-label="Experience">
        <Subtitle text="Experience" color="#e0e0e0" />
        <div>
          <p className="experience-container__text">Desenvolvo projetos usando <strong>Java</strong> e <strong>Spring</strong> além de dedicar esforço em melhorar minhas habilidades em <strong>Frontend com React</strong>.</p>
        
          {
            jobs.map((item, position) => {
              return <Company key={position}
                        year={item.year} 
                        name={item.name}
                        job={item.job}
                        description={item.description}
                        skills={item.skills} />
            })
          }
        </div>
      </ExperienceContainer>
    </>
  )
}

const ExperienceContainer = styled.section`
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;

  .experience-container__text {
    font-size: 1.5rem;
    line-height: 1.33;
    max-width: 40ch;
    margin-bottom: 60px;
    color: #525252;
  }

  .experience-container__text strong {
    color: #141414;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 40px;

    .experience-container__text {
      font-size: 1.25rem;
    }
  }

`