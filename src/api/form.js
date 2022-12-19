import axiosWithApiServer from "./axiosHelper";

const submitform = (
  name,
  email,
  handleClose,
  handleClickOpen1,
  setwishlistCount,
  seterror,
  settraderName
) => {
  // console.log('submit form called')
  // var myHeaders = new Headers();
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("Access-Control-Allow-Origin:  http://localhost:3001/");
  // myHeaders.append("Access-Control-Allow-Methods: POST")
  // myHeaders.append("Access-Control-Allow-Headers: Content-Type, Authorization");

  var raw = {
    name: name,
    email: email,
  };

  // var requestOptions = {
  //     headers: myHeaders,
  //     body: JSON.stringify(raw),
  //     redirect: 'follow'
  // };

  // fetch("https://api-dev.density.exchange/user/form", requestOptions)
  // .then(response => response.json())
  // .then(result => {
  //     console.log("waitlist", result)
  //     handleClose();
  //     handleClickOpen1();
  // }).catch(error => console.log('error', error));

  const axiosWithApiServerPromise = axiosWithApiServer({
    method: "post",
    body: JSON.stringify(raw),
    url: "https://api-dev.density.exchange/user/form",
  });
  axiosWithApiServerPromise
    .then((response) => {
      setwishlistCount(response.data.waitlistCount);
      settraderName(response.data.name);
      handleClose();
      handleClickOpen1();
      seterror({
        nameerror: "",
        emailerror: "",
      });
    })
    .catch((errorResponse) => {
      seterror({
        nameerror: "",
        emailerror: "email already registered",
      });
    });
};

export default submitform;

// const changePasswordPromise = changePasswordApi(JSON.stringify({ OldPassword: value.oldpassword, NewPassword: value.newpassword }));
//     changePasswordPromise.then((response) => {
//       console.log(response);
// });
