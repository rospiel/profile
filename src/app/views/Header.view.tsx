import styled from "styled-components"
import Menu from "./Menu.view"

export default function Header() {
  return (
    <HeaderContainer>
      <span className="header-container__logo">RODRIGO SANTOS</span>
      <Menu />
    </HeaderContainer>

  )
} 

const HeaderContainer = styled.header`
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .header-container__logo {
    font-size: 2rem;
    font-weight: bold;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    gap: 40px;
    padding: 20px;
  }
`