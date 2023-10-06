import axios from "axios"
import { TodoItem } from "./todoListSlice"

const url = "/api/store?key="

export const todoListService = {
  getDataFetch: async () => {
    const response = await fetch(`${url}fetch-data`)
    return response.json()
  },

  addDataFetch: async () => {
    await fetch(`${url}fetch-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: "[1,2]"
    })
  },

  storeTodoItems: async (items: TodoItem[]) => {
    await axios.post(url + "todoItems", items)
  },
  getTodoItems: async (): Promise<TodoItem[]> => {
    const response = await axios.get(url + "todoItems")
    return response.data
  }
}