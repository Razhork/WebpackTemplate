//Vores event handler som sørger for at vi kan lave en HTTP GET request og få en liste af todos fra URI "http://jsonplaceholder.typicode.com/todos"
function performGetRequest1() {
    var resultElement = document.getElementById('getResult1');
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos')
      .then(function (response) {
        resultElement.innerHTML = generateSuccessHTMLOutput(response);
      })
      .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
      });   
  }

  //Sørger for at hvis requesten er succesfuld, så generere den HTML outputtet, og hvis det fejler får vi en catch besked 
  function generateSuccessHTMLOutput(response) {
    return  '<h4>Result</h4>' + 
            '<h5>Status:</h5> ' + 
            '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>'; 
  }
  function generateErrorHTMLOutput(error) {
    return  '<h4>Result</h4>' + 
            '<h5>Message:</h5> ' + 
            '<pre>' + error.message + '</pre>' +
            '<h5>Status:</h5> ' + 
            '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
            '<h5>Headers:</h5>' + 
            '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' + 
            '<h5>Data:</h5>' + 
            '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>'; 
  }

  //En GET Request med parameter hvor man kan bruge et specifikt todo ID som request parameter
  function performGetRequest2() {
    var resultElement = document.getElementById('getResult2');
    var todoId = document.getElementById('todoId').value;
    resultElement.innerHTML = '';
    
    axios.get('http://jsonplaceholder.typicode.com/todos', {
      params: {
        id: todoId
      }
    })
    .then(function (response) {
      console.log(response);
      resultElement.innerHTML = generateSuccessHTMLOutput(response);
    })
    .catch(function (error) {
        resultElement.innerHTML = generateErrorHTMLOutput(error);
    });
  }

//POST Request 
  document.getElementById('todoInputForm').addEventListener('submit', performPostRequest);
function performPostRequest(e) {
  var resultElement = document.getElementById('postResult');
  var todoTitle = document.getElementById('todoTitle').value;
  resultElement.innerHTML = '';
  
  axios.post('http://jsonplaceholder.typicode.com/todos', {
    userId: '1',
    title: todoTitle,
    completed: false
  })
  .then(function (response) {
    resultElement.innerHTML = generateSuccessHTMLOutput(response);
  })
  .catch(function (error) {
    resultElement.innerHTML = generateErrorHTMLOutput(error);
  });
  
  e.preventDefault();
}