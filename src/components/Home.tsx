import React, { HtmlHTMLAttributes, InputHTMLAttributes, useCallback } from "react"

import illustrationMulherHome from '../assets/images/home/homeMulher.svg';
import HOSPTECLogotipo from '../assets/images/home/logotipo.svg';
import styled from "styled-components";

import { Card, Container, ModalInter } from '../pages/paciente/home/style';


type BackgroundPros = InputHTMLAttributes<HTMLInputElement>;


export const Background = styled.div`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    position: relative;
    display: flex;
    height: 100vh;

    overflow: hidden;


    .background-primaryBlue{
        position: relative;
        width: 98%;
        height: 100%;
        bottom: -2%;

        background: #70CDFF;
        box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
        border-radius: 20px 20px 0px 0px;
    }
    .background-primaryWhite-up{
        position: relative;
        width: 90%;
        height: 20vh;
        right: -9%;
        
        background: #FBFBFB;
        border-radius: 40px 20px 0px 40px;
        
        strong{
            position: absolute;
            display: flex;
            margin-left: 100px;
            top: 50%;
            
            font-style: normal;
            font-weight: 900;
            font-size: 36px;
            line-height: 10%;

            text-align: center;
            color: #0077B6;
            text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.05);
        }
    }
    .box-logotipo{
        position: relative;
        display: block;
        width: 15vh;
        height: 15vh;
        top: 10%;
        right: 5%;

        background: #FFFF;
        box-shadow: 5px 4px 5px rgba(0, 0, 0, 0.25);
        border-radius: 15%;

        #logotipo{
            position: relative;  
            width: 12vh;
            height: 12vh;

            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

        }
    }
    .modal-intern{
        position: relative;
        display: fixed;

        width: 90%;
        height: 80%;
        right: -9%;
    }
    .background-secondWhite-right{
        position: relative;
        width: 40%;
        height: 100%;
        left: 60.05%;

        background: #FBFBFB;
        #illustrationMulherHome{
            position: relative;
            width: 60%;
            height: 60%;
            
            top: 50%;
            left: 65%;
            transform: translate(-50%, -50%);
        }
    }
    .background-secondBlue{
        position: relative;
        width: 170%;
        height: 100%;

        left: -150%;
        bottom: 61.1%;

        background: #70CDFF;
        border-radius: 0px 40px 0px 0px;
    }
`; 

// export function BackgroundHome(props: BackgroundPros){
export function BackgroundHome(props: BackgroundPros){    
    return(
        <Background className="fixed" >
            <div className="background-primaryBlue">
                <div className="background-primaryWhite-up">
                    <strong className="title">Bem vindo a página inicial</strong>
                    <div className="box-logotipo">
                        <img id="logotipo"src={HOSPTECLogotipo} alt="Logotipo do hospital"/>
                    </div>
                </div>
                <div className="modal-intern">
                    <div className="background-secondWhite-right">
                        <img id="illustrationMulherHome"src={illustrationMulherHome} alt="Ilustração mulher da pagina home"/>
                        <div className="background-secondBlue" />
                    </div>
                </div>
            </div>        
        </Background>
    )
}


