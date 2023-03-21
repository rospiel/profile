import styled from "styled-components"

export default function Menu() {
  return (
    <MenuContainer>
      <ul className="menu-container__options">
        <li><a className="menu-container__link" href="#experience">Experience</a></li>
        <li><a className="menu-container__link"  href="#vocational">Vocational</a></li>
        <li><a className="menu-container__link"  href="#contact">Contact</a></li>
      </ul>
    </MenuContainer>
  )
}

const MenuContainer = styled.nav`
  .menu-container__options {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: center;
  }

  .menu-container__link {
    font-size: 1.125rem;
    line-height: 1.3;
    padding: 10px 20px;
    text-decoration: none;
    color: #141414;
    display: block;
  }

  @media (max-width: 800px) {
    .menu-container__link {
      background: #f5f5f5;
    }
  }
`