## Serverless Challenge

### Installation

```
$ git clone https://github.com/DedeOli21/EmployerChallenge.git
$ cd EmployerChallenge
$ npm install
```

### Running 
```
$ npm run start
```

### Deploying the app to AWS
```
$ npm run deploy
```

- create a emplopyee in the database
```sh
curl --request POST \
  --url https://ts3z409rn0.execute-api.us-east-1.amazonaws.com/dev/create-employer \
  --header 'Content-Type: application/json' \
  --body '{
	"name": "David",
	"age": 22,
	"occupation": "Developer"
}'
```

- get the All employers from the database
```sh
curl --request GET \
  --url https://ts3z409rn0.execute-api.us-east-1.amazonaws.com/dev/get-employer
```

- get the employer from the database
```sh
curl --request GET \
  --url https://ts3z409rn0.execute-api.us-east-1.amazonaws.com/dev/get-employer/{employerId}
```

- update the employee in the database

```sh
curl --request PUT \
  --url https://ts3z409rn0.execute-api.us-east-1.amazonaws.com/dev/update-employer/{employerId} \
  --header 'Content-Type: application/json' \
  --body '{
	"nome": "Fulano da Silva",
  "age": 35,
  "occupation" : "Front-End Developer"
}'
```

- delete the employee from the database

```sh
curl --request DELETE \
  --url https://ts3z409rn0.execute-api.us-east-1.amazonaws.com/dev/delete-employer/{employerId}
```