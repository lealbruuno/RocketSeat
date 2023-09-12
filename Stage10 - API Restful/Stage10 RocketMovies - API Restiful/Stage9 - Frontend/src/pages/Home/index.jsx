import { Container, Contant, AddButton, Notes } from "./styles";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { FiPlus } from "react-icons/fi";

import { Section } from "../../components/Section";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  function handleShowDetails(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes() {
      try {
        const response = await api.get(`/notes?title=${search}`);

        setNotes(response.data);
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível carregar os filmes. Tente recarregar a página."
          );
          console.log(error);
        }
      }
    }

    fetchNotes();
  }, [search]);

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
        <Notes>
          {notes.map((note) => (
            <Section
              key={String(note.id)}
              data={note}
              onClick={() => handleShowDetails(note.id)}
            />
          ))}
        </Notes>
      </Contant>
    </Container>
  );
}
