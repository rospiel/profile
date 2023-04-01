import styled from "styled-components";

export interface SubtitleProps {
  text: string
  color?: string
}

export default function Subtitle(props: SubtitleProps) {
  return (
    <SubtitleContainer color={props.color}>{props.text}</SubtitleContainer>
  )
}

const SubtitleContainer = styled.h2`
  font-size: 8rem;
  line-height: 1;
  text-transform: uppercase;
  word-break: break-all;
  max-width: 4ch;
  color: ${(props) => props.color || "#141414"};

  @media (max-width: 800px) {
    color: #141414;
    font-size: 3rem;
    text-transform: capitalize;
    max-width: initial;
  }
`