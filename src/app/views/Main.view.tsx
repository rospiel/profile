import styled from "styled-components";
import profile from "../../perfil.jpg";
import detail from "../../detalhe.svg";

export default function Main() {
  return (
    <MainContainer>
      <img className="main-container__image" src={profile} alt="profile" />
      <div>
        <h1 className="main-container__title">Software Engineer</h1>
        <p className="main-container__subtitle" >Localizado em São Paulo</p>
      </div>
    </MainContainer>
  )
}

const MainContainer = styled.main`
  max-width: 1200px;
  padding: 40px 20px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 100px;
  align-items: center;
  position: relative;

  .main-container__title {
    font-size: 4.5rem;
    line-height: 1.125;
    margin-bottom: 30px;
  }

  .main-container__title::before {
    content: "";
    display: block;
    width: 130px;
    height: 100px;
    background: url(${detail}) no-repeat center;
    position: absolute;
    z-index: -1;
  }

  .main-container__subtitle {
    font-size: 1.5rem;
    color: #525252;
  }

  @media (max-width: 1000px) {
    .main-container__title {
      font-size: 3rem;
    }
  } 

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 40px;

    .main-container__title {
      font-size: 2rem;
    }

    .main-container__title::before {
      width: 30px;
      height: 10px;
    }
  } 

    @media (max-width: 400px) {
      grid-template-columns: 1fr;
      text-align: center;

      .main-container__image {
        display: none;
      }
    }
`