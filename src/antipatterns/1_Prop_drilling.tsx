/* 
  In complex React applications, managing state and ensuring that every component has access to the
data it needs can become challenging. This is often observed in the form of props drilling, where
props are passed from a parent component through multiple intermediary components before they
reach the child component that actually needs them. 
*/

import { useState } from "react";

type Article = {
  id: string;
  authorId: string;
  author: string;
  title: string;
  description: string;
};

type User = {
  id: string;
  name: string;
};

export const Section = ({}) => {
  const [articles] = useState<Article[]>([]);
  const [user] = useState<User>({ id: "1", name: "John Doe" });

  return (
    <>
      {articles.map((article) => (
        <ArticleContainer key={article.id} article={article} user={user} />
      ))}
    </>
  );
};

// ArticleContainer recives and passes down user without using it. This is indication of prop drilling.
export const ArticleContainer = ({
  article,
  user,
}: {
  article: Article;
  user: User;
}) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <ArticleContainerFooter user={user} article={article} />
    </div>
  );
};

export const ArticleContainerFooter = ({
  user,
  article,
}: {
  user: User;
  article: Article;
}) => {
  const author = user.id === article.authorId ? "You" : article.author;

  return <div>Author: {author}</div>;
};

/*
  A potential solution to avoid props drilling in React is by leveraging the Context API. It provides a
way to share values (data and functions) between components without having to explicitly pass props
through every level of the component tree.
*/

type Item = {
  id: string;
  name: string;
};

function SearchableList({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (id: string) => void;
}) {
  return (
    <div className="searchableList">
      <List items={items} onItemClick={onItemClick} />
    </div>
  );
}

function List({
  items,
  onItemClick,
}: {
  items: Item[];
  onItemClick: (id: string) => void;
}) {
  return (
    <ul className="list">
      {items.map((item) => (
        <ListItem key={item.id} data={item} onItemClick={onItemClick} />
      ))}
    </ul>
  );
}

function ListItem({
  data,
  onItemClick,
}: {
  data: Item;
  onItemClick: (id: string) => void;
}) {
  return (
    <li className="listItem" onClick={() => onItemClick(data.id)}>
      {data.name}
    </li>
  );
}

// ------
// Prop Plowing

type ALotOfProps = {
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  f: string;
  g: string;
};

export const WrapperComponent = (props: ALotOfProps) => {
  // const cWrapper = `${props.c}Wrapper`;

  return (
    <ChildComponent
      a={props.a}
      b={props.b}
      c={props.c}
      d={props.d}
      e={props.e}
      f={props.f}
      g={props.g}
    />
  );
};

export const ChildComponent = (_props: ALotOfProps) => {
  return <div>Gotta have them all!</div>;
};
