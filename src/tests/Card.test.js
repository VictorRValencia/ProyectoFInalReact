import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import axios from "axios";
import Home from "../Routes/Home";


const fetchData = () => axios.get("https://jsonplaceholder.typicode.com/users");

test("Testeando fetch", () => {
  return fetchData().then((data) => {
    expect(data.data[0].name).toBe("Leanne Graham");
  });
});
