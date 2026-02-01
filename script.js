const apiUrl = "https://api.adviceslip.com/advice";

const genAdvice = async () => {
  const res = await fetch(apiUrl);
  let data = await res.json();
  console.log(data.slip.advice);
  
};

genAdvice()