import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import { BASE_URL } from "../constants/url"
import { useState } from "react"

export default function SignUp() {

    const navigate = useNavigate()
    const [disable, setDisable] = useState(false)

    const body = {
        email: "",
        password: "",
        username: ""
    }

    function sign_up(e) {
        setDisable(true)
        e.preventDefault()

        const promise = axios.post(`${BASE_URL}/`, body)
        promise.then(res => {

            console.log(res.data);
            navigate("/")
        })
        promise.catch(err => {
            console.log(err.response.data.message)
            setDisable(false)
            alert("Dados cadastrais inválidos!")
        })
    }

    return (
        <ContainerSignup>
            <ContainerLeft>
                <p>HEARTHSTONE</p>
                <h1>TOP TRUMPS</h1>
            </ContainerLeft>
            <ContainerRight>
                <ContainerInput>
                    <form onSubmit={sign_up}>
                        <input placeholder="e-mail" type="email" onChange={e => body.email = e.target.value} required></input>
                        <input placeholder="password" type="password" onChange={e => body.password = e.target.value} required></input>
                        <input placeholder="username" type="text" onChange={e => body.username = e.target.value} required></input>
                        <button type="submit" disabled={disable}>{disable ? "Loading..." : "Sign Up"}</button>
                    </form>
                </ContainerInput>
                <ContainerSwitch>
                    <Link to="/">
                        <h1>Switch back to log in</h1>
                    </Link>
                </ContainerSwitch>
            </ContainerRight>
        </ContainerSignup>
    )
}

//Styled Components
const ContainerSignup = styled.div`
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