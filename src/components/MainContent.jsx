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
  Button,
  Steps
} from 'antd';
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  FormOutlined,
  SmileOutlined,
  EditFilled
} from '@ant-design/icons';
import { useEffect, useState } from 'react';
import PredictionResult from './PredictionResult';
const { Option } = Select;
const { RangePicker } = DatePicker;
const { Step } = Steps;
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
const postal = [
  11235,
  11220,
  11205,
  11229,
  11231,
  11236,
  11204,
  11234,
  52211,
  11212,
  11207,
  11224,
  11209,
  11228,
  11232,
  11203,
  11214,
  44129,
  11210,
  11222,
  11201,
  11237,
  11225,
  11217,
  11226,
  11213,
  11216,
  11219,
  11223,
  11230,
  11211,
  11215,
  11238,
  11221,
  11249,
  11206,
  11208,
  11233,
  11218,
  11239,
  44144,
  44130,
  53521,
  75226,
  75217,
  75247,
  30157,
  75235,
  75234,
  75216,
  75229,
  75220,
  75232,
  75218,
  75208,
  75240,
  75253,
  75236,
  75233,
  75228,
  75211,
  75212,
  75041,
  28034,
  75238,
  75093,
  75237,
  75209,
  75241,
  75243,
  75116,
  75206,
  75215,
  75219,
  75207,
  75210,
  75231,
  75205,
  75223,
  97338,
  75201,
  75204,
  75230,
  75227,
  75225,
  75203,
  75244,
  75224,
  30132,
  75248,
  75254,
  75287,
  75252,
  75202,
  75038,
  75214,
  75080,
  18612,
  75313,
  75043,
  54733,
  75149,
  10002,
  10016,
  10028,
  10022,
  10036,
  10019,
  10012,
  10009,
  10025,
  10065,
  10007,
  10005,
  10029,
  10017,
  10024,
  10075,
  10128,
  10013,
  10040,
  10023,
  10003,
  10011,
  10001,
  10469,
  10035,
  10021,
  10010,
  10112,
  10018,
  10032,
  10038,
  10151,
  10034,
  10027,
  10014,
  10281,
  10455,
  10006,
  10033,
  10020,
  10004,
  10039,
  10026,
  10174,
  10080,
  10037,
  10461,
  10031,
  10460,
  10030,
  10468,
  10451,
  10153,
  10286,
  10271,
  11371,
  10309,
  10462,
  78230,
  78245,
  78237,
  78222,
  78219,
  78249,
  78204,
  78240,
  78257,
  78201,
  78250,
  78211,
  78221,
  78212,
  78227,
  78218,
  78224,
  78233,
  78217,
  78244,
  78228,
  78216,
  78229,
  78073,
  78220,
  78213,
  78205,
  78258,
  78261,
  78210,
  78209,
  78247,
  78202,
  78252,
  78239,
  78248,
  78223,
  78256,
  78253,
  78238,
  78232,
  78207,
  78214,
  78251,
  78023,
  78215,
  78259,
  78231,
  78242,
  78225,
  78254,
  33576,
  78260,
  78234,
  78226,
  78208,
  78255,
  92103,
  92111,
  92173,
  92101,
  92115,
  92105,
  92130,
  92154,
  92126,
  92109,
  92121,
  92127,
  92107,
  92110,
  92120,
  92104,
  92108,
  92122,
  92102,
  92139,
  92117,
  92113,
  92116,
  92114,
  92106,
  92128,
  92129,
  92123,
  92119,
  92131,
  78384,
  92124,
  92132,
  11242,
  75039,
  75246,
  75019,
  10475,
  10474,
  10055,
  10119,
  10314,
  78264,
  92136,
  49230,
  75251,
  11361,
  10110,
  78006,
  92182,
  75270,
  10465,
  10467,
  10280,
  10459,
  6234,
  21225,
  75044,
  10169,
  10121,
  10282,
  78263,
  78236,
  92134,
  92135,
  92145,
  11372,
  10079,
  92014,
  92027,
  78288,
  39425
];

const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: 'Please select dates!'
    }
  ]
};

const MainContent = ({ formData, setFormData }) => {
  const [form] = Form.useForm();
  const [showPrediction, setShowPrediction] = useState(false);
  const [current, setCurrent] = useState(0);
  const onFinish = (fieldsValue) => {
    setCurrent((prevCount) => prevCount + 1);
    const rangeValue = fieldsValue['dates'];
    const values = {
      ...fieldsValue,
      dates: [
        rangeValue[0].format('YYYY-MM-DD'),
        rangeValue[1].format('YYYY-MM-DD')
      ]
    };
    console.log(values);

    setFormData(values);
    setShowPrediction(true);
    setCurrent((prevCount) => prevCount + 2);
  };
  useEffect(() => {
    console.log(formData);
  }, [formData]);
  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };
  const onReset = () => {
    form.resetFields();
    setCurrent(0);
    setShowPrediction(false);
  };
  function onChange(dates, dateStrings) {
    console.log('From: ', dates[0], ', to: ', dates[1]);
    console.log('From: ', dateStrings[0], ', to: ', dateStrings[1]);
  }

  return (
    <>
      <Row style={{ margin: 20, marginBottom: 30 }}>
        <Col span={4}></Col>
        <Col span={16}>
          <Steps current={current}>
            <Step title='Data Entry' />
            <Step title='Data Processing' />
            <Step title='Prediction' />
          </Steps>
        </Col>
      </Row>
      <Form
        name='basic'
        form={form}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // style={{ backgroundColor: '#f6f5f5' }}
      >
        <Row style={{ margin: 5 }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className='gutter-row' span={3}>
            <Form.Item
              name='city'
              rules={[
                {
                  required: true,
                  message: 'Please select a city!'
                }
              ]}
            >
              <Select
                showSearch
                style={{ width: '100%' }}
                name='city'
                placeholder='Select a City'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {cityInput.map((city) => (
                  <Option key={city} value={city}>
                    {city}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={4}>
            <Form.Item
              name='postal_code'
              rules={[
                {
                  required: true,
                  message: 'Please select a postal code!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder='Select a Postal Code'
                name='postal_code'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toString().indexOf(input.toString()) >= 0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toString()
                    .localeCompare(optionB.children.toString())
                }
              >
                {postal.map((code) => (
                  <Option key={code} value={code}>
                    {code}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={4}>
            <Form.Item
              name='brand_association'
              rules={[
                {
                  required: true,
                  message: 'Please select whether brand associated or not!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                placeholder='Brand Associtation'
                name='brand_association'
              >
                {brandAssociation.map((brand) => (
                  <Option key={brand} value={brand === 'Yes' ? 1 : 0}>
                    {brand}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={4}>
            <Form.Item
              name='category'
              rules={[
                {
                  required: true,
                  message: 'Please select a category!'
                }
              ]}
            >
              <Select
                style={{ width: '100%' }}
                showSearch
                placeholder='Select a Category'
                name='category'
                optionFilterProp='children'
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                }
                filterSort={(optionA, optionB) =>
                  optionA.children
                    .toLowerCase()
                    .localeCompare(optionB.children.toLowerCase())
                }
              >
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={5}>
            <Form.Item name='dates' {...rangeConfig}>
              <RangePicker
                style={{ width: '100%' }}
                disabledDate={(d) => !d || d.isAfter('2022-01-01')}
              />
            </Form.Item>
          </Col>
          <Col className='gutter-row' span={4}>
            <Button style={{ width: '48%' }} htmlType='submit'>
              Predict
            </Button>
            <Button style={{ width: '48%' }} onClick={onReset}>
              Reset
            </Button>
          </Col>
        </Row>
      </Form>
      {showPrediction && (
        <PredictionResult formData={formData} setFormData={setFormData} />
      )}
    </>
  );
};

export default MainContent;
