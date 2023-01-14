const fetchApiFunc = async () => {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const jason = await response.json();

  return response.ok ? Promise.resolve(jason) : Promise.reject(jason);
};

export default fetchApiFunc;
