import styled from "styled-components";


export const ProfileSectionContainer = styled.div`
.host-title{
    font-size: 1.3rem;
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}
`

export const ProfileContainer = styled.div`
background-color: white;
color: black;
fill: black;
font-size: 1.4rem;
margin: 0.1rem 0 0.3rem 0 ;
padding: 0.5rem 0.8rem;
border-radius: 16px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: row;

.profile-icon{
    color: gray;
    fill: gray;
    margin-left: 0.5rem;
    cursor: pointer;

}
.list-icon{
    cursor: pointer;
}

`
export const WorldIconContainer = styled.div`
.world-icon{
    margin: 0.5rem 1rem 0rem 5rem;
    padding: 0.1rem;
    height: 2.3rem;
    font-size: 4rem;
    cursor: pointer;
}
`

export const DropDown = styled.div`
display: flex;
flex-direction: column;
position: relative;

.dropdown-menu {
    position: absolute;
    top: 100%;
    right: 0;
    background-color: white;
    color: black;
    padding: 0.8rem 1rem;
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    min-width: 100px;
    z-index: 1000;
}
`