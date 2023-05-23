import { Container, Profile} from "./styles"
import {Link} from "react-router-dom"

export function Header(){
    return(
        <Container>
            <Profile>
                <h1>RocketMovies</h1>
                <section>          
                <input type="text" placeholder="Pesquisar pelo título" />
                </section>  
                <div>
                    <span>Bruno Leal</span>
                    <a href="#">sair</a>
                </div>
                <Link to="profile">               
                <img src="https://github.com/lealbruuno.png"
                alt="Foto do usuário"/>
                </Link>
            </Profile>
        </Container>
    )
}