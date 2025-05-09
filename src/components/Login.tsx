

const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Iniciar Sesión</h2>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="my-6 flex items-center justify-between">
          <span className="border-b w-1/5 lg:w-1/4"></span>
          <span className="text-xs text-gray-500 uppercase">o continúa con</span>
          <span className="border-b w-1/5 lg:w-1/4"></span>
        </div>

        <div className="flex flex-col space-y-3">
          <button
            className="flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5" />
            <span>Continuar con Google</span>
          </button>

          <button
            className="flex items-center justify-center space-x-2 border border-gray-300 py-2 rounded-lg hover:bg-gray-100"
          >
            <img src="https://www.svgrepo.com/show/452196/facebook-1.svg" alt="Facebook" className="h-5 w-5" />
            <span>Continuar con Facebook</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
