<script runat="server">
    Platform.Load("Core", "1.1.1");
    var ampscriptCredentials = Platform.Function.ContentBlockByKey("ccsip-220-ampscript-sample");
    var clientID = Variable.GetValue("@clientID");
    var clientSecret = Variable.GetValue("@clientSecret");
    Write("Client ID: " + clientID + "<br>" + "Client Secret: " + clientSecret + "<br>");

    var jsonCredentials = Platform.Function.ContentBlockByKey("ccsip-220-json-sample");
    var credentials = Platform.Function.ParseJSON(jsonCredentials);
    Write("Client ID: " + credentials.clientId + "<br>" + "Client Secret: " + credentials.clientSecret);

</script>