import { useState, useLayoutEffect } from "react";

import DI from "../../../di";

import List from "../../components/board/list";
import Item from "../../components/board/item";

const Board = () => {
  const [products, setProducts] = useState([]);

  useLayoutEffect(() => {
    const getProducts = async () => {
      const res = await DI.todo.getList();
    };
    getProducts();
  }, []);

  return (
    <List>
      {products.map((product) => (
        <Item {...product} />
      ))}
    </List>
  );
};

export default Board;
