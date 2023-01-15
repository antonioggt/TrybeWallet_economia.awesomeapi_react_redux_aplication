const fetchApiFunc = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jason = await response.json();

  return Promise.resolve(jason);
};

export default fetchApiFunc;
