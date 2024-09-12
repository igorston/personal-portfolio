const projectBox = document.getElementById("project-box");
const mixedMessage = document.getElementById("mixed-message");
const porfolioSite = document.getElementById("portfolio-site");

mixedMessage.addEventListener("click", function (event) {
  event.stopPropagation();
  projectBox.innerHTML = `
    <h2>Projeto de Randomização de Arrays</h2>
    <p><strong>Descrição:</strong> Este projeto tem como objetivo demonstrar a importância da randomização de arrays no desenvolvimento de software, especialmente na criação de conteúdos dinâmicos e na geração de resultados imprevisíveis, algo essencial em diversas áreas da indústria de desenvolvimento, como jogos, marketing, testes automatizados e IA. O exemplo utiliza frases motivacionais e arte ASCII que são exibidas de forma aleatória a cada execução.</p>
    <br />
    <h3>Estrutura do Projeto:</h3>
    <p>O projeto é composto por três arrays de frases e um array de arte ASCII. A função de randomização seleciona aleatoriamente uma frase de introdução, uma frase intermediária, uma conclusão e um desenho ASCII para serem exibidos juntos a cada execução. A lógica principal é implementada em JavaScript, utilizando a função <code>Math.random()</code> para gerar números aleatórios que determinam a escolha dos itens nos arrays.</p>
    <br />
    <h3>Importância da Randomização para a Indústria do Desenvolvimento:</h3>
    <p>A randomização de arrays é uma técnica fundamental em várias aplicações do desenvolvimento de software. Aqui estão algumas das principais razões pelas quais essa técnica é tão valiosa:</p>
    <ul>
        <li><strong>Conteúdos Dinâmicos:</strong> Em sistemas de marketing digital, a randomização pode ser usada para exibir diferentes anúncios ou promoções a cada visita, maximizando o engajamento do usuário.</li>
        <li><strong>Testes Automatizados:</strong> Em testes de software, gerar dados aleatórios permite simular cenários imprevisíveis, ajudando a testar a robustez e a confiabilidade dos sistemas.</li>
        <li><strong>Jogos e IA:</strong> Em desenvolvimento de jogos, a randomização é usada para criar experiências variadas, como a geração de inimigos, itens ou mapas de maneira imprevisível, tornando o jogo mais desafiador e interessante.</li>
        <li><strong>Segurança e Criptografia:</strong> A geração de números aleatórios desempenha um papel crucial em algoritmos de criptografia e segurança, ajudando a proteger informações confidenciais e comunicações online.</li>
    </ul>
    <br />
    <h3>Funcionalidades Principais:</h3>
    <ul>
        <li><strong>Randomização de Frases:</strong> Utiliza a função <code>Math.random()</code> para selecionar aleatoriamente uma frase de introdução, uma frase intermediária e uma frase de conclusão de arrays pré-definidos.</li>
        <li><strong>Arte ASCII Aleatória:</strong> Um elemento visual é selecionado aleatoriamente a partir de um array de artes ASCII, oferecendo uma experiência visual única a cada execução.</li>
        <li><strong>Exibição Dinâmica:</strong> O conteúdo gerado é exibido dinamicamente no console, demonstrando como a randomização pode ser aplicada tanto para conteúdo textual quanto visual.</li>
    </ul>
    <br />
    <h3>Tecnologias Utilizadas:</h3>
    <ul>
        <li><strong>JavaScript:</strong> A linguagem principal utilizada para implementar a lógica de randomização e exibição dinâmica dos resultados.</li>
        <li><strong>ASCII Art:</strong> Um array de arte ASCII foi incluído para tornar o projeto visualmente mais interessante e demonstrar como a randomização pode ser aplicada além do texto.</li>
    </ul>
    <br />
    <h3>Desafios Enfrentados:</h3>
    <p><strong>Controle de Randomização:</strong> Garantir que os elementos fossem selecionados de maneira verdadeiramente aleatória, sem repetição de padrões perceptíveis em execuções consecutivas.</p>
    <br />
    <h3>Resultado:</h3>
    <p>Este projeto demonstra de maneira simples e eficaz o uso de randomização em arrays. Ele foi projetado para exibir frases motivacionais combinadas com desenhos ASCII, que podem ser utilizados em diversos contextos, como mensagens automáticas, interfaces dinâmicas ou até mesmo como parte de jogos e aplicativos interativos. A randomização agrega valor ao oferecer uma experiência de usuário imprevisível e variada a cada execução.</p>
    <br />
    <p><strong>Link do Projeto:</strong> <a href="https://github.com/igorston/mixedMessages" target="_blank">Veja o código completo no GitHub</a>.</p>
    `;
});

