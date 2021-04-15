import './App.css';
import { useState } from 'react';
import { Layout } from 'antd';
import SiderContent from './components/SiderContent';
import MainContent from './components/MainContent';
import { QueryClient, QueryClientProvider } from 'react-query';
const { Header, Sider, Content } = Layout;
const queryClient = new QueryClient();
function App() {
  const [formData, setFormData] = useState('');
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
