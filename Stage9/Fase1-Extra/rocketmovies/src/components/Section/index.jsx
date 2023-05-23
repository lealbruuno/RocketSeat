import { Container} from "./styles"
import { Star } from "../../components/Star";
import { Tag } from "../../components/Tag";

export function Section({title,...rest}){
    return(
        <Container>
          <h2>{title}</h2>
          <Star/>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
            esse dicta corrupti! Soluta corrupti impedit, aliquam illum
            molestias distinctio provident facilis necessitatibus? Ipsa alias
            veritatis cum aut distinctio, recusandae neque.
          </p>
          <Tag title="Ficção Científica" />
          <Tag title="Drama" />
          <Tag title="Família" />
        </Container>
    )
}