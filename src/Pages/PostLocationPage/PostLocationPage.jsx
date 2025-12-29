import React from 'react'
import { PostLocationPageBody, PostLocationPageContainer, PostLocationPageFooter, PostLocationPageHeader } from './PostLocationPage.styled'

const PostLocationPage = () => {
  return (
    <PostLocationPageContainer>
        <PostLocationPageHeader></PostLocationPageHeader>
        <PostLocationPageBody></PostLocationPageBody>
        <PostLocationPageFooter></PostLocationPageFooter>
    </PostLocationPageContainer>
  )
}

export default PostLocationPage