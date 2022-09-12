export interface Item {
  name: string;
  id: number;
  done: boolean
}

export interface TodoListAction {
  type: string;
  data: Item;
}

export interface TodoList {
  data: {
    name: string,
    id: number,
  }[];
}

export interface TodoListState {
  data: Item[]
}

export interface BaseItemProps {
  data: Item;
}