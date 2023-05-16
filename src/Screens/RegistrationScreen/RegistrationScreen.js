import { MainContainer } from '../../components/MainContainer/MainContainer';
import { AuthBackground } from '../../components/AuthBackground/AuthBackground';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';
// import { RegistrationScreenStyles } from './RegistrationScreenStyles';

export const RegistrationScreen = () => {
  // const { contentContainer } = RegistrationScreenStyles;
  // console.log('save -->');
  return (
    <MainContainer>
      <AuthBackground />
      <RegistrationForm />
    </MainContainer>
  );
};
