import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./assets/styles/GlobalStyle";
import Game  from './pages/Game.js';
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import MyContextProvider from './contexts/MyContext';

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <MyContextProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/game" element={<Game />} />
                </Routes>
            </MyContextProvider>
        </BrowserRouter>
    );
}
