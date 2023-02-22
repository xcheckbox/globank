import { AppRouter } from './routes';
import { ContainerApp, Content } from './containers';

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
