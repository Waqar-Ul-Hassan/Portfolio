import React from 'react'

const Book = (props) => {
  //atribite, eventHandler
  // onClick, onMouseOver
  const clickHandler = () => {
    alert('hello world')
  };
  const complexExample = (author) => {
    console.log(author);
  };
  const {img,title,author} = props;
  return (
    <article className='book' onMouseOver={() => {
      console.log(title)
    }}> 
      <img src= {img} alt="" />
      <h1 onClick={()=> console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>example</button>
      <button type='button' onClick={() => complexExample(author)}>example2</button>
    </article>
  );
};

export default Book
