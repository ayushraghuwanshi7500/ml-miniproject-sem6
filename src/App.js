import './App.css';
import { useState } from 'react';
import { Layout } from 'antd';
import SiderContent from './components/SiderContent';
import MainContent from './components/MainContent';
const { Header, Sider, Content } = Layout;

function App() {
  const [formData, setFormData] = useState('');
  return (
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
      <Layout>
        <Sider>
          <SiderContent />
        </Sider>
        <Content>
          <MainContent formData={formData} setFormData={setFormData} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
