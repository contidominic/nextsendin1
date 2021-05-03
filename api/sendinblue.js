const SibApiV3Sdk = require("sib-api-v3-sdk");
const defaultClient = SibApiV3Sdk.ApiClient.instance;

//Configure API key authorization: api-key
var apiKey = defaultClient.authentications["api-key"];
apiKey.apiKey =
	"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";

var apiInstance = new SibApiV3Sdk.SMTPApi();

const sendinblue = (sendSmtpEmail) => {
	apiInstance.sendTransacEmail(sendSmtpEmail).then(
		function (data) {
			return true;
		},
		function (error) {
			console.error(error);
			return false;
		}
	);
};

module.exports = sendinblue;