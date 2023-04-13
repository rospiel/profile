import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer id="contact">
      <div className="footer-container__content">
        <p className="footer-container__text">
          Entre em contato comigo e marcamos uma conversa.
        </p>
        <ul className="footer-container__contact">
          <li>rospielberg@gmail.com</li>
          <li>+55 11 99999-9999</li>
          <li><a className="footer-container__link" href="/">@linkedin</a></li>
        </ul>
        <p className="footer-container__copy">rospiel. Alguns direitos reservados</p>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.footer`
  background: var(--fifth-color);

  .footer-container__content {
    max-width: 1200px;
    padding: 120px 20px 60px 20px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
  }

  .footer-container__text {
    font-size: 1.5rem;
    line-height: 1.33;
    color: var(--fourth-color);
  }

  .footer-container__contact {
    font-weight: bold;
    font-size: 2.25rem;
    line-height: 1.1;
    color: var(--fourth-color);
    margin-bottom: 30px;
  }

  .footer-container__link {
    color: var(--fourth-color);
  }

  .footer-container__copy {
    grid-column: 1 / -1;
    font-size: 1.125rem;
    color: var(--seventh-color);
  }

  @media (max-width: 800px) {
    .footer-container__content {
      grid-template-columns: 1fr;
      gap: 40px;
    }

    .footer-container__contact {
      font-size: 1.5rem;
    }
  }

`