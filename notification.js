function emailNotification(email) {
  if (typeof email !== "string" || !email.includes("@")) {
    return "Invalid email";
  }
  const [userName, domainName] = email.split("@");
  if (userName && domainName) {
    return `${userName} sent you an email from ${domainName}`;
  } else {
    return "Invalid Inputs";
  }
}
const emailInput = "zahid.ph@gmailcom";

const output = emailNotification(emailInput);
console.log(output);
