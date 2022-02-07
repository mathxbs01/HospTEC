import React, { InputHTMLAttributes, useCallback } from "react"

import '../styles/inputLogin.scss'; //importando a estilização do botão 

type InputProps = InputHTMLAttributes<HTMLInputElement>;


export function Input(props: InputProps){

    return(
        <input className="input" {...props} />
        
    )
}
export function InputPhone(props: InputProps){
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 13; 
        let value = e.currentTarget.value;
        value = value.replace(/[^0-9]/g, "");
        value = value.replace(/^(\d{2})(\d)/, "($1)$2");
        e.currentTarget.value = value;
    },[]);

    return(
        <input className="input" {...props} onKeyUp={handleKeyUp} />
    )
}
export function InputCPF(props: InputProps){
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 12; 
        let value = e.currentTarget.value;
        value = value.replace(/[^0-9]/g, "");
        value = value.replace(/^(\d{9})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    },[]);

    return(
        <input className="input" {...props} onKeyUp={handleKeyUp} />
    )
}
export function InputCEP(props: InputProps){
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 9; 
        let value = e.currentTarget.value;
        value = value.replace(/[^0-9]/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        e.currentTarget.value = value;
    },[]);

    return(
        <input className="input" {...props} onKeyUp={handleKeyUp} />
    )
}
export function InputNumberCode(props: InputProps){
    const handleKeyUp = useCallback((e: React.FormEvent<HTMLInputElement>) => {
        e.currentTarget.maxLength = 6; 
        let value = e.currentTarget.value;
        value = value.replace(/[^0-9]/g, "");
        e.currentTarget.value = value;
    },[]);

    return(
        <input className="input" {...props} onKeyUp={handleKeyUp} />
    )
}