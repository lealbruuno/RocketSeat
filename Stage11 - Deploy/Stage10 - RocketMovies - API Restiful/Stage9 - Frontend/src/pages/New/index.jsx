import { Container, Form, Content } from "./styles";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";

import { api } from "../../services/api";

import { Button } from "../../components/Button";

export function New() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [description, setDescription] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      return alert("Digite um título");
    }

    if (!rating) {
      return alert("Digite uma nota");
    }

    //if (!newTag) {
    //  return alert("Digite um marcador");
    //}

    await api.post("/notes", {
      title,
      description,
      rating,
      tags,
    });

    alert("Filme criado com sucesso!");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>

        <Back title="Voltar" onClick={handleBack}/>

        <h1>Novo filme</h1>
      </main>

      <Content>
        <Form>
          <div className="title">
            <Input
              placeholder="Título"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="text"
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Observações"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
          <h2>Marcadores</h2>

          <div className="tags">
            {tags.map((tag, index) => (
              <NoteItem
                key={String(index)}
                value={tag}
                onClick={() => handleRemoveTag(tag)}
              />
            ))}

            <NoteItem
              isNew
              onChange={(e) => setNewTag(e.target.value)}
              value={newTag}
              onClick={handleAddTag}
            />
          </div>

          <footer>
            <Button title="Excluir filme" className="disabled" />
            <Button title="Salvar alterações" onClick={handleNewNote} />
          </footer>
        </Form>
      </Content>
    </Container>
  );
}
