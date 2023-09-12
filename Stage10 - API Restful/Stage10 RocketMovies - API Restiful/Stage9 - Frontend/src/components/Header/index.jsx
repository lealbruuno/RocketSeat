import { Container, Profile } from "./styles";
import { useAuth } from "../../hooks/auth";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();

  function handleSignOut() {
    navigate("/");
    signOut();
  }

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  return (
    <Container>
      <Profile>
        <h1>RocketMovies</h1>
        <section>
          <input type="text" placeholder="Pesquisar pelo título" />
        </section>
        <div>
          <span>{user.name}</span>
          <a href="#" onClick={handleSignOut}>
            sair
          </a>
        </div>
        <Link to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </Link>
      </Profile>
    </Container>
  );
}
