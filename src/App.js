import './App.css';
import { useState } from 'react';
import { Layout } from 'antd';
import SiderContent from './components/SiderContent';
import FooterContent from './components/FooterContent';
import MainContent from './components/MainContent';
import PredictionResult from './components/PredictionResult';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const { Header, Footer, Sider, Content } = Layout;

function App() {
  const [formData, setFormData] = useState('');
  return (
    <Layout>
      <Sider>
        <SiderContent />
      </Sider>
      <Layout>
        <Header>
          <h1
            style={{
              textAlign: 'center',
              color: 'white',
              textTransform: 'uppercase',
              marginTop: 10,
              marginBottom: 15
            }}
          >
            Customer footfall prediction
          </h1>
        </Header>
        <Content>
          <Router>
            <Switch>
              <Route path='/prediction'>
                <PredictionResult
                  formData={formData}
                  setFormData={setFormData}
                />
              </Route>
              <Route exact path='/'>
                <MainContent formData={formData} setFormData={setFormData} />
              </Route>
            </Switch>
          </Router>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
