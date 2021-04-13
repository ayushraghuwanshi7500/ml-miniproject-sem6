import './App.css';
import { Layout } from 'antd';
import SiderContent from './components/SiderContent';
import FooterContent from './components/FooterContent';
import MainContent from './components/MainContent';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        <Header>
          <h1 style={{ textAlign: 'center', color: 'white' }}>
            Customer footfall prediction
          </h1>{' '}
        </Header>
        <Layout>
          <Sider>
            <SiderContent />
          </Sider>
          <Content>
            <MainContent />
          </Content>
        </Layout>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
