const blueDeploymentHost = "bgrepo.devcontentstackapps.com";
const greenDeploymentHost = "bgrepo-green.devcontentstackapps.com";

export default {
  async fetch(request) {
    const random = Math.random();
    const url = new URL(request.url);
    url.hostname = random > 0.5
      ? blueDeploymentHost
      : greenDeploymentHost;
    console.log("Routing to:", url.hostname);
    return fetch(new Request(url, request));
  }
};