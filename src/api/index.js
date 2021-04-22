function fetchCampaignInfo() {
  return fetch("/front-test/campaignInfo.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error("Network response was not ok");
    })
    .catch((error) => {
      console.log(error);
    });
}

function fetchCampaignCountInfo() {
  return fetch("/front-test/campaignCountInfo.json")
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

export { fetchCampaignInfo, fetchCampaignCountInfo };
