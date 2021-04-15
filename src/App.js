import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import FooterContent from './components/FooterContent';
import MainContent from './components/MainContent';
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
              color: 'white',
              marginTop: 10,
              marginBottom: 15
            }}
          >
            Customer Footfall Prediction
          </h1>
        </Header>
        <Layout>
          <Content>
            <MainContent formData={formData} setFormData={setFormData} />
          </Content>
          <Footer>
            <FooterContent/>
          </Footer>
        </Layout>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
