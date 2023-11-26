import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [ formData, setFormData ] = useState({});
  const [ showPassword, setShowPassword ] = useState(false);

  const handleChange = (e) => {  // e represent the event that is being passed to the listener
    setFormData (
      {
        ...formData,     //the three dots is the spread operator - it allows for us to keep the previous formData together
        [e.target.id]: e.target.value,   //whatever is changing, set that one equal to it's value
      }
    )
  };

  const togglePasswordVisibility = (e) => {
    e.preventDefault();
    setShowPassword((previousState) => !previousState);
  };

  return (
    <div className='text-center'>
      <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
      <form className="flex flex-col gap-4 p-3 max-w-lg mx-auto">
        <input type="text" placeholder="email" className="border p-3 rounded-lg" id="email" />
        <div className='relative'>
          <input type={showPassword? 'text' : 'password'} placeholder='password' className='w-full px-4 py-3 text-base border-gray-300 rounded outline-none focus:ring-blue-500 focus:border-blue-500 focus:ring-1' id='password' onChange={ handleChange }/>
          <button onClick={togglePasswordVisibility} className='absolute inset-y-0 px-4 flex items-center right-0'>
            { showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )
            }
          </button>
        </div>
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