import { ActionTypes } from './action';
import { MemberAction, MemberState } from './dto';

const initMemberState: MemberState = {
  id: '',
  name: '游客',
  avatar: 'https://img.yzcdn.cn/vant/cat.jpeg',
  phone: '',
};

export default (state: MemberState = initMemberState, action: MemberAction) => {
  switch (action.type) {
    case ActionTypes.FETCH_MEMBER_COMPLETED:
      return { ...state, ...action.payload };
  }

  return state;
};
