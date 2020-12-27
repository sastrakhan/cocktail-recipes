import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { DrinkDetail } from './containers/DrinkDetail/DrinkDetail';
import { DrinkList } from './containers/DrinkList/DrinkList';
import './App.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Link to={{pathname: '/'}}>
          Drinks
        </Link>
      </Header>
      <Content>
        <Switch>
          <Route path="/" component={DrinkList} exact />
          <Route path="/drink/:id" render= {routeProps => (<DrinkDetail {...routeProps} />)} />
        </Switch>
      </Content>
      <Footer>Kamille Norris</Footer>
    </Layout>
  );
}

export default App;
