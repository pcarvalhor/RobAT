// import '../App.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';





const Example = ({ estudos }) => {

  const { id, nome } = useParams();

  const [Question11, setQuestion11] = useState('no');
  const [Question12, setQuestion12] = useState('no');
  const [Question13, setQuestion13] = useState('no');
  const [Question14, setQuestion14] = useState('no');
  const [Question15, setQuestion15] = useState('no');
  const [Question16, setQuestion16] = useState('no');
  const [Question17, setQuestion17] = useState('no');
  const [Question18, setQuestion18] = useState('no');
  const [bias1, set1Bias] = useState('WAITING DATA');
  const [bias2, set2Bias] = useState('WAITING DATA');
  const [bias3, set3Bias] = useState('WAITING DATA');
  const [bias4, set4Bias] = useState('WAITING DATA');
  const [bias5, set5Bias] = useState('WAITING DATA');
  const [bias6, set6Bias] = useState('WAITING DATA');
  const [bias7, set7Bias] = useState('WAITING DATA');
  const [activeClass, setActiveClass] = useState(1);




  const reset1 = () => {
    setQuestion11('no');
    setQuestion12('no');
    setQuestion13('no');
    setQuestion14('no');
    setQuestion15('no');
    setQuestion16('no');
    setQuestion17('no');
    setQuestion18('no');
  };

  const reset2 = () => {
    setQuestion14('no');
    setQuestion15('no');
    setQuestion16('no');

  };

  const reset3 = () => {
    setQuestion13('no');
    setQuestion17('no');
    setQuestion18('no');
  };

  const setQuestion11Event = (event) => {
    const selectedOption = event.target.value;
    if (selectedOption === "no" || selectedOption === 'pn') {
      reset1();
      setQuestion11(selectedOption);
    } else {
      setQuestion11(selectedOption);
    }
  };

  const setQuestion12Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion12(selectedOption);
    if (selectedOption === "yes" || selectedOption === 'py') {
      reset2();
      setQuestion12(selectedOption);
    } else {
      reset3();
      setQuestion12(selectedOption);
    }
  };

  const setQuestion13Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion13(selectedOption);
    if (selectedOption === "yes" || selectedOption === 'py') {
      reset2();
      setQuestion13(selectedOption);
    } else {
      reset3();
      setQuestion13(selectedOption);
    }
  };

  const setQuestion14Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion14(selectedOption);
    if (selectedOption === "no" || selectedOption === 'pn') {
      setQuestion14(selectedOption);
      setQuestion15('no');
    } else {
      setQuestion14(selectedOption);
    }
  };

  const setQuestion15Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion15(selectedOption);
  };

  const setQuestion16Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion16(selectedOption);
  };

  const setQuestion17Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion17(selectedOption);
  };

  const setQuestion18Event = (event) => {
    const selectedOption = event.target.value;
    setQuestion18(selectedOption);
  };

  const check1Bias = () => {
    if (Question11 === "no" || Question11 === 'pn') {
      set1Bias('low')
    } else if ((Question14 === "yes" || Question14 === 'py') && (Question15 === "yes" || Question15 === 'py') && (Question16 === "pn" || Question16 === 'no')) {
      set1Bias('moderate')
    } else if ((((Question14 === "no" || Question14 === 'pn') || (Question15 === "no" || Question15 === 'pn')) || (((Question17 === "no" || Question17 === 'pn') || (Question18 === "no" || Question18 === 'pn')))) && (Question16 === "no" || Question16 === 'pn')) {
      set1Bias('serious')
    } else if ((Question16 === "yes" || Question16 === 'py')) {
      set1Bias('critical')
    } else {
      set1Bias('error')
    }
  };

  const saveBias1ToLocalStorage = () => {
    // Salva o valor bias1 no localStorage com a chave sendo o ID do estudo (id)
    localStorage.setItem(`bias1_${id}`, bias1);
  };

  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      <main className="App-main">
        <div className="Black">

        </div>
        <div className="Form-container">
          <div className="Breadcrumbs">
            <div className={`BreadcrumbsCircle ${activeClass === 1 ? 'Active' : ''}`} onClick={() => setActiveClass(1)}><p>1</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 2 ? 'Active' : ''}`} onClick={() => setActiveClass(2)}><p>2</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 3 ? 'Active' : ''}`} onClick={() => setActiveClass(3)}><p>3</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 4 ? 'Active' : ''}`} onClick={() => setActiveClass(4)}><p>4</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 5 ? 'Active' : ''}`} onClick={() => setActiveClass(5)}><p>5</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 6 ? 'Active' : ''}`} onClick={() => setActiveClass(6)}><p>6</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 7 ? 'Active' : ''}`} onClick={() => setActiveClass(7)}><p>7</p></div>
            <div className={`BreadcrumbsCircle ${activeClass === 8 ? 'Active' : ''}`} onClick={() => setActiveClass(8)}><p>R</p></div>
          </div>
          {activeClass === 1 && (
            <div className='bias1'>
              <div className="Form-questions">
                <h1>Bias due to confounding {id} {nome}</h1>
                <div className="Form-question">
                  <div>
                    <p>1.1 Is there potential for confounding of
                      the effect of intervention in this study?</p>
                  </div>
                  <div className="Form-questionButtons">
                    <select name="1.1" id="1-1" onChange={setQuestion11Event} value={Question11}>
                      <option value="yes">YES</option>
                      <option value="py">PY</option>
                      <option value="pn">PN</option>
                      <option value="no">NO</option>
                    </select>
                  </div>
                </div>
                <hr />
                <div className="Form-question">
                  <div>
                    <p>1.2. Was the analysis based on splitting
                      participants’ follow up time according to
                      intervention received?</p>
                  </div>
                  {(Question11 === 'yes' || Question11 === 'py') && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion12Event} value={Question12}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />
                <div className="Form-question">
                  <div>
                    <p>1.3. Were intervention discontinuations
                      or switches likely to be related to factors
                      that are prognostic for the outcome?</p>
                  </div>
                  {((Question11 === 'yes' || Question11 === 'py') && (Question12 === 'yes' || Question12 === 'py')) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion13Event} value={Question13}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />

                <div className="Form-question">
                  <div>
                    <p>1.4 Did the authors use an appropriate
                      analysis method that controlled for all the
                      important confounding domains?</p>
                  </div>
                  {((Question11 === 'yes' || Question11 === 'py') && ((Question12 === 'no' || Question12 === 'pn') || (Question13 === 'no' || Question13 === 'pn'))) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion14Event} value={Question14}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />

                <div className="Form-question">
                  <div>
                    <p>1.5 Were confounding
                      domains that were controlled for
                      measured validly and reliably by the
                      variables available in this study?</p>
                  </div>
                  {((Question11 === 'yes' || Question11 === 'py') && (Question14 === 'yes' || Question14 === 'py')) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion15Event} value={Question15}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />


                <div className="Form-question">
                  <div>
                    <p>1.6. Did the authors control for any post- intervention variables that could have
                      been affected by the intervention?</p>
                  </div>
                  {((Question11 === 'yes' || Question11 === 'py') && ((Question12 === 'no' || Question12 === 'pn') || (Question13 === 'no' || Question13 === 'pn'))) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion16Event} value={Question16}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />


                <div className="Form-question">
                  <div>
                    <p>1.7 Did the authors use an appropriate
                      analysis method that controlled for all the
                      important confounding domains and for
                      time-varying confounding?</p>
                  </div>
                  {((Question11 === 'yes' || Question11 === 'py') && (Question13 === 'yes' || Question13 === 'py')) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion17Event} value={Question17}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>

                <hr />


                <div className="Form-question">
                  <div>
                    <p>1.8 Were confounding
                      domains that were controlled for
                      measured validly and reliably by the
                      variables available in this study?</p>
                  </div>
                  {(((Question11 === 'yes' || Question11 === 'py') && (Question17 === 'yes' || Question17 === 'py')) && (Question13 === 'yes' || Question13 === 'py')) && (
                    <div className="Form-questionButtons">
                      <select name="1.1" id="1-1" onChange={setQuestion18Event} value={Question18}>
                        <option value="yes">YES</option>
                        <option value="py">PY</option>
                        <option value="pn">PN</option>
                        <option value="no">NO</option>
                        <option value="ni">NI</option>
                      </select>
                    </div>
                  )}
                </div>
                <hr />
                <div className='containerResult'>
                  <div className={`biasResult ${bias1 === 'low' ? 'low' : bias1 === 'moderate' ? 'moderate' : bias1 === 'serious' ? 'serious' : bias1 === 'critical' ? 'critical' : ''}`}>

                    <p>{bias1}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeClass !== 8 && (
            <div className="FormContainerFooter">
              <div className="footerDiv"><p>Importante!<br></br> Preencha todos os dados!</p></div>
              <div className="footerDiv">
                {activeClass !== 1 && (
                  <button onClick={() => setActiveClass(activeClass - 1)}>PREVIOUS PAGE</button>
                )}
                <button id='checkBias' onClick={check1Bias}>CHECK BIAS</button>
                <button onClick={() => setActiveClass(activeClass + 1)}>NEXT PAGE</button>
              </div>

            </div>
          )}

          {activeClass === 8 && (




            <div>
              <div className='bias1'>
                <div className="Form-questions">
                  <h1>OVERALL RESULT</h1>
                  <button onClick={saveBias1ToLocalStorage}>Salvar</button>
                  <div className='overallResult'>
                    <div className='domainResult domainTitle'>
                      <div>D1</div>
                      <div>D2</div>
                      <div>D3</div>
                      <div>D4</div>
                      <div>D5</div>
                      <div>D6</div>
                      <div>D7</div>
                      <div>D8</div>
                    </div>
                    <div className='domainResult'>
                      <div>{bias1}</div>
                      <div>{bias2}</div>
                      <div>{bias3}</div>
                      <div>{bias4}</div>
                      <div>{bias5}</div>
                      <div>{bias6}</div>
                      <div>{bias7}</div>
                      <div>D8</div>
                    </div>
                  </div>
                </div>
                {activeClass !== 1 && (
                  <button onClick={() => setActiveClass(activeClass - 1)}>PREVIOUS PAGE</button>
                )}
              </div>

              {/* <div className="FormContainerFooter">
                <div className="footerDiv"><p>Importante!<br></br> Preencha todos os dados!</p></div>
                <div className="footerDiv">
                  {activeClass !== 1 && (
                    <button onClick={() => setActiveClass(activeClass - 1)}>PREVIOUS PAGE</button>
                  )}
                </div>

              </div> */}
            </div>

          )}



        </div>
      </main>
    </div>
  );
}

export default Example