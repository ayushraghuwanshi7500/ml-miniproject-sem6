import {
  Form,
  Card,
  Select,
  DatePicker,
  Space,
  Input,
  InputNumber,
  Row,
  Col,
  Button
} from 'antd';

import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
const { Option } = Select;
const { RangePicker } = DatePicker;
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

const config = {
  rules: [
    {
      type: 'object',
      required: true,
      message: 'Please select time!',
    },
  ],
};

const MainContent = ({ formData, setFormData }) => {
  const [form] = Form.useForm();

  const [redirect, setRedirect] = useState(false);
  const onFinish = (fieldsValue) => {
    const values = {
      ...fieldsValue,
      "start_date":fieldsValue['start_date'].format('YYYY-MM-DD'),
      "end_date":fieldsValue['end_date'].format('YYYY-MM-DD'),
    };
    console.log(values);
    setFormData(values);
    setRedirect(true);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onReset = () => {
    form.resetFields();
  };
  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }
  
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
          style={{ backgroundColor: '#f6f5f5' }}
        >
          <Card
            style={{ backgroundColor: '#f6f5f5' }}
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
              name='postal_code'
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
                name='postal_code'
                type='number'
                min='0'
              />
            </Form.Item>

            <Form.Item
              name='brand_association'
              rules={[
                {
                  required: true,
                  message: 'Please input whether brand associated or not!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder='Brand Associtation'
                name='brand_association'
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
                  message: 'Please input a category!'
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
            <Form.Item
              name="start_date"
            >
                <DatePicker
                  placeholder="Start Date"
                  style={{ width: '100%' }}
                  {...config}
                />
            </Form.Item>
            <Form.Item
              name="end_date"
            >
                <DatePicker
                  placeholder="End Date"
                  style={{ width: '100%' }}
                  {...config}
                />
            </Form.Item>
            <Button style={{ width: '48%' }} htmlType='submit'>
              {redirect && (
                <Redirect
                  to={{ pathname: '/prediction', state: { formData } }}
                />
              )}
              Predict
            </Button>
            <Button type='ghost' style={{ width: '4%' }}></Button>
            <Button style={{ width: '48%' }} onClick={onReset}>
              Reset
            </Button>
          </Card>
        </Form>
      </Col>
    </Row>
  );
};

export default MainContent;
