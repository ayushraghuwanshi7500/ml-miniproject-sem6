import './App.css';
import { Layout } from 'antd';
import SiderContent from './components/SiderContent';
import FooterContent from './components/FooterContent';
const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <>
      <Layout>
        <Header>
          <h1 style={{ textAlign: 'center' }}>Customer footfall prediction</h1>{' '}
        </Header>
        <Layout>
          <Sider>
            <SiderContent />
          </Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </>
  );
}

export default App;
