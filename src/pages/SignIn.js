import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import styled from "styled-components"
import { BASE_URL } from "../constants/url";
import { MyContext } from "../contexts/MyContext";

export default function SignIn() {
    const { setToken, setData } = useContext(MyContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [disable, setDisable] = useState(false)

    function sign_in(e) {
        e.preventDefault()
        setDisable(true)
        const body = {
            email: email,
            password: password
        }

        if (!email || !password) {
            alert("É necessários preencher todos os campos!")
        }

        const promise = axios.post(`${BASE_URL}/signin`, body)
        promise.then(res => {
            localStorage.setItem("token", res.data.token)
            setToken(res.data.token)

            const dataObj = JSON.stringify(res.data)
            localStorage.setItem("data", dataObj)
            setData(res.data)

            navigate("/game")
        })
        promise.catch(err => {
            console.log(err.response.data.message)
            setDisable(false)
            alert("Usuário ou senha inválidos")
        })
    }

    return (
        <ContainerSignin>
            <ContainerLeft>
                <p>HEARTHSTONE</p>
                <h1>TOP TRUMPS</h1>
            </ContainerLeft>
            <ContainerRight>
                <ContainerInput>
                    <form onSubmit={sign_in}>
                        <input placeholder="e-mail" type="email" value={email} onChange={e => setEmail(e.target.value)} required></input>
                        <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)} required></input>
                        <button type="submit" disabled={disable}>{disable ? "Loading..." : "Log In"}</button>
                    </form>
                </ContainerInput>
                <ContainerSwitch>
                    <Link to="/sign-up">
                        <h1>First time? Create an account!</h1>
                    </Link>
                </ContainerSwitch>
            </ContainerRight>
        </ContainerSignin>
    )
}
//Styled Components
const ContainerSignin = styled.div`
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #582B00;

    @media (max-width: 1100px) {
        display:flex;
        flex-direction:column;
    }
`
const ContainerLeft = styled.div`
    background-color:  #300300;
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-top: 250px;

    @media (max-width: 1100px) {
        width: 100%;
        height: 40%;
        padding-top: 40px;
        align-items: center;
        justify-content: center;
    }
    

    p{
        color: white;
        font-family: 'Passion One', sans-serif;
        font-weight: 700;
        font-size: 106px;
        padding-left: 50px;

        @media (max-width: 1100px) {
        align-items:center;
        font-size: 75px;
        padding-left: 0px;
    }
    }

    h1{
        color: white;
        font-family: 'Passion One', sans-serif;
        font-weight: 700;
        font-size: 43px;
        line-height: 66px;
        padding-left: 50px;

        @media (max-width: 1100px) {
        font-size: 30px;
        padding-left: 35px;
        line-height: 50px
    }
    }

`
const ContainerRight = styled.div`
    width: 30%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 150px;

    @media (max-width: 1100px) {
        margin-top: -210px;
    }
`
const ContainerInput = styled.div`

    form{
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    }

    input{
    border: 2px solid black;
    width: 300px;
    height: 55px;
    margin-bottom: 16px;
    border-radius: 7px;
    padding-left: 14px;
    font-family: 'Oswald', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 20px;
    }

    ::placeholder{
    font-family: 'Oswald', sans-serif;
    font-style: bold;
    font-weight: 700;
    font-size: 27px;
    margin-left: 55px;
    }

    button{
    width: 300px;
    height: 52px;
    background-color: gold;
    border-radius: 7px;
    border: none;
    color: #300300;
    font-family: 'Oswald', sans-serif;
    font-weight: 700;
    font-size: 20px;
    cursor: pointer;

    :hover{
    transform: scale(0.97);
    }

    :disabled {
    transform: scale(0.95);
    opacity: 0.3;
  }
    }
`
const ContainerSwitch = styled.div`
    margin-top: 25px;
    color: white;
    font-family: 'Oswald', sans-serif;

    h1{
        color: gold;
        border-bottom: 1px solid gold;
        
        @media (max-width: 1100px) {
        white-space: nowrap;
    }
    }
`