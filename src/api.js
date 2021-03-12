const url = "https://api.coincap.io/v2"; 
const now = new Date();
const end = now.getTime();
now.setDate(now.getDate() - 1);
const start = now.getTime();

function getAssets() {
  return getRequest("assets?limit=20");
}

function getRequest(method) {
  return fetch(`${url}/${method}`, {
    mode: "cors",
    method: "GET",
    headers: {
      Accept: "application/json"
    }
  })
    .then(response => response.json())
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log("request failed", error);
    }); // Syntax error: unexpected end of input
}

async function getAsset(coin) {
  const res = await fetch(`${url}/assets/${coin}`);
  const res_1 = await res.json();
  return res_1.data;
}

async function getAssetHistory(coin) {
  const rsesh = await fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const resh_1 = await rsesh.json();
  return resh_1.data;
}
export default { getAssets, getAsset, getAssetHistory };
