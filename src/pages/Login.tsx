import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simula login automático
    localStorage.setItem('user', 'Gianmarco');
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div className="h-screen flex items-center justify-center">
      <p className="text-gray-600">Redirigiendo al dashboard...</p>
    </div>
  );
};

export default Login;
