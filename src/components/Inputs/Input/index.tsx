import { FormEvent, useCallback, HTMLAttributes, HTMLInputTypeAttribute, InputHTMLAttributes } from "react"

import {FormInput} from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maskType?: "phone" | "CPF" | "cep" | "numberCode" | "custom" 
  regex?: RegExp | string
  maxLength?: number
}

const Input = ({
  maskType = "custom",
  regex = "",
  maxLength = 255,
  ...rest
}: InputProps) => {
  const regEx = {
    phone: {
      exp: /^(\d{2})(\d)/,
      sub: "($1)$2"
    },
    CPF: {
      exp: /^(\d{9})(\d)/,
      sub: "$1-$2"
    },
    cep: {
      exp: /^(\d{5})(\d)/,
      sub: "$1-$2"
    },
    numberCode: {
      exp: /[^0-9]/g,
      sub: ""
    },
    custom: {
      exp: regex,
      sub: ""
    },
  }

  const handleKeyUp = useCallback((e: FormEvent<HTMLInputElement>) => {
      e.currentTarget.maxLength = maxLength;
      let value = e.currentTarget.value;
      value = (maskType === "custom" ? value : value.replace(/[^0-9]/g, ""));
      value = value.replace(regEx[maskType].exp, regEx[maskType].sub);
      e.currentTarget.value = value;
  },[]);
    return (
        <FormInput
          onKeyUp={handleKeyUp}
          {...rest}
        />
    )
}

export default Input