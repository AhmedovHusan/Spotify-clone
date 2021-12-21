export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Remove after finished developing
  // token:
  //   "BQDL5hg00GRpttVOj8CpZazVgAlkqPhfDT1MpiKJCVuLm7jIvtlgqD8BnnKy8KGJrlaiqDSAqosslmndHmjeZZc3IuLv2bJqMrtR1su_75hni6cHNWciFGvLI1R02TKqJ950gWmCi9BsmCr0P3M42Tjdrt_n7eUmLAjzqqllckdqTPJl6z_K",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlist: action.playlist,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
