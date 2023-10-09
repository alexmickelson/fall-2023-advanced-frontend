export interface TodoItem {
  id: string,
  text: string,
  complete: boolean,
}

export interface TodoCategory {
  id: string,
  name: string,
  items: TodoItem[],
}

export interface TodoListState {
  categories: TodoCategory[],
  loading: boolean
}