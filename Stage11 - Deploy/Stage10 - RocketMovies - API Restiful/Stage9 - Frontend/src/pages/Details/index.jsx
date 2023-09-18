import { Container, Content, Star, Clock } from "./styles";
import { useEffect, useState } from "react";

import { CiClock2 } from "react-icons/ci";

import { useNavigate, useParams } from "react-router-dom";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Back } from "../../components/Back";
import { Rating } from "../../components/Raiting";
import { Tag } from "../../components/Tag";
import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { useAuth } from "../../hooks/auth";

export function Details() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const [data, setData] = useState(null);

  function handleBack() {
    navigate(-1);
  }

  async function handleRemoveFilm() {
    const confirm = window.confirm("Tem certeza de querer eliminar o Filme?");
    if (confirm) {
      const response = await api.delete(`/notes/${params.id}`);
      setData(response.data);
      navigate(-1);
    }
  }

  async function fetchNote() {
    const response = await api.get(`/notes/${params.id}`);
    setData(response.data);
  }

  useEffect(() => {
    fetchNote();
  }, []);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>

            <Back title="Voltar" onClick={handleBack}/>

            <Star>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} />
            </Star>

            <section>
              <img src={avatarUrl} alt={`${user.name} - photo`} />
              <strong>{`por ${user.name}`}</strong>

              <Clock>
                <CiClock2 />
              </Clock>
              <span>
                <span id="date">{data.created_at}</span>
              </span>
            </section>

            {data.tags && (
              <div className="tags">
                {data.tags.map((tag) => (
                  <Tag name={tag.name} key={tag.id} />
                ))}
              </div>
            )}

            <p>{data.description}</p>

            <footer>
              <Button title="Excluir Filme" onClick={handleRemoveFilm} />
            </footer>
          </Content>
        </main>
      )}
    </Container>
  );
}
