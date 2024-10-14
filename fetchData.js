fetch('https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });