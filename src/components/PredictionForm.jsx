import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import {
  brandAssociation,
  categories,
  cityInput,
  cityToPostal,
  rangeConfig
} from "../constants/values";

const { Option } = Select;
const { RangePicker } = DatePicker;
console.log(cityToPostal);
const PredictionForm = ({
  setCurrent,
  request: { data, mutate, isError, isSuccess, isLoading, error, reset },
}) => {
  const [form] = Form.useForm();
  const [postalCodeByCity, setPostalCodeByCity] = useState([]);
  const handleCityChange = (event) =>{
    console.log(event);
    form.setFieldsValue({
      postal_code:null
    });
    setCurrent(0);
    cityToPostal.map((city)=>{
      if(city.city===event){
        setPostalCodeByCity(city.postalCode)
      }
    })
  }
  useEffect(() => {
    if (isError) {
      console.log({ error });
    }
    if (isSuccess && !isLoading) {
      setCurrent(2);
    }
    if (isSuccess) {
      console.log(data);
    }
  }, [isError, isSuccess, isLoading, error, data, setCurrent]);

  const onFinish = (fieldsValue) => {
    // setIsDisabled(true);
    setCurrent(1);
    const rangeValue = fieldsValue["dates"];
    const values = {
      ...fieldsValue,
      dates: [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    };

    const currFormData = {
      city: values.city,
      postal_code: values.postal_code,
      category: values.category,
      brand_association: values.brand_association,
      start_date: values.dates[0].split("-").join(""),
      end_date: values.dates[1].split("-").join(""),
    };

    mutate({
      data: currFormData,
    });

  };

  const onFinishFailed = (errorInfo) => {
    console.error(errorInfo);
  };
  const [isDisabled, setIsDisabled] = useState(false);
  const onReset = () => {
    setIsDisabled(false);
    setPostalCodeByCity([])
    form.resetFields();
    setCurrent(0);
    reset();
  };

  return (
    <Form
      name="basic"
      form={form}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row style={{ margin: 5 }} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={8}>
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: "Please select a city!",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: "100%" }}
              name="city"
              placeholder="Select a City"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              onChange={handleCityChange}
              disabled={isDisabled}
            >
              {cityInput.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="postal_code"
            rules={[
              {
                required: true,
                message: "Please select a postal code!",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="Select a Postal Code"
              name="postal_code"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toString().indexOf(input.toString()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toString()
                  .localeCompare(optionB.children.toString())
              }
              disabled={isDisabled}
            >
              {postalCodeByCity.map((code) => (
                <Option key={code} value={code}>
                  {code}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item
            name="brand_association"
            rules={[
              {
                required: true,
                message: "Please select whether brand associated or not!",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
              placeholder="Brand Association"
              name="brand_association"
              disabled={isDisabled}
            >
              {brandAssociation.map((brand) => (
                <Option key={brand} value={brand === "Yes" ? 1 : 0}>
                  {brand}
                </Option>
              ))}
              
            </Select>
          </Form.Item>
          <Form.Item
            name="category"
            rules={[
              {
                required: true,
                message: "Please select a category!",
              },
            ]}
          >
            <Select
              style={{ width: "100%" }}
              showSearch
              placeholder="Select a Category"
              name="category"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              filterSort={(optionA, optionB) =>
                optionA.children
                  .toLowerCase()
                  .localeCompare(optionB.children.toLowerCase())
              }
              disabled={isDisabled}
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={8}>
          <Form.Item name="dates" {...rangeConfig}>
            <RangePicker
              style={{ width: "100%" }}
              disabledDate={(d) => {
                return (
                  !d || d.isAfter("2100-01-01") || d.isBefore("2021-03-01")
                );
              }}
              disabled={isDisabled}
            />
          </Form.Item>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <Button type="default" style={{ width: "50%" }} htmlType="submit">
              Predict
            </Button>
            <Button
              danger
              type="text"
              style={{ width: "50%" }}
              onClick={onReset}
            >
              Reset
            </Button>
          </div>
        </Col>
      </Row>
    </Form>
  );
};

export default PredictionForm;
