import React, { InputHTMLAttributes, useCallback } from "react"

import '../styles/home-system.scss';

type InputProps = InputHTMLAttributes<HTMLInputElement>;


export function Input(props: InputProps) {

    return (
        <input className="input" {...props} />

    )
}