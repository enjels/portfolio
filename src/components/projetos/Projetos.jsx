import "./Projetos.css";
const Projetos = () => {
  const proj = [
    {
      id: 1,
      imagem:
        "https://i.pinimg.com/736x/b4/08/6f/b4086f75d9120567be99b0e1c1e7da26.jpg",
      link: "https://countdown-bice-six.vercel.app/",
      codigo: "https://github.com/enjels/countdown",
      text: "countdown feito em react, contdor regrecivo para datas.",
    },
    {
      id: 2,
      imagem:
        "https://i.pinimg.com/736x/a0/c5/08/a0c508b90be731186214c878b9267eeb.jpg",
      link: "https://quiz-enjels.vercel.app/",
      codigo: "https://github.com/enjels/quiz",
      text: "Quiz feito em react",
    },
    {
      id: 3,
      imagem:
        "https://i.pinimg.com/736x/87/97/29/87972930fbe39f177ca7ee78c5d9ae9f.jpg",
      link: "https://multstep-form-react.vercel.app/",
      codigo: "https://github.com/enjels/multstep_form_react",
      text: "multstep-form-react, é um formulario de avaliação, feito em React com json server",
    },
    {
      id: 4,
      imagem:
        "https://i.pinimg.com/736x/f4/3c/ba/f43cba6b9d53721ae24bb6bcea82495c.jpg",
      link: "https://imc-calc-murex.vercel.app/",
      codigo: "https://github.com/enjels/multstep_form_react",
      text: "Calculadora de IMC, criada em react com json server",
    },
    {
      id: 5,
      imagem:
        "https://i.pinimg.com/736x/72/0b/d6/720bd6b3460dd69e2650f1ccaaffb91f.jpg",
      link: "https://mentorclass.vercel.app/",
      codigo:
        "https://github.com/enjels/projeto-de-conclusao-do-modulo-1-avaliacao",
      text: "Mentor Class, uma area de gestão de alunos e professores e turmas para ensino, possui registro de email alunos e professores, Desenvovido com HTML, CSS e javaScript.",
    },
    {
      id: 6,
      imagem:
        "https://i.pinimg.com/736x/ed/3a/3a/ed3a3a925bd3c48b84736a9c14a2608c.jpg",
      link: "https://enjels.github.io/codai-2.0/",
      codigo: "https://github.com/enjels/codai-2.0",
      text: "Projeto Codai -2.0 Nikel, é uma carteira digital,que registra a entra e saída do saldo da conta, detalhes descrição da transação e data do processo tudo isso sendo salvo no Histórico, possui cadastro e login, usa local storage para salvar os dados, Desenvovido com HTML, CSS e javaScript..",
    },
    {
      id: 7,
      imagem:
        "https://i.pinimg.com/736x/db/c1/31/dbc1318f799988e3d8839231b2e5e92f.jpg",
      link: "https://enjels.github.io/Coffee-Shop/",
      codigo: "https://github.com/enjels/Coffee-Shop",
      text: "Coffe-shop criado apartir de uma referência do youtube CANAL: Danilo paixão, Desenvovido com HTML, CSS e javaScript..",
    },

    {
      id: 8,
      imagem:
        "https://i.pinimg.com/736x/28/0b/64/280b643cfc46a8501497cb4d6c4b733e.jpg",
      link: "https://enjels.github.io/Doritos/",
      codigo: "https://github.com/enjels/Doritos",
      text: "Site de doritos um dos primeiros projetos criado quando eu não tinha conhecimento em programação para usar ele como medida de evolução, Desenvovido com HTML, CSS e javaScript. OBS: embreve uma nova versão melhorada.",
    },
    {
      id: 9,
      imagem:
        "https://i.pinimg.com/736x/95/4c/ee/954cee887f7a77d58e0c5bb62e5fa7d4.jpg",
      link: "https://enjels.github.io/relogio-digital/",
      codigo: "https://github.com/enjels/relogio-digital",
      text: "Relógio digital criado apartir de uma referencia no youtube, Desenvovido com HTML, CSS e javaScript..",
    },
    {
      id: 10,
      imagem:
        "https://i.pinimg.com/736x/1a/b4/ef/1ab4ef8a882dd49b5bb73788a196aaaf.jpg",
      link: "https://enjels.github.io/lading-page-treino-exclusivo",
      codigo: "https://github.com/enjels/lading-page-treino-exclusivo",
      text: "Landing page, projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento basicas estudads do html e css.",
    },
    {
      id: 11,
      imagem:
        "https://i.pinimg.com/736x/98/14/47/98144718b992bf509f3864aace65fc30.jpg",
      link: "https://enjels.github.io/formulario-Informacoes",
      codigo: "https://github.com/enjels/formulario-Informacoes",
      text: "Formulário projeto criado apartir do curso da rocketseat, objetivo aplicar e consolidar conhecimento em criação de formularios, Desenvovido com HTML, CSS e javaScript..",
    },
    {
      id: 12,
      imagem:
        "https://i.pinimg.com/736x/52/46/6a/52466a0804d28db6eafba09fdc3db356.jpg",
      link: "https://enjels.github.io/login-cat/",
      codigo: "https://github.com/enjels/login-cat",
      text: "Projeto login-cat criado apartir de uma referência do youtube CANAL: Markzuel, Desenvovido com HTML, CSS e javaScript..",
    },

    {
      id: 13,
      imagem:
        "https://i.pinimg.com/736x/5c/87/73/5c877305897cc5f45b1edfe6b866d961.jpg",
      link: "https://enjels.github.io/responsivo-desktop-Mobile/",
      codigo: "https://github.com/enjels/responsivo-desktop-Mobile",
      text: "Responsivo desktop Mobile, aprendizado sobre responsividade.",
    },
    {
      id: 14,
      imagem:
        "https://i.pinimg.com/736x/c3/cd/3c/c3cd3c6dcda70b8671fb43bce8484916.jpg",
      link: "https://enjels.github.io/z-index-zoom/",
      codigo: "https://github.com/enjels/z-index-zoom",
      text: "z-index-zoom, parendizado sobre  z-index .",
    },
    {
      id: 15,
      imagem:
        "https://i.pinimg.com/736x/40/dc/08/40dc08ab9b1978363efd27aded942052.jpg",
      link: "https://enjels.github.io/ambientes-unico/",
      codigo: "https://github.com/enjels/ambientes-unico",
      text: "ambiente unico,um dos primeiros projetos de estudo para fixar conhecimentos básicos.",
    },
    {
      id: 16,
      imagem:
        "https://www.ccj.ufpb.br/dcx/contents/imagens/figuras/output_zvmmKf.gif/@@images/image.gif",
      link: "#",
      codigo: "#",
      text: "",
    },
  ];
  return (
    <section id="projetos" className="section-pj">
      <h1>Projetos</h1>
      <div id="container-pj">
        <ul className="ul-pj">
          {proj.map((proj, i) => (
            <li key={i}>
              <a href={proj.link} target="blank" rel="noreferrer">
                <img
                  className="img-pj"
                  src={proj.imagem}
                  alt={`projeto-${i}`}
                />
              </a>
              <a className="a-pj" href={proj.codigo} target="blank">
                Ver código
              </a>
              <p>{proj.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Projetos;
