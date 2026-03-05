"use client";

import { useState } from "react";

export default function NewArticle(){

  const [title,setTitle]=useState("");
  const [summary,setSummary]=useState("");
  const [content,setContent]=useState("");
  const [category,setCategory]=useState("mukhya");
  const [image,setImage]=useState("");

  const handleImage=(e:any)=>{

    const file=e.target.files[0];
    const reader=new FileReader();

    reader.onloadend=()=>{
      setImage(reader.result as string);
    };

    reader.readAsDataURL(file);
  };

  const publish=async(e:any)=>{

    e.preventDefault();

    await fetch("/api/articles",{
      method:"POST",
      body:JSON.stringify({
        title,
        summary,
        content,
        category,
        image
      })
    });

    alert("Article Published");

    setTitle("");
    setSummary("");
    setContent("");
  };

  return(

    <div style={{maxWidth:"800px",margin:"auto"}}>

      <h1>Add Article</h1>

      <form onSubmit={publish}>

        <input
          placeholder="Title"
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <textarea
          placeholder="Summary"
          value={summary}
          onChange={(e)=>setSummary(e.target.value)}
        />

        <textarea
          placeholder="Full Article"
          value={content}
          onChange={(e)=>setContent(e.target.value)}
        />

        <select
          value={category}
          onChange={(e)=>setCategory(e.target.value)}
        >

          <option value="mukhya">मुख्य खबर</option>
          <option value="sankshep">संक्षेप</option>
          <option value="sampadakiya">संपादकीय</option>
          <option value="naukri">नौकरी</option>

        </select>

        <br/>

        <input type="file" onChange={handleImage}/>

        <br/><br/>

        <button type="submit">
          Publish
        </button>

      </form>

    </div>

  );
}
