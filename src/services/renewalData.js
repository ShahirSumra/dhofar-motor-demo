import axios from "axios";
import config from "./config";
const baseUrl = config.renewalUrl;

const renewalPolicy = {};

renewalPolicy.getData = async (civiId, registrtionNumber, registrationMark) => {
  const data = `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://service.beyon.com/">
                  <soapenv:Header>
                    <wsse:Security soapenv:mustUnderstand="1" xmlns:wsse="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-secext-1.0.xsd" xmlns:wsu="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-wssecurity-utility-1.0.xsd">
                        <wsse:UsernameToken wsu:Id="UsernameToken-637D51574DE87426AF16023163123431">
                          <wsse:Username>dhofar</wsse:Username>
                          <wsse:Password Type="http://docs.oasis-open.org/wss/2004/01/oasis-200401-wss-username-token-profile-1.0#PasswordText">cTb%23jPmQ8</wsse:Password>
                        </wsse:UsernameToken>
                    </wsse:Security>
                  </soapenv:Header>
                  <soapenv:Body>
                    <ser:SearchRenewal>
                        <renewalInfo>
                          <civilId>${civiId}</civilId>
                          <plateNo>${registrtionNumber}</plateNo>
                          <registrationMark>${registrationMark}</registrationMark>
                        </renewalInfo>
                    </ser:SearchRenewal>
                  </soapenv:Body>
                </soapenv:Envelope>`
  
  const url = `${baseUrl}/getRenewal?wsdl`;

  const res = await axios({
    url,
    method : "POST",
    data
  });

  return res;
}

export default renewalPolicy;

