import React from "react";
import FeaturedMedia from "../featured-media";

import { 
  Card, 
  CardImg,
  CardBlock,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from '@bootstrap-styled/v4';

const Item = ({ artist, link, title, content, featuredMediaId, year }) => {
  console.log({ artist, link, title, content })
  return (
    <Card>
    <FeaturedMedia id={featuredMediaId} />
    <CardBlock>
      <CardTitle>{title} - {year}</CardTitle>
      <CardSubtitle>{artist}</CardSubtitle>
      <p dangerouslySetInnerHTML={{ __html: content }} />
      <code>{link}</code>
      <Button color="primary">Go somewhere</Button>
    </CardBlock>
  </Card>
  );
};

export default Item;

