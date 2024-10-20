import { Link, useNavigate } from 'react-router-dom';
import './login.css'
import { FormEvent, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { useAuthStore } from '../../store/auth.store';
const Register = () => {
  const { Register } = useAuth();
  const { isLoading, error } = useAuthStore()
  const [invalid, setInvalid] = useState<boolean>(false)
  // const email = useRef<HTMLInputElement>(null)
  // const password = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handeleSubmid = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email || password) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
    Register(email, password)
  }

  return (
    <main className="container d-flex align-items-center justify-content-center w-75 login p-5">
      <form className="form-signin mx-auto w-50" onSubmit={handeleSubmid}>
        <div className='d-flex justify-content-center'>
          <img className="mb-4 text-center  h-25 " src="https://rulionline.uz//assets/logo-88bb346d.jpg" alt="" width="72" height="57" />

        </div>
        <h1 className="h3 mb-3 fw-normal text-center">Please sign Up</h1>
        {error && <div className='alert alert-danger'>{error}</div>}
        <div className="form-floating mb-4">
          <input
            // ref={email}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className={`form-control  ${invalid && 'is-invalid'}`}
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            // ref={password}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className={`form-control  ${invalid && 'is-invalid'}`}
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input
            className="form-check-input"
            type="checkbox"
            value="remember-me"
            id="flexCheckDefault"
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button disabled={isLoading} className="btn btn-primary w-100 py-2" type="submit">
          {isLoading ? 'Loading...' : 'Sign Up'}
        </button>
        <Link to='/login' className="mt-5 mb-3 text-body-secondary"> Already have an account? <span>Sign in</span> </Link>
      </form>
    </main>
  );
};

export default Register;
