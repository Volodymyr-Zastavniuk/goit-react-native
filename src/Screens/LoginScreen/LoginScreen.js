import { MainContainer } from '../../components/MainContainer/MainContainer';
import { AuthBackground } from '../../components/AuthBackground/AuthBackground';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export const LoginScreen = () => {
  return (
    <MainContainer>
      <AuthBackground />
      <LoginForm />
    </MainContainer>
  );
};
