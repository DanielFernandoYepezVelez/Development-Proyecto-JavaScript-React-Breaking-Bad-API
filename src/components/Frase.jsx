import styled from '@emotion/styled';

const ContenedorFrase = styled.div`
    padding: 3rem;
    max-width: 800px;
    border-radius: .5rem;
    background-color: #FFFFFF;

    @media (min-width: 768px) {
        margin-top: 10rem;
    }

    h1 {
        text-align: center;
        position: relative;
        padding-left: 4rem;
        font-family: Arial, Helvetica, sans-serif;
    
        &::before{
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2.7rem;
        }
    }

    p {
        color: #666;
        margin-top: 2rem;
        font-size: 1.4rem;
        font-weight: bold;
        text-align: right;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }
`;

const Frase = ({frase}) => {

    if (Object.keys(frase).length === 0) return null;

    return ( 
        <ContenedorFrase>
            <h1> {frase.quote} </h1>
            <p> {frase.author} </p>
        </ContenedorFrase>
     );
}
 
export default Frase;