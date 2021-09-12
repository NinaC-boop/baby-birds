const API = {
  GetChatbotResponse: async message => {
    let r = await postData(message);
    return new Promise(function(resolve, reject) {
      if (r && r.answers && r.answers.length > 0) {
        resolve(r.answers[0].answer);
      }
      resolve("No answer.");
    });
  }
};

async function postData(message) {
  let headersData = {
    "Content-Type": "application/json",
    "accept": "application/json",
    "accept-encoding": "gzip, deflate",
    "accept-language": "en-US,en;q=0.8",
    "Authorization": "EndpointKey 43021727-483a-4885-bb3e-507ac2ff6393"
  };

  const response = await fetch("https://baby-bird-bot.azurewebsites.net/qnamaker/knowledgebases/50719c43-21a6-4f36-84eb-439090e98754/generateAnswer", {
    method: "POST",
    headers: headersData,
    body: JSON.stringify({"question": message}),
  });

  return response.json();
}

export default API;
