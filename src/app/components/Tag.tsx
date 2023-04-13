import styled from "styled-components";

export interface TagProps {
  names: string[];
}

export default function Tag(props: TagProps) {
  return (
    <TagContainer>
      {
        props.names.map((value, position) => {
          return <li className="tag-container__skill" key={position}>{value}</li>
        })
      }
    </TagContainer>
  )
}

const TagContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-content: flex-start;

  .tag-container__skill {
    font-size: 0.875rem;
    line-height: 1.4;
    border-radius: 4px;
    background: var(--fourth-color);
    padding: 5px 10px;
  }
`