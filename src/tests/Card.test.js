
import { render, screen } from "@testing-library/react";
import axios from 'axios';
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Card from "../Components/Card";
import ContextProvider from "../Components/utils/global.context";

describe('Card component', () => {

    test('Verificar que las Card reciban las props adecuadas', async () => {
        await axios.get('https://jsonplaceholder.typicode.com/users').then(
            res => {
                render(
                    <BrowserRouter>
                        <ContextProvider>
                            <Card key={res.data[0].id} id={res.data[0].id} name={res.data[0].name} username={res.data[0].username}/>
                        </ContextProvider>
                    </BrowserRouter>
                )
                const oneUsername = screen.getByText(res.data[0].username)
                expect(oneUsername).toBeInTheDocument;
            }
        )
    })
})
