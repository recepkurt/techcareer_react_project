import { Button, Form, Input, Modal } from 'antd'
import React from 'react'
import { networkService } from '../../network/network'

function AddCustomer() {
  
  
  const onFinish = (values) => {
    networkService.add('customers', values)
    .then((res) => {
      Modal.success({
        content: 'Customer added.'
      })
    })

  }
  
  
  return (<>
    <Form
    layout='vertical'
    onFinish={onFinish}
    initialValues={
      {id:'', companyName:'', contactName:'', contactTitle:''}
    }
    >
      <Form.Item
        label='Id'
        name='id'
        rules={[{required: true, message: 'Please input customer id!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label='Company Name'
        name='companyName'
        rules={[{required: true, message: 'Please input company name!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label='Contact Name'
        name='contactName'
        rules={[{required: true, message: 'Please input contact name!'}]}
      >
        <Input/>
      </Form.Item>

      <Form.Item
        label='Contact Title'
        name='contactTitle'
        rules={[{required: true, message: 'Please input contact title!'}]}
      >
        <Input/>
      </Form.Item>

      <Button type="primary" htmlType="submit">
        Add
      </Button>

    </Form>
  </>
  )
}

export default AddCustomer