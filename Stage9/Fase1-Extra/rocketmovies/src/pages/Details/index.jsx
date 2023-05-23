import { Container, Content, Star, Clock } from "./styles";

import { Header } from "../../components/Header";
import { Back } from "../../components/Back";
import { Tag } from "../../components/Tag";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { CiClock2 } from "react-icons/ci";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <Back title="Voltar" />
          <Star>
            <h1>Interstellar</h1>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </Star>
          <section>
            <img
              src="https://github.com/lealbruuno.png"
              alt="foto do usuário"
            />
            <p>Por Bruno Leal</p>
            <Clock>
              <CiClock2 />
            </Clock>
            <p>23/05/22 às 08:00</p>
          </section>
          <Tag title="Ficção Científica" />
          <Tag title="Drama" />
          <Tag title="Família" />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet alias
            corrupti dolor vero quidem ad culpa dicta nihil eos laudantium
            cupiditate, blanditiis dolorum voluptate dolores! Minus asperiores
            sequi facilis in?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut, voluptatibus soluta aliquam aliquid ullam autem nesciunt
            consectetur eum, commodi iste minima consequatur libero, vero
            accusamus corrupti in est ab officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum dolores, quas est, qui omnis,
            quia voluptates dolorem quasi libero atque magni impedit molestiae
            doloribus aliquam accusantium esse? Reiciendis, excepturi saepe?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet alias
            corrupti dolor vero quidem ad culpa dicta nihil eos laudantium
            cupiditate, blanditiis dolorum voluptate dolores! Minus asperiores
            sequi facilis in?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut, voluptatibus soluta aliquam aliquid ullam autem nesciunt
            consectetur eum, commodi iste minima consequatur libero, vero
            accusamus corrupti in est ab officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum dolores, quas est, qui omnis,
            quia voluptates dolorem quasi libero atque magni impedit molestiae
            doloribus aliquam accusantium esse? Reiciendis, excepturi saepe?
          </p>
          <br />
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet alias
            corrupti dolor vero quidem ad culpa dicta nihil eos laudantium
            cupiditate, blanditiis dolorum voluptate dolores! Minus asperiores
            sequi facilis in?Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Ut, voluptatibus soluta aliquam aliquid ullam autem nesciunt
            consectetur eum, commodi iste minima consequatur libero, vero
            accusamus corrupti in est ab officiis. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Rerum dolores, quas est, qui omnis,
            quia voluptates dolorem quasi libero atque magni impedit molestiae
            doloribus aliquam accusantium esse? Reiciendis, excepturi saepe?
          </p>
        </Content>
      </main>
    </Container>
  );
}
