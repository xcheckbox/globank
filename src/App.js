import { AppRouter } from './routes';
import { ContainerApp, Content } from './containers';
import { AuthProvider } from 'auth/authProvider';

function App() {
  return (

    <ContainerApp>
      <Content>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </Content>
    </ContainerApp>


  );
}

export default App;
