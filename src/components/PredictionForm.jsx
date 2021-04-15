import { Button, Col, DatePicker, Form, Row, Select } from "antd";
import React, { useEffect } from "react";
import {
  brandAssociation,
  categories,
  cityInput,
  postal,
  rangeConfig
} from "../constants/values";

const { Option } = Select;
const { RangePicker } = DatePicker;

const PredictionForm = ({
  setCurrent,
  request: { data, mutate, isError, isSuccess, isLoading, error },
}) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (isError) {
      console.log({ error });
    }
    if (isSuccess && !isLoading) {
      setCurrent((prevCount) => prevCount + 2);
    }
  }, [isError, isSuccess, isLoading, error, data, setCurrent]);

  const onFinish = (fieldsValue) => {
    setCurrent((prevCount) => prevCount + 1);
    const rangeValue = fieldsValue["dates"];
    const values = {
      ...fieldsValue,
      dates: [
        rangeValue[0].format("YYYY-MM-DD"),
        rangeValue[1].format("YYYY-MM-DD"),
      ],
    };
    console.log(values);

    const currFormData = {
      city: values.city,
      postal_code: values.postal_code,
      category: values.category,
      brand_association: values.brand_association,
      start_date: values.dates[0].split("-").join(""),
      end_date: values.dates[1].split("-").join(""),
    };
    console.log(currFormData);
    mutate({
      data: currFormData,
    });
  };

  const onFinishFailed = (errorInfo) => {
    console.log(errorInfo);
  };

  const onReset = () => {
    form.resetFields();
    setCurrent(0);
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
        <Col className="gutter-row" span={3}>
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
            >
              {cityInput.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
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
            >
              {postal.map((code) => (
                <Option key={code} value={code}>
                  {code}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
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
              placeholder="Brand Associtation"
              name="brand_association"
            >
              {brandAssociation.map((brand) => (
                <Option key={brand} value={brand === "Yes" ? 1 : 0}>
                  {brand}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
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
            >
              {categories.map((category) => (
                <Option key={category} value={category}>
                  {category}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={5}>
          <Form.Item name="dates" {...rangeConfig}>
            <RangePicker
              style={{ width: "100%" }}
              disabledDate={(d) => {
                return !d || d.isAfter("2022-01-01") || d.isBefore(Date.now());
              }}
            />
          </Form.Item>
        </Col>
        <Col className="gutter-row" span={4}>
          <Button style={{ width: "48%" }} htmlType="submit">
            Predict
          </Button>
          <Button style={{ width: "48%" }} onClick={onReset}>
            Reset
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default PredictionForm;
