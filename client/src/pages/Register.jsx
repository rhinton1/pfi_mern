import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className='text-center'>
      <h1 className='text-3xl text-center font-semibold my-7'>Create a New Account</h1>
      <form className="flex flex-col gap-4 p-3 max-w-lg mx-auto">
        <input type="text" placeholder="username" className="border p-3 rounded-lg" id="username" />
        <input type="text" placeholder="password" className="border p-3 rounded-lg" id="password" />
        <input type="text" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <button className="bg-slate-600 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">Sign Up</button>
      </form>
      <div className='flex gap-2 items-center justify-center'>
        <p>Have an account?</p>
        <Link to={'/login'}><span className='text-blue-700'>Sign In</span></Link>
      </div>
    </div>
  )
}

export default Register