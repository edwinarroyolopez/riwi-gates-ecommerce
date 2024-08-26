// app/login/page.tsx
import Link from 'next/link';
import LoginForm from '../../components/LoginForm';



const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm />
      <p>New customer? <Link href="/register">start here!</Link></p>
    </div>
  );
};

export default LoginPage;