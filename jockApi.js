const apiURL = "https://official-joke-api.appspot.com/random_joke";

const jokeapi = async () => {
  try{
    const res = await fetch(apiURL);
  let data = await res.json();
  console.log(`${data.setup}:- ${data.punchline}`);
  }
  catch(error){
    console.log(`Check your internet Erorr was ${error}`);
  }
};

jokeapi();
