export default function validateEmail(phone) {
  // const re = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
  // return re.test(phone);
  var phoneRe = /^[0]\d{0}[3]\d{0}\d{9}$/;
  var digits = phone.replace(/\D/g, "");
  return phoneRe.test(digits);
}