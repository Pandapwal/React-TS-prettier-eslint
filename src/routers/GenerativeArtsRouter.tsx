import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GenerativeArtsApp from '../apps/GenerativeArtsApp'
import * as Pages from '../pages/generativeArtsPages'

function GenerativeArtsRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<GenerativeArtsApp />}>
                    <Route path='' element={<Pages.LandingPage />} />
                    <Route path='items' element={<Pages.ItemsPage />} />
                    <Route path='items/:id' element={<Pages.ItemDetails />} />
                    {/*

                <Route path='eduardo' element={<Other />} />

                <Route path='*' element={<NotFound />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default GenerativeArtsRouter
