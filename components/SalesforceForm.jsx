function SalesforceForm() {
  return (
    <form action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D5i00000DTYWU"
    method="POST" className="flex flex-col items-center max-w-xs mx-auto sm:max-w-xl mt-4">
      <input type="hidden" name="oid" value="00D5i00000DTYWU" />
      <input type="hidden" name="retURL" value="https://www.google.com" />
      <label htmlFor="first_name">First Name</label>
      <input id="first_name" maxLength="40" name="first_name" size="20" type="text" />
      <label htmlFor="last_name">Last Name</label>
      <input id="last_name" maxLength="80" name="last_name" size="20" type="text" />
      <label htmlFor="email">Email</label>
      <input id="email" maxLength="80" name="email" size="20" type="text" />
      <label htmlFor="city">City</label>
      <input id="city" maxLength="40" name="city" size="20" type="text" />
      <label htmlFor="state">State/Province</label>
      <input id="state" maxLength="20" name="state" size="20" type="text" />
      <input type="submit" name="submit" className="bg-green-800 cursor-pointer font-bold text-green-300 mt-10" />
    </form>
  );
}

export default SalesforceForm;
