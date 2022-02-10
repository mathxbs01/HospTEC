import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    display: inlines;
    
`;
export const ModalInter = styled.div`
    position: relative;
    width: 60%;
    height: 78vh;
    top: -78vh;
    left: 9%;
`;
export const Card = styled.div`
    position: relative;
    width: 25vh;
    height: 25vh;


    top: 30%;
    left: 0%; 
    transform: translate(0%, -50%);


    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    border-radius: 40px;

    -webkit-transform:scale(1); 
      -moz-transform:scale(1); 
   	    -o-transform:scale(1);
   	        transform:scale(1);
               -webkit-transition: -webkit-transform .5s ease;
                    transition: transform .5s ease;

    :hover {
    -webkit-transform:scale(1.2); 
        -moz-transform:scale(1.2); 
            -o-transform:scale(1.2);
                transform:scale(1.2);
    }

    img {
        position: relative;
        width: 40%;
        height: 40%;
        margin-top: 10%;
        margin-left: 10%;

    }

    p {
        position: relative;
        width: 90%;
        height: 30%;
        margin-left: 10%;


        font-family: Poppins;
        font-style: normal;
        font-weight: bold;
        font-size: 2.5vh;
        line-height: 30px;

        color: #0077B6;
    }
`;