import { Button, Form, Input, Modal } from 'antd'
import React, { useEffect, useRef, useState } from 'react'
import { networkService } from '../../network/network'
import { useNavigate, useParams} from 'react-router-dom'

function CustomerUpdate() {

  let {id} = useParams();
  const form = useRef(null);

  const navigate = useNavigate();

  const [customer, setCustomer] = useState({}); 


  useEffect(() => {
    
    networkService.getById('customers', id)
    .then(data => {
      setCustomer(data);
      form.current.resetFields()
    })

  }, [])


  const onFinish = (values) => {

    networkService.update("customers", values,id)
    .then((res) => {
      Modal.success({
        content: 'Customer updated.'
      })
      navigate('/admin/CustomerList');
    })

  }

  return (<>
  <Form
    ref={form}
    layout='vertical'
    onFinish={onFinish}
    initialValues={customer}
    >
      <Form.Item
        label='Id'
        name='id'
        rules={[{required: true, message: 'Please input customer id!'}]}
      >
        <Input disabled={true}/>
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
        Update
      </Button>

    </Form>
  </>
  )
}

export default CustomerUpdate