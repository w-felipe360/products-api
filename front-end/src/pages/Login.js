import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await login(email, password);
      navigate('/main');
    } catch (error) {
      console.error('Erro ao enviar requisição:', error);
      setErrorMessage(error.response.data.message || 'Invalid credentials.');
    }
  };
  const goToRegister = () => navigate('/register');

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          alt="Salvus"
          src="https://raw.githubusercontent.com/w-felipe360/products-api/main/front-end/src/assets/salvuslogo.png"
          className="mx-auto h-30 w-auto"
        />
        <h2
          className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900"
        >
          Sign in
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                onChange={ ((e) => setEmail(e.target.value)) }
                id="email"
                name="email"
                type="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                onChange={ ((e) => setPassword(e.target.value)) }
                id="password"
                name="password"
                type="password"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              onClick={ handleSubmit }
              className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
          {errorMessage && (
            <p className="mt-2 text-center text-sm text-red-500">
              {errorMessage}
            </p>
          )}
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account?
          {' '}
          <a
            href="#"
            onClick={ goToRegister }
            className="font-semibold leading-6 text-green-500 hover:text-green-600"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
export default Login;
