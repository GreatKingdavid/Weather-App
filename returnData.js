const main = async ()=>{
    const apiURL = "https://catfact.ninja/fact";

const getFact = async () => {
  try{
    const res = await fetch(apiURL)
  let data = await res.json()
  return data.fact;
  }catch(error){
    console.log(`Connection failed with ${error}`);
    return `Could not load fact plases try again`;
  }
}

const fact = await getFact()
alert(`Cat Fact of the day: ${fact}`);

}

main();
// getFact().then(fact => {
//     console.log(`Cat Fact of the day:${fact}`);
// })



