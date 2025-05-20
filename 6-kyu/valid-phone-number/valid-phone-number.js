function validPhoneNumber(phoneNumber){
  //TODO: Return whether phoneNumber is in the proper form
  const isValid = /^\(\d{3}\) \d{3}-\d{4}$/;
  return isValid.test(phoneNumber)
}