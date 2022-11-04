import React from "react";
import {
  ContainerNotFound,
  NotFoundMessage,
  SpanNotFound,
} from "./NotFoundPage.styles";

const NotFoundPage = () => {
  return (
    <ContainerNotFound>
      <NotFoundMessage>
        <SpanNotFound>404</SpanNotFound> NOT FOUND
      </NotFoundMessage>
    </ContainerNotFound>
  );
};

export default NotFoundPage;
