import styled from "styled-components";
import Tag from "./Tag";

export interface CompanyProps {
  year: string;
  name: string;
  job: string;
  description: string;
  skills: string[];
}

export default function Company(props: CompanyProps) {
  return (
    <>
      <CompanyContainer>
        <span className="company-container__year">{props.year}</span>
        <h3 className="company-container__name">{props.name}</h3>
        <span className="company-container__job">{props.job}</span>
        <p className="company-container__description">{props.description}</p>
        <Tag names={props.skills} />
      </CompanyContainer>
    </>
  )
}

const CompanyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 20px;
  padding: 20px;
  background: #f5f5f5;
  margin-bottom: 20px;
  border-radius: 4px;
  position: relative;

  ::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(#b6f829, #67dd0a);
    position: absolute;
    top: 20px;
    left: -4px;
  }
  
  .company-container__year {
    position: absolute;
    top: 22px;
    left: -100px;
    color: #525252;
    font-size: 0.875rem;
    width: 80px;
    text-align: right;
  }

  .company-container__name, .company-container__job {
    font-size: 1.125rem;
    line-height: 1.1;
    font-weight: bold;
  }

  .company-container__description {
    font-size: 0.875rem;
    line-height: 1.4;
    color: #525252;
  }

  @media (max-width: 800px) {
    .company-container__year {
      position: initial;
      order: 1; /* put in the end because other elements don't have order informed */
      width: initial;
      text-align: left;
    }
  }

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`