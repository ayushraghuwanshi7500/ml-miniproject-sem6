import { Form, Card, Select, Input, InputNumber, Row, Col, Button } from 'antd';
const { Option } = Select;

const cityInput = [
  'Brooklyn',
  'New York',
  'San Diego',
  'San Antonio',
  'Dallas'
];

const brandAssociation = ['Yes', 'No'];
const categories = [
  'Restaurants and Other Eating Places',
  'Grocery Stores',
  'Clothing Stores',
  'Sporting Goods, Hobby and Musical Instrument Stores',
  'Electronics and Appliance Stores',
  'Automobile Dealers',
  'Beer ,Wine, and Liquor Stores',
  'Specialty Food Stores',
  'Florists',
  'Book Stores and News Dealers'
];

const MainContent = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Row>
      <Col span={4}></Col>
      <Col style={{ marginTop: 30 }} span={16}>
        <Form
          name='basic'
          form={form}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Card
            // style={{ textAlign: 'center' }}
            title='Predict whether your company will sustain or not'
          >
            <Form.Item
              name='city'
              rules={[
                {
                  required: true,
                  message: 'Please input city!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                name='city'
                placeholder='Select a City'
              >
                {cityInput.map((city) => (
                  <Option key={city} value={city}>
                    {city}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              name='postalCode'
              rules={[
                {
                  required: true,
                  message: 'Please input postal code!'
                }
              ]}
            >
              <InputNumber
                style={{ width: '100%', textAlign: 'center' }}
                placeholder='Postal Code'
                name='postalCode'
                type='number'
                min='0'
              />
            </Form.Item>

            <Form.Item
              name='brand'
              rules={[
                {
                  required: true,
                  message: 'Please input postal code!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder='Brand Associtation'
                name='brand'
              >
                {brandAssociation.map((brand) => (
                  <Option key={brand} value={brand}>
                    {brand}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              name='category'
              rules={[
                {
                  required: true,
                  message: 'Please input postal code!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder='Select a Category'
                name='category'
              >
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Button type='secondary' style={{ width: '48%' }} htmlType='submit'>
              Predict
            </Button>
            <Button type='ghost' style={{ width: '4%' }}></Button>
            <Button type='secondary' style={{ width: '48%' }} onClick={onReset}>
              Reset
            </Button>
          </Card>
        </Form>
      </Col>
    </Row>
  );
};

export default MainContent;
