import styled from "styled-components";

export interface QualificationDescription {
  typeCollege: string;
  courseName: string;
  collegeName: string;
}

export interface QualificationItemProps {
  data: QualificationDescription[];
}

export default function QualificationItem({ data }: QualificationItemProps) {
  return (
    <QualificationItemContainer>
      {
        data.map((item, position) => {
          return (
            <li key={position} className="qualification-item-container__college">
              <span className="qualification-item-container__type-college">{item.typeCollege}</span>
              <h3 className="qualification-item-container__course">{item.courseName}</h3>
              <span className="qualification-item-container__name">{item.collegeName}</span>
            </li>
          )
        })
      }
      
    </QualificationItemContainer>
  )
}

const QualificationItemContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 60px;

  .qualification-item-container__college {
    flex: 1 /* every item with the same size */;
    background: #000;
    padding: 20px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
  }

  .qualification-item-container__type-college {
    font-size: 0.875rem;
    text-transform: uppercase;
    color: #a3a3a3;
    margin-bottom: 10px;
  }

  .qualification-item-container__course {
    flex: 1;
    font-size: 1.125rem;
    line-height: 1.4;
    margin-bottom: 40px;
    position: relative;
  }

  .qualification-item-container__course::before {
    content: "";
    display: block;
    width: 4px;
    height: 20px;
    background: linear-gradient(#b6f829, #67dd0a);
    position: absolute;
    left: -24px;
  }

  .qualification-item-container__name {
    font-size: 1.125rem;
    color: #a3a3a3;
  }
`