porfolioSite.addEventListener("click", function (event) {
  projectBox.innerHTML = `
        <h2>Desenvolvimento do Meu Portfólio Pessoal</h2>
        <p><strong>Descrição:</strong> Este projeto foi desenvolvido com o objetivo de criar uma plataforma digital onde eu pudesse exibir minhas habilidades, projetos e trajetória profissional de maneira clara e interativa. O portfólio foi pensado para ser responsivo e amigável tanto para usuários de desktop quanto para dispositivos móveis, utilizando uma combinação de HTML, CSS e JavaScript.</p>
        <br />
        <h3>Estrutura do Projeto:</h3>
        <p>O portfólio foi organizado de maneira modular, com um <strong>arquivo CSS principal</strong> que define os estilos globais e <strong>arquivos CSS individuais</strong> para cada página, permitindo uma maior flexibilidade e personalização em cada parte do site. Isso inclui páginas como:</p>
        <ul>
            <li><strong>Página Inicial:</strong> Uma apresentação geral sobre mim, minha formação, experiência profissional e habilidades técnicas.</li>
            <li><strong>Página de Projetos:</strong> Uma galeria interativa dos meus projetos, onde os visitantes podem clicar para ver detalhes de cada um.</li>
            <li><strong>Página de Contato:</strong> Um formulário simples e eficiente para que os visitantes entrem em contato comigo, além de links para redes sociais.</li>
        </ul>
        <br />
        <h3>Funcionalidades Principais:</h3>
        <ul>
            <li><strong>Menu de Navegação Dinâmico:</strong> O site conta com um <strong>menu responsivo</strong>, que abre e fecha com um clique, facilitando a navegação em diferentes dispositivos.</li>
            <li><strong>Transições Suaves:</strong> Utilizei animações CSS para criar efeitos de transição suaves em botões e elementos ao passar o mouse, aprimorando a experiência do usuário.</li>
            <li><strong>Conteúdo Dinâmico:</strong> Na página de projetos, implementei scripts em <strong>JavaScript</strong> para alterar o conteúdo exibido sem a necessidade de recarregar a página, oferecendo uma navegação mais fluida e eficiente.</li>
        </ul>
        <br />
        <h3>Tecnologias Utilizadas:</h3>
        <ul>
            <li><strong>HTML5:</strong> Estruturação do conteúdo e marcação semântica.</li>
            <li><strong>CSS3:</strong> Customização visual do site, utilizando flexbox para responsividade e efeitos de transição para interatividade.</li>
            <li><strong>JavaScript:</strong> Implementação de scripts para melhorar a navegação e a experiência do usuário, como a funcionalidade de abertura e fechamento do menu e a exibição dinâmica dos projetos.</li>
        </ul>
        <br />
        <h3>Desafios Enfrentados:</h3>
        <p><strong>Responsividade:</strong> Um dos maiores desafios foi garantir que o site ficasse bem ajustado tanto em dispositivos móveis quanto em telas maiores. A solução veio através da utilização de <strong>media queries</strong> e um layout baseado em <strong>flexbox</strong>.</p>
        <p><strong>Modularidade no CSS:</strong> A separação dos arquivos CSS por página, mantendo um arquivo central para estilos comuns, foi essencial para garantir a escalabilidade do projeto e a facilidade de manutenção no futuro.</p>
        <br />
        <h3>Resultado:</h3>
        <p>O portfólio foi criado com um design limpo, funcional e intuitivo, permitindo uma navegação fácil e direta pelos meus projetos e experiências. Além disso, ele reflete minhas habilidades técnicas e atenção aos detalhes, oferecendo uma plataforma ideal para minha presença digital.</p>
        <br />
        <p><strong>Link do Projeto:</strong> <a href="https://github.com/igorston/personal-portfolio" target="_blank">Veja o código completo no GitHub</a>.</p>
    `;
});
