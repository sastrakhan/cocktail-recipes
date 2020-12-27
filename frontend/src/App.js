import { Layout } from 'antd';
import { DrinkList } from './containers/DrinkList/DrinkList';
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        Drinks
      </Header>
      <Content><DrinkList/></Content>
      <Footer>Kamille Norris</Footer>
    </Layout>
  );
}

export default App;
