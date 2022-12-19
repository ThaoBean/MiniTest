import { RootState } from '../store';

export const getListData = (state: RootState) => state.flightInfo.data;
