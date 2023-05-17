import { MainContainer } from '../../components/MainContainer/MainContainer';
import { AuthBackground } from '../../components/AuthBackground/AuthBackground';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

export const RegistrationScreen = () => {
  return (
    <MainContainer>
      <AuthBackground />
      <RegistrationForm />
    </MainContainer>
  );
};
