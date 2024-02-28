## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


## Review Data Structure


```javascript

const newReview = {
      id: generateRandomId(),
      reviewTitle,
      estudos: [],
    };

```

## Study Data Structure

```javascript

estudos = [
  {
    name: '',
    domainsBias: {
      domain1: '',
      domain2: '',
      domain3: '',
      domain4: '',
      domain5: '',
      domain6: '',
      domain7: '',
    }
    overallBias: ''
  }

],

```


## Questions Data Structure


```json 

{
  "domain1": {
    "labels": [
      // O label é diferente para cada domain
      {
        "low": {},
        "moderate": {},
        "serious": {},
        "critical": {}

        // Colocar em cada label a questão e a reposta para o julgamento do Risk of Bias
      }
    ],
    "questions": {
      "quetsion": {
        "id": "Qestion ID XY (X = domain number | Y = Question Number) ",
        "title": "Enunciado da questão",
        "previousAnswers": [] // perguntas anteriores e suas respectivas respostas para aparecer a questão
      }
    }
  }
}
```

## Judgment Data Structure


```json 
{
  "id":"ID DO ESTUDO", // O ID É ÚNICO PARA CADA ESTUDO 
  "judgments": { //O JUDGEMNT É PARA CADA DOMAIN
    "domain1":"JUDGMENT", 
    "domain2":"JUDGMENT",
    "domain3":"JUDGMENT",
    "domain4":"JUDGMENT",
    "domain5":"JUDGMENT",
    "domain6":"JUDGMENT",
    "domain7":"JUDGMENT",
    "overall":"JUDGMENT"
  }
},
{
  "id":"ID DO ESTUDO",
  "judgments": {
    "domain1":"JUDGMENT",
    "domain2":"JUDGMENT",
    "domain3":"JUDGMENT",
    "domain4":"JUDGMENT",
    "domain5":"JUDGMENT",
    "domain6":"JUDGMENT",
    "domain7":"JUDGMENT",
    "overall":"JUDGMENT"
  }
}

//JUDGMENT EXAMPLES
//LOW
//MODERATE
//CRITICAL
//SERIOUS
//NO INFORMATION

```
