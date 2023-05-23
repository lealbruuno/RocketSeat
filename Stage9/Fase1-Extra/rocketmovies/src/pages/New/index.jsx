import { Container, Form, Content } from "./styles";
import {Link} from "react-router-dom"

import { Header } from "../../components/Header";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <main>
        <Link to="/">        
      <Back title="Voltar" />
        </Link>
      <h1>Novo filme</h1>
      </main>

      <Content>
      <Form>
        <div className="title">
        <Input placeholder="Título" type="text" />
        <Input placeholder="Sua nota (de 0 a 5)" type="text" />
        </div>
        <Textarea placeholder="Observações" type="text" />
        <h2>Marcadores</h2>
        
        <div className="tags">
        <NoteItem value="React" />
        <NoteItem isNew value="Novo marcador" />
        </div>

   <footer>
        <Button title="Excluir filme" className="disabled"/>
        <Button title="Salvar alterações"/>
   </footer>
      </Form>
      </Content>

    </Container>
  );
}
