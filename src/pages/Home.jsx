import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [formData, setFormData] = useState('')

  const nav = useNavigate()

  function handleChange(e){
    setFormData(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    nav(`/greeting/${formData}`)
  }
  return (
    <>
      <h1>Home Page</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" />
        <input type="submit" />
      </form>
    </>
  );
}