export const createRemark = remark => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // make async call to db
    const firestore = getFirestore();
    firestore
      .collection("remarks-main")
      .add({
        ...remark,
        authorFirstName: "Test Fist Name",
        authorLastName: "Test Last Name",
        auhtorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_REMARK", remark });
      })
      .catch(err => {
        dispatch({ type: "CRETE_REMARK_ERROR", err });
      });
  };
};
