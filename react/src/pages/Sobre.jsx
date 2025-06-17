import React from "react";

function Sobre() {
  return (
    <div>
      <header>
        <object width="100%" height="200px" data="menu.html" />
      </header>

      <main className="container mt-4 mb-5">
        <div className="text-center mb-4">
          <img src="Imagens/ifsp.png" alt="Logo IFSP" width="120" />
        </div>

        <h1>Sobre</h1>

        <p><strong>O Instituto Federal de Educação, Ciência e Tecnologia de São Paulo</strong> – é uma autarquia federal de ensino.</p>

        <p>Fundada em 1909, como Escola de Aprendizes Artífices, é reconhecida pela sociedade paulista por sua excelência no ensino público gratuito de qualidade.</p>

        <p>Durante sua história, recebeu, também, os nomes de Escola Técnica Federal de São Paulo e Centro Federal de Educação Tecnológica de São Paulo. Com a transformação em Instituto, em dezembro de 2008, passou a ter relevância de universidade, destacando-se pela autonomia.</p>

        <p>Com a mudança, o Instituto Federal de São Paulo passou a destinar 50% das vagas para os cursos técnicos e, no mínimo, 20% das vagas para os cursos de licenciatura, sobretudo nas áreas de Ciências e da Matemática. Complementarmente, continuará oferecendo cursos de formação inicial e continuada, tecnologias, engenharias e pós-graduação.</p>

        <p>Além dos cursos presenciais, o Instituto Federal de São Paulo oferece os cursos Técnicos em Administração e em Informática para Internet e, a partir de 2012, o superior de Formação de Professores na modalidade de Ensino a Distância (EaD).</p>

        <p>O IFSP é organizado em diversos câmpus e possui mais de 40 mil alunos matriculados nas 36 unidades distribuídas pelo estado de São Paulo.</p>

        <p>Localizado em <strong>Rua Pedro Vicente, 625 - Canindé - São Paulo - SP - Brasil - Cep: 01109-010</strong></p>

        <div className="text-center mt-4">
          <img src="Imagens/facebook.png" alt="Facebook" width="32" height="32" />
        </div>

        <p className="text-center text-muted mt-3">
          IFSP - Câmpus Pirituba - Av. Mutinga, 951 - Jardim Santo Elias - CEP: 05110-000 - São Paulo/SP - Contato: (011) 2504-0100
        </p>
      </main>

      <footer>
        <object width="100%" height="200px" data="rodape.html" />
      </footer>
    </div>
  );
}

export default Sobre;
