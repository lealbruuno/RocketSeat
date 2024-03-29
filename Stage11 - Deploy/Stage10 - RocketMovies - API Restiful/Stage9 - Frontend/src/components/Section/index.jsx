import { Container } from "./styles";

import { Rating } from "../Raiting";
import { Tag } from "../Tag";

export function Section({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{data.title}</h3>
      <Rating grade={data.rating} isBigSize={false} />
      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag name={tag.name} key={tag.id} />
          ))}
        </footer>
      )}
    </Container>
  );
}
