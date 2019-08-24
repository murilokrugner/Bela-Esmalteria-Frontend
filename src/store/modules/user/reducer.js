import produce from 'immer';

const InitalState = {
  profile: null,
};

export default function user(state = InitalState, action) {
  switch (action.type) {
    case '@auth/SIGN_IN_SUCCESS':
      return produce(state, draft => {
        draft.profile = action.payload.user;
      });
    default:
      return state;
  }
}
