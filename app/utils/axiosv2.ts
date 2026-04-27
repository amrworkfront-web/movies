import axios from "axios";

export const api = axios.create({
  baseURL: "http://movietheatre.runasp.net/api",
    withCredentials: true, 
        headers: {
        "Content-Type": "application/json",
      },
      
      
 
});