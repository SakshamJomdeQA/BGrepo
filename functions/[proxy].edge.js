const blueDeploymentHost = "bgrepo.devcontentstackapps.com";
const greenDeploymentHost = "bgrepo-green.devcontentstackapps.com";

export default async function handler(request) {
  const randomNumber = Math.floor((Math.random() * 10) + 1);
  const modifiedUrl = new URL(request.url);
  console.log(randomNumber);
  if (randomNumber % 2 === 0) {
    modifiedUrl.hostname = greenDeploymentHost;
      console.log(modifiedUrl.hostname);
  } else {
    modifiedUrl.hostname = blueDeploymentHost;
    console.log(modifiedUrl.hostname);
  }

  const newRequest = new Request(modifiedUrl, request);
  return fetch(newRequest);
}
