const initState = {
  remarks: [{ id: "1", content: "test content" }]
};

const remarkReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_REMARK":
      console.log("created remark", action.remark);
      return state;
    case "CREATE_REMARK_ERROR":
      console.log("create remark error", action.err);
      return state;
    default:
      return state;
  }
};

export default remarkReducer;
