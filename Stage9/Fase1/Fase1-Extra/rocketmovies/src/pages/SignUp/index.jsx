import { FiMail, FiLock } from "react-icons/fi";

import {Link} from "react-router-dom"

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import{Back} from "../../components/Back"

import { Container, Form, BackgroundImg } from "./styles";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir</p>
        <h2>Faça seu login</h2>
        <Input placeholder="Nome" type="text" icon={FiLock} />

        <Input placeholder="E-mail" type="text" icon={FiMail} />

        <Input placeholder="Senha" type="password" icon={FiLock} />


        <Button title="Cadastrar" />
        
        <Link to="/">
        <Back title="Voltar para o login"/>
        </Link>
      </Form>

      <BackgroundImg />
    </Container>
  );
}
