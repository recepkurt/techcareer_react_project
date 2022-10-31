import { Modal, Table } from 'antd';
import { Button } from 'antd/lib/radio';
import React, { useEffect, useState } from 'react'
import { networkService } from '../../network/network';
import { useNavigate } from 'react-router-dom';


const { confirm } = Modal;




function CustomerList() {

  const [customers, setcustomers] = useState([]);
  const updateNavigate = useNavigate();

  useEffect(() => {
    getCustomers();

  }, []);


const getCustomers = () => {
  networkService.getAll('/customers')
      .then(data => {
        setcustomers(data)
      })
      .catch((err) => {
        console.log('Error', err);
        throw err
      })
}

const deleteCustomer = (id) => {
console.log('id',id);

  networkService.delete('customers', id)
  .then(res =>{
    getCustomers();
  })

}

const showDeleteConfirm = (id) => {

  confirm({
      title: 'Are you sure to delete this customer?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        deleteCustomer(id);
      },
      onCancel() {

      },
  });

}


const updateCustomer = (id)=> {


  updateNavigate('/admin/CustomerUpdate/' + id);
}

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      sorter: (a, b) => a.id.localeCompare(b.id)
    },
    {
      title: 'Company Name',
      dataIndex: 'companyName',
      sorter: (a, b) => a.companyName.localeCompare(b.companyName)
    },
    {
      title: 'Contact Name',
      dataIndex: 'contactName',
      sorter: (a, b) => a.contactName.localeCompare(b.contactName)
    },
    {
      title: 'Contact Title',
      dataIndex: 'contactTitle',
      sorter: (a, b) => a.contactTitle.localeCompare(b.contactTitle)
    },
    {
      title: 'DELETE',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => showDeleteConfirm(id)} type="primary" danger>Delete</Button>
    },
    {
      title: 'DETAIL',
      dataIndex: 'id',
      render: () => <Button type="primary">Detail</Button>
    },
    {
      title: 'UPDATE',
      dataIndex: 'id',
      render: (id) => <Button onClick={() => updateCustomer(id)} type="primary">Update</Button>
    }
  ]

  return (<>
    <Table dataSource={customers} pagination = {{pageSize: 20}} columns={columns} rowKey='id'></Table>
  </>
  )
}

export default CustomerList