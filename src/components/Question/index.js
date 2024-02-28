import React, { useEffect, useState } from 'react';

function SelectAns({ responses, domain, question, condition, handleResponseChange }) {


  function objectToString(obj) {
    return `${Object.entries(obj).map(([key, value]) => `${key}-${value}`).join(', ')}`;
  }

  function createRegex(condition) {
    return new RegExp(condition);
  }

  function evaluateCondition(condition, responses, domain) {
    try {
      // console.log(condition);

      // console.log(domain);
      const domainResp = responses[domain] === undefined ? "" : responses[domain];
      // console.log(domainResp);
      const jsonString = objectToString(domainResp);
      // console.log(jsonString);
      const regex = createRegex(condition);
      const resultado = regex.test(jsonString);
      return resultado
    } catch (error) {
      console.error(`Erro na avaliação da condição: ${error}`);
      return false;
    }
  }

  const [mudou, setMudou] = useState(false);

  useEffect(() => {
    const shouldRender = evaluateCondition(condition, responses, domain);
    if (shouldRender) {
      setMudou(true)
    }


  }, [responses, domain]);

  return (
    <div>
      {mudou && (
        <div className="Form-questionButtons">
          <select
            name={question.id}
            id={question.id}
            value={responses[domain]?.[question.id] || ''}
            onChange={(e) => handleResponseChange(domain, question.id, e.target.value)}
          >
            <option value="">SELECT</option>
            <option value="yes">YES</option>
            <option value="py">PY</option>
            <option value="pn">PN</option>
            <option value="no">NO</option>
          </select>
        </div>
      )}
    </div>
  );
}

export default SelectAns;