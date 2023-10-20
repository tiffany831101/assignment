# Exchange Rate API
## Table of Contents

- [Exchange Rate API](#exchange-rate-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)


## Installation

To get started with this project, follow these steps:

1. **Clone the repository:**

```bash
   git clone git@github.com:tiffany831101/assignment.git`
```

2. **Change into the project directory:**
```bash
   cd assignment
```

3. **Build the Docker image:**
```bash
docker build -t exchange_rate .
```

4. **Run the docker container:**
```bash
docker run -d -p 8080:3000 --name exchange_rate_container exchange_rate
```

5. **Open your browser Tab:** 
- Enter the url: http://localhost:8080/exchangeRate?source=TWD&target=JPY&amount=$1234.12
- You can see the results as: 
  ```json
  {
  "msg": "Success",
  "amount": "$4,527.99"
  }
  ```

5. **Run the unit test:**
```bash
docker exec -it exchange_rate_container npm run test
```
 
