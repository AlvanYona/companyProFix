import axios from "axios";
import React from "react";
import { User } from "../types/useTypes";

const GetTeams = async ()=> {
  try {
    const { data } = await axios.get("https://randomuser.me/api/?results=12");
    const result:User[] = data.results
    console.log(result)
    return result
  } catch (axiosError) {
    console.log(axiosError)
  }
};

export default GetTeams;
