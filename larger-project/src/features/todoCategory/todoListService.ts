import axios from "axios"
import { TodoItem, TodoCategory } from "./models"

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

  setCategories: async (categories: TodoCategory[]) => {
    await axios.post(url + "categories", categories)
  },
  getAllCategories: async (): Promise<TodoCategory[]> => {
    const repsonse = await axios.get(url + "categories")
    return repsonse.data
  },
  storeTodoItemsForCategory: async (categoryId: string, items: TodoItem[]) => {
    await axios.post(url + `categories-${categoryId}`, items)
  },
  getTodoItemsForCategory: async (categoryId: string): Promise<TodoItem[]> => {
    const response = await axios.get(url + `categories-${categoryId}`)
    return response.data
  }
}