import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
      <form className="flex flex-col gap-4 p-3 max-w-lg mx-auto">
        <input type="text" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <input type="text" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <button className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign In</button>
      </form>
      <div className='flex gap-2 items-center justify-center'>
        <p>Dont have an account?</p>
        <Link to={'/register'}><span className='text-blue-700'>Register</span></Link>
      </div>
    </div>
  )
}

export default Login