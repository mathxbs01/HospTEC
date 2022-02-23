import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    font-size: 14px;
`;
export const Content = styled.div`
    background: ${({theme}) => theme.colors.thirdBackground};  
    display: flex;
    left: -0px;

    justify-content: space-between;
    width: 944px;
    height: 566px;
    border-radius: 16px;
    box-shadow: 5px 4px 10px rgba(0, 0, 0, 0.25);

    position: relative;

    ::before{
        content: "";
        position: absolute;
        background: ${({theme}) => theme.colors.secondBackground};
        width: 381px;
        height: 100%;
        margin-left: 563px;    
        flex: 1 0 auto;
        border-radius: 0 16px 16px 0;
    }
`;
export const ModalIntern = styled.div`
    position: relative;
    margin-top: 76px;
`;
export const FirstColumn = styled.div`
    text-align: center;
    flex: 6;
    p{
        position: relative;
        margin-top: 13px;   

        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        text-align: center;
    }
`;
export const Header = styled.div`
    position: relative;
    
    p{
        margin-top: 13px;   

        font-size: 14px;
        line-height: 21px;
        text-align: center;

        opacity: 80%;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-left: 75px;
    width: 414px;

    button{
        width: 100%;
        height: 50px;
        margin-top: 16px;

        background: ${({theme}) => theme.colors.firstBackgroundButton};
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
    }
    a{
        position: relative;
        margin-top: 20px;
        margin-bottom: 20px;
        
        align-items: center;

        font-size: 14px;
        text-decoration-line: underline;

        cursor: pointer;
    }
    span{
        width: 20px;
        height: 14px;
        position: absolute;
        top: 232px;
        right: 110px;
        cursor: pointer;
    }
`;

export const SecondColumn = styled.div`
    position: relative;
    margin-top: 61px;
    text-align: center;
    flex: 4;
    z-index: 10;
    p{
        font-family: Poppins;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 21px;
        
        color: #FFFFFF;
    }
    img{
        align-self: center;
        margin-top: 57px;
    }
    strong{
        position: relative;
        font-family: Poppins;
        font-style: normal;
        font-weight: 900;
        font-size: 36px;
        line-height: 54px;

        text-align: center;
        color: #ffff;
    }
`;

export const Separator = styled.div`
        content: "";
        width: 414px; 
        height: 1px;
        background: #a8a8b3;
`;

