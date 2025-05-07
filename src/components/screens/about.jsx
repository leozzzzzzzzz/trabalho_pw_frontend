import Accordion from 'react-bootstrap/Accordion';

function About() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Boas vindas!</Accordion.Header>
        <Accordion.Body>
          Bem vindo ao sistema de gerenciamento de pedágios!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Sobre o trabalho</Accordion.Header>
        <Accordion.Body>
          Trabalho desenvolvido para a disciplina de Programação Web do curso de Ciência da Computação
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Tecnologias utilizadas</Accordion.Header>
        <Accordion.Body>
            <p>Back end:</p>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgresSQL</li>
            </ul>
            <p>Front end:</p>
            <ul>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <p>Hospedagem:</p>
            <ul>
                <li>Render</li>
                <li>Vercel</li>
            </ul>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default About;