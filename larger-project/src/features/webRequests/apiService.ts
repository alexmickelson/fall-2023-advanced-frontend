import { json } from "node:stream/consumers"


const url = "/api/store?key="

export const apiService = {
  getDataFetch: async () => { 
    const response = await fetch(`${url}fetch-data`)
    return response.json()
  },

  addDataFetch: async () => {
    const response = await fetch(`${url}fetch-data`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: "[1,2]"
    })
  }
    
}