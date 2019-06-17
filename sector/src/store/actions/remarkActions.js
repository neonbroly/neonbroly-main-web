export const createRemark = remark => {
  return (dispatch, getState) => {
    // make async call to db
    dispatch({ type: "CREATE_REMARK", remark });
  };
};
