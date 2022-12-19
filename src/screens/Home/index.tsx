import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Space, Table } from 'antd';
import type { ColumnsType, TablePaginationConfig } from 'antd/es/table';
import dayjs from 'dayjs';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LayoutCustom } from '../../components';
import { getListFlightInfo } from '../../redux/flightInfo';
// import { useNavigate } from 'react-router-dom';
import { getListData } from '../../redux/flightInfo/selector';
import { IItemFlightInformation, TStatusFlight } from './types';

export interface TableParams {
  pagination?: TablePaginationConfig;
}

const convertData = (_data: any) => {
  return _data?.map((item: any) => {
    return {
      ...item,
      receivedDate: dayjs(item.receivedDate).format('YYYY/MM/DD'),
      recipients: item.recipients.toString(),
      status: item.status === 'IN' ? TStatusFlight.IN : TStatusFlight.OUT,
    };
  });
};

export const Home = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector(getListData);

  React.useEffect(() => {
    dispatch(getListFlightInfo());
  }, []);

  const handleClickIcon = (index: number, id: string) => {
    console.log('handleClick', index);
    console.log('id', id);
  };

  const columns: ColumnsType<IItemFlightInformation> = [
    {
      title: 'Status',
      dataIndex: 'status',
      render: (status) =>
        status === TStatusFlight.IN ? (
          <FontAwesomeIcon icon={solid('download')} size="2x" />
        ) : (
          <FontAwesomeIcon icon={solid('upload')} size="2x" />
        ),
      width: '10%',
      key: 'status',
    },
    {
      title: 'Priority',
      dataIndex: 'priority',
      width: '10%',
      key: 'priority',
    },
    {
      title: 'Originator',
      dataIndex: 'originator',
      width: '10%',
      key: 'originator',
    },
    {
      title: 'Recipients',
      dataIndex: 'recipients',
      width: '15%',
      key: 'recipients',
    },
    {
      title: 'Text',
      dataIndex: 'text',
      width: '20%',
      key: 'text',
    },
    {
      title: 'Received Date',
      dataIndex: 'receivedDate',
      width: '10%',
      key: 'receivedDate',
    },
    {
      title: 'Received Time',
      dataIndex: 'receivedTime',
      width: '10%',
      key: 'receivedTime',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (_, item) => {
        return (
          <Space wrap direction="horizontal">
            <FontAwesomeIcon onClick={() => handleClickIcon(1, item.id)} icon={solid('copy')} size="2x" />
            <FontAwesomeIcon onClick={() => handleClickIcon(2, item.id)} icon={solid('share-from-square')} size="2x" />
            <FontAwesomeIcon onClick={() => handleClickIcon(3, item.id)} icon={solid('magnifying-glass')} size="2x" />
            <FontAwesomeIcon onClick={() => handleClickIcon(4, item.id)} icon={solid('trash-can')} size="2x" />
          </Space>
        );
      },
      width: '15%',
      key: 'actions',
    },
  ];

  return (
    <LayoutCustom>
      <Table columns={columns} dataSource={convertData(data)} />
    </LayoutCustom>
  );
};
