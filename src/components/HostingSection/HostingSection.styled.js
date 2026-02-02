import styled from "styled-components";

export const HostingContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding: 2rem 4rem;
margin-top: 2rem;
border-radius: 10px;
width: 100%;

.host-image{
    width: 100%;
    height: 50rem;
    border-radius: 10px;
    object-fit: cover;
    object-position: center;
    image-rendering: optimizeQuality;
    
}

.host-overlay{
    position: absolute;
    top: 40%;
    left: 20%;
    transform: translate(-50%, -50%);
}

.host-title{
    font-weight: 700;
    white-space: normal;
    font-size: 6rem;
    line-height: 1.2;
    max-width: 500px;
    word-wrap: break-word;
    text-align: center;
}
`;