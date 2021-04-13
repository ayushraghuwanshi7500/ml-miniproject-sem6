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
            <MainContent />
          </Content>
          <Footer>
            <FooterContent />
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
