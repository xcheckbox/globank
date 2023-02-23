import { AppRouter } from './routes';
import { ContainerApp, Content } from './containers';
import { Navbar } from 'shared/Navbar';

function App() {
  return (
    <ContainerApp>
      <Content>
        <AppRouter />
      </Content>
    </ContainerApp>
  );
}

export default App;
