import React from 'react'

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/38871462?s=460&u=ce913502bf2c2b1e0bca4b78c7f1e04d971c876c&v=4" alt="Gabriel Antunes" />
        <div>
          <strong>Gabriel Antunes</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
            <br /><br />
            Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.
          </p>

      <footer>
        <p>
          Preço
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;