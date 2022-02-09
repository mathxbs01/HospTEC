import styled from "styled-components";

export const Container = styled.div`

    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 950px;

    font-size: 14px;
`;
export const Content = styled.div`
    background-color: #ffff;
    position: absolute;

    width: 944px;
    height: 891px;
    border-radius: 16px;
    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25);

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Header = styled.div`
    position: relative;

    img{
        content: "";
        position: relative;
        width: 214px;
        height: 38px;
        margin-top: 80px;
        margin-left: 119px;
    }
    p{
        position: relative;
        width: 432px;
        height: 22px;
        margin-left: 79px;
        margin-top: 21px;

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        text-align: center;

        color: #818181;
    }
`;
export const Form = styled.form`
    position: absolute;
    margin-left: 80px;
    margin-top: 65px;

    display: inline-block;

    p{
        position: relative;
        width: 100%;
        height: 22px;
        text-align: left;
        
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;

        color: #000000;
    }
    select{
        width: 375px;
        height: 50px;
        background: rgba(196, 196, 196, 0.12);
        border: .5px solid #EFEFEF;
        border-radius: 10px;
        
        
        margin-top: 4px;
        margin-bottom: 13px;

        padding-left: 25px;
        padding-right: 55px;

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        text-align: left;

        option{
            position: relative;
            width: 432px;
            height: 22px;
            align-items: center;

            font-family: Poppins;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 21px;
            text-align: center;

            color: #818181;
        }
    }
    
`;
export const InputForm = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;
export const LineForm = styled.div`
    position: relative;
    display: inline-block;
    width: 375px;
    margin-right: 35px;

    span{
        position: relative;
        top: -50px;
        left: 340px;

        cursor: pointer;
    }`;

export const UserProfile = styled.div`
    position: relative;
    width: 100%;
    
    p{
        position: relative;
        display: flex;
        width: 100%;
        height: 22px;
        text-align: left;
        
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;

        color: #000000;
    }
    label{
        position: relative;
        display: inline;

        left: -20px;
    }
`;
export const InputRadio = styled.input`
    position: relative;
    display: inline;
    width: 15px;
    height: 15px;
    background: rgba(196, 196, 196, 0.12);
    border: .5px solid #EFEFEF;
    border-radius: 10px;

    top: 2px;
    left: -50px;
    margin-top: 4px;
    margin-bottom: 13px;
    margin-left: 50px;
`;
export const ButtonNext = styled.button`
    position: absolute;
    right: 40px;
    bottom: -57px;
    align-items: center;
    width: 184px;
    height: 50px;

    background: #B6E2DA;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 25px;
    cursor: pointer;

    &:not(:disabled):hover{
        filter: brightness(0.95);
    }
    :disabled{
        opacity: 100%;
        background: #E9F6F4;
        color: #000000;
        cursor: unset;
    }

    p{
        position: relative;
        width: 130px;
        height: 22px;
        
        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;

        color: #000000;
    }
`;

