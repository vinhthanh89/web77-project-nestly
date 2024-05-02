import React, { useEffect, useState } from 'react';
import { Button, Form, Space, Table, Tag } from 'antd';

import { Pagination, Popconfirm } from 'antd';
import toast from 'react-hot-toast';
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaFileImage } from "react-icons/fa";


const Dashboard = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [pageSize, setPageSize] = useState(10)
    const [pageIndex, setPageIndex] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [totalDoc, setTotalDoc] = useState(0)
    const [modalCreateUser, setModalCreateUser] = useState(false)


    const columns = [
        {
            title: 'Thành phố',
            dataIndex: 'city',
            key: 'city',
        },
        {
            title: 'Tên đường',
            dataIndex: 'district',
            key: 'district',
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Diện tích',
            dataIndex: 'area',
            key: 'area',
        },
        {
            title: 'Số phòng ngủ',
            dataIndex: 'numberOfBedrooms',
            key: 'numberOfBedrooms',
        },
        {
            title: 'Giá/đêm',
            dataIndex: 'rentPrice',
            key: 'rentPrice',
        },
        {
            title: 'Hành động',
            key: 'action',
            render: (row) => {
                return (
                    <div className='flex gap-2'>
                        <FaEdit cursor={'pointer'}
                            onClick={
                                () => { handleOpenEditModal(row._id) }
                            } />
                        <Popconfirm
                            title="Xoá người dùng"
                            description="Bạn có chắc chắn xoá người dùng này"
                            onConfirm={() => handleDeleteUser(row._id)}
                            okText="Đồng ý"
                            cancelText="Huỷ"
                            style={{ cursor: "pointer" }}
                        >
                            <MdDelete />
                        </Popconfirm>
                        <FaFileImage cursor={'pointer'} onClick={() => handleOpenUploadUserAvatarModal(row._id)} />
                    </div>
                )
            }
        },
    ];

    const [form] = Form.useForm()


    const getUsers = async () => {
        try {
            setLoading(true)
            const result = await getPagingUser({ pageSize, pageIndex })
            setUsers(result.data.users)
            setTotalPages(result.data.totalPage)
            setTotalDoc(result.data.count)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getUsers()
    }, [pageSize, pageIndex])

    return (
        <>
            <Button type='primary' style={{ margin:'10px', width: '200px', float: 'left' }} onClick={() => setModalCreateUser(true)}>Thêm địa điểm nghỉ dưỡng</Button>
            <Table loading={loading} columns={columns} dataSource={users} pagination={false} />
            <div style={{ textAlign: 'right', width: '100%', paddingRight:'70px', paddingTop:'10px' }}>
    <Pagination
        defaultCurrent={1}
        current={pageIndex}
        total={totalDoc}
        pageSize={pageSize}
        showSizeChanger
        onChange={(pageIndex, pageSize) => {
            setPageSize(pageSize)
            setPageIndex(pageIndex)
        }}
    />
</div>

        </>
    )
}
export default Dashboard;