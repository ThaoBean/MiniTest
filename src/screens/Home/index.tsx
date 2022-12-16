import { Button, Space } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { details } from '../../navigates/path';
import { decrement, getAmbassadorForRanking, incrementByAmount } from '../../redux/Counter';
import { getCount } from '../../redux/SelectorCount';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const count = useSelector(getCount);
  useEffect(() => {
    dispatch(getAmbassadorForRanking());
  });
  return (
    <div>
      <Space wrap>
        <span>{count}</span>
        <Button type="primary" onClick={() => navigate(details)}>
          Primary Button
        </Button>
        <Button onClick={() => dispatch(incrementByAmount(6))}>increment</Button>
        <Button type="dashed" onClick={() => dispatch(decrement())}>
          decrement
        </Button>
        <Button type="text">call api</Button>
        <Button type="link">Link Button</Button>
      </Space>
    </div>
  );
};
