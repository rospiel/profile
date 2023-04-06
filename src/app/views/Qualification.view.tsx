import styled from "styled-components";
import CourseItem, { CourseItemDescription, CourseItemProps } from "../components/CourseItem";
import QualificationItem, { QualificationDescription, QualificationItemProps } from "../components/QualificationItem";
import Subtitle from "../components/Subtitle";
import { SubtitleContainer } from "../components/Subtitle";
import detail from "../../detalhe.svg";

export default function Qualification() {

  function buildQualificationDescription(): QualificationDescription[] {
    const list = {} as QualificationItemProps;
    list.data = [];
    const one = {} as QualificationDescription;
    one.collegeName = "PUC Minas";
    one.typeCollege = "Pós Graduação"; 
    one.courseName = "Engenharia de Software";
    list.data.push(one);

    const two = {} as QualificationDescription;
    two.collegeName = "Centro Universitário FIEO";
    two.typeCollege = "Tecnólogo"; 
    two.courseName = "Análise e Desenvolvimento de Sistemas";
    list.data.push(two);

    const three = {} as QualificationDescription;
    three.collegeName = "Centro Paula Souza";
    three.typeCollege = "Técnico"; 
    three.courseName = "Informática";
    list.data.push(three);
    return list.data;
  }

  function buildCourseItemDescription(): CourseItemDescription[] {
    const list = {} as CourseItemProps;
    list.data = [];
    const one = {} as CourseItemDescription;
    one.name = "Global Code - Java";
    one.hours = "60h";
    list.data.push(one);

    const two = {} as CourseItemDescription;
    two.name = "Origamid - React";
    two.hours = "70h";
    list.data.push(two);

    return list.data;
  }

  function buildCourseItemDescriptionLanguages(): CourseItemDescription[] {
    const list = {} as CourseItemProps;
    list.data = [];
    const one = {} as CourseItemDescription;
    one.name = "English - Avançado";
    list.data.push(one);
    return list.data;
  }
  

  return (
    <QualificationContainer id="qualification" aria-label="qualification">
      <div className="qualification-container__content">
        <Subtitle text="Qualification" color="#fff" />
        <div>
          <p className="qualification-container__description">
            Trabalho atualmente na MPK prestando serviços ao <strong>Banco Sofisa</strong> e minha última experiência acadêmica foi a <strong>pós graduação em Engenharia de Software</strong>
          </p>
          <QualificationItem data={buildQualificationDescription()} />
          <CourseItem sessionName="Cursos Intensivos" data={buildCourseItemDescription()} />
          <CourseItem sessionName="Idiomas" data={buildCourseItemDescriptionLanguages()} isCssModifier={true} />
        </div>
      </div>

    </QualificationContainer>
  )
}

const QualificationContainer = styled.section`
  background: #141414;
  color: #fff;

  .qualification-container__content {
    max-width: 1200px;
    padding: 120px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 100px;
    position: relative;
  }

  .qualification-container__content::after {
    content: "";
    display: block;
    width: 130px;
    height: 100px;
    background: url(${detail}) no-repeat center;
    position: absolute;
    bottom: -50px;
    left: 20px;
  }

  .qualification-container__description {
    font-size: 1.5rem;
    line-break: 1.33;
    max-width: 40ch;
    margin-bottom: 60px;
    color: #a3a3a3;
  }

  .qualification-container__description strong {
    color: #fff;
  }

  @media (max-width: 800px) {
    .qualification-container__content {
      grid-template-columns: 1fr;
      padding: 60px 20px;
      gap: 40px;
    }

    ${SubtitleContainer} {
      color: #fff;
    }

    .qualification-container__description {
      font-size: 1.25rem;
    }
  }

`