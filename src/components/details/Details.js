import React, {useContext} from 'react';
import BlogFull from '../blogFull/BlogFull';
import { useParams, Redirect } from 'react-router-dom'
import blog from '../map/Blog'
import Button from '../button/Button'
import history from './../../history'
import {AuthContext} from '../Provider/AuthProvider'



const Details = () => {

  const {currentUser} = useContext(AuthContext)

//backbutton
  const goBack = (e) => {
    e.preventDefault();
    history.goBack();
  }

//getID from Params
  const { id } = useParams()

  console.log(blog)
  console.log(id)

//find matchingBlogpost for id
  const matchingBlog = blog.find(blog => blog.id === parseInt(id))

//display backbutton and Blogpost
  return (
    
    <div>
      {currentUser ? 
      <Button handleclick={goBack} btype="secondary" text="Zurück" type="submit">hello</Button>: <Redirect to={'/Login'}/>}
      {currentUser? 
      <BlogFull image={matchingBlog.image.src} text={matchingBlog.text} author_image={matchingBlog.author_image} alt={matchingBlog.image.alt} title={matchingBlog.title} author={matchingBlog.author} date={matchingBlog.date} city={matchingBlog.location.city} country={matchingBlog.location.country}></BlogFull>:<Redirect to={'/Login'}/>}
    </div>
  
  

  )
}


export default Details;