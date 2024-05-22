"use client"

import { useForm } from "react-hook-form"; 


function Home() {
  const {register, handleSubmit} = useForm();

  return (
    <div>
      <form onSubmit={handleSubmit(data => {console.log(data)})}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")}/>

        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email")}/>

        <label htmlFor="password">Password</label>
        <input type="password" id="password" {...register("password")}/>

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" {...register("confirmPassword")}/>

        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input type="date" id="dateOfBirth" {...register("dateOfBirth")}/>

        <label htmlFor="weight">Weight</label>
        <input type="text" id="weight" {...register("weigth")}/>

        <label htmlFor="plan">Plan</label>
        <select id="plan" {...register("plan")}>
          <option value="free">Free</option>
          <option value="basic">Basic</option>
          <option value="medium">Medium</option>
          <option value="premium">Premium</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Home;