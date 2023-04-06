import styled from "styled-components";
import course from "../../cursos.svg";
import languages from "../../idiomas.svg";

export interface CourseItemDescription {
  name: string;
  hours: string;
}

export interface CourseItemProps {
  data: CourseItemDescription[];
  sessionName: string;
  isCssModifier?: boolean;
}

export default function CourseItem({ data, sessionName, isCssModifier }: CourseItemProps) {
  return (
    <CourseItemContainer isCssModifier={isCssModifier || false}>
      <div className="course-item-container__detail">
        <h3 className="course-item-container__session-name course-item-container__session-name--language">{sessionName}</h3>
        <ul>
          {
            data.map((item, position) => {
              return <li key={position} className="course-item-container__item">{item.name} <span className="course-item-container__hour">{item.hours}</span></li>
            })
          }
        </ul>
      </div>
    </CourseItemContainer>
  )
}

const CourseItemContainer = styled.div<{isCssModifier?: boolean}>`
  margin-bottom: 60px;

  .course-item-container__session-name {
    font-size: 0.875rem;
    line-height: 1.4;
    color: #8f8f8f;
    text-transform: uppercase;
    margin-bottom: 30px;
    position: relative;
  }

  .course-item-container__session-name::before {
    display: block;
    content: "";
    width: 24px;
    height: 24px;
    background: url(${course}) no-repeat center center;
    position: absolute;
    left: -36px;
    top: -4px;
  }

  ${props => props.isCssModifier && `
    .course-item-container__session-name--language::before {
      background: url(${languages}) no-repeat center center;
    }

  `}

  .course-item-container__item {
    font-size: 1.125rem;
    line-height: 1.1;
    margin-bottom: 20px;
  }

  .course-item-container__hour {
    color: #8f8f8f;
  }

  @media (max-width: 800px) {
    .course-item-container__session-name::before {
      position: initial;
      margin-bottom: 10px;
    }
  }
    
`