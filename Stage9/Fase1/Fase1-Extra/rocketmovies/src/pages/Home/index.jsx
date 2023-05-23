import { Container, Contant, AddButton } from "./styles";
import {Link} from "react-router-dom"

import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";

import { Section } from "../../components/Section";

export function Home() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Meus filmes</h1>
        <Link to="/new">
        <AddButton>
          <FiPlus />
          Adicionar filme
        </AddButton>
        </Link>
      </main>
      <Contant>
        <Section title="Interestelar" />
        <Section title="Interestelar" />
      </Contant>
    </Container>
  );
}
