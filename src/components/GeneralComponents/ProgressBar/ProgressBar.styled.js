import styled from "styled-components"

export const ProgressContainer = styled.div`
width: 100%;
display: flex;
align-items: center;
gap: 0.5rem;
padding: 0;
text-align: left;

.progress{
height: 1rem;
flex: 1;
border: 1px solid #9c9c9cff;
border-radius: 5px;
margin:  0.25rem 0;

}

.amount{
        padding: 0;
        min-width: 2.4rem;
        font-size: 0.9rem;
        color: #5f5f5f;
}

@media (max-width: 768px) {
    .progress {
        height: 0.8rem;
    }

    .amount {
        min-width: 2rem;
        font-size: 0.78rem;
    }
}
`


export const ProgressFill = styled.div`
height: 100%;
width: ${({width}) => (typeof width === "number" ? `${width}%` : width || "0%")};
background-color: #ff5a5f;
`
// #838383