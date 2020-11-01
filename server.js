const favoriteActor = process.env.FAVORITE_ACTOR;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`${favoriteActor} rocks!`);
    await sleep(5000);
  }
}

main();
