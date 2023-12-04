<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Fetch Data Example</title>
</head>
<body>
  <button id="fetchDataButton">Fetch Data</button>
  <div id="result"></div>

  <script>
    function fetchData(callback) {
      fetch('https://jsonplaceholder.typicode.com/todos/1')  // Using a different endpoint
        .then(response => response.json())
        .then(data => callback(null, data))
        .catch(error => callback(error, null));
    }

    document.getElementById('fetchDataButton').addEventListener('click', () => {
      fetchData((error, data) => {
        if (error) {
          console.error('Error:', error);
        } else {
          // Display in the user interface
          document.getElementById('result').innerText = JSON.stringify(data, null, 2);

          // Display in the console
          console.log('Fetched Data:', data);
        }
      });
    });
  </script>
</body>
</html>
