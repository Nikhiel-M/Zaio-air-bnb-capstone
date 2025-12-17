import styled from 'styled-components'
import { Title, Subtitle } from '../../../Styles/General.styled'

export const ReviewProfileTitle = styled(Title)`
color: black;
font-size: 1.2rem;
`

export const ReviewProfileSubtitle = styled(Subtitle)`
color: lightgray;
font-size: 1rem;
`

export const ReviewProfileContainer = styled.div`
`

export const ReviewProfileHeader = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
gap: 1rem;

.profile-picture{
    height: 4rem;
    width: 4rem;
    object-fit: cover;
    border-top-right-radius: 50%;
    border-top-left-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
}

`

export const ReviewProfileBody = styled.div`

.review-txt{
    padding-top: 0.8rem;
    width: 75%;
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.2rem;

}`

