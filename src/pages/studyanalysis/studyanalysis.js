import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import jsonData from '../../Data/questions.json';
// import SelectAns from '../../components/Question/index'

import verify from '../../services/verifyJudgment';

import './style.css';

function StudyAnalysis() {


  const { studyId, reviewId } = useParams();

  const [activeClass, setActiveClass] = useState('domain1');
  const currentDomainData = jsonData[activeClass];

  const [responses, setResponses] = useState({});


  const handleChangeActiveClass = (domain) => {
    setActiveClass(domain)
    setBias("")
  }


  const handleResponseChange = (domain, questionId, response) => {

    setResponses((prevResponses) => ({
      ...prevResponses,
      [domain]: {
        ...prevResponses[domain],
        [questionId]: response,
      },

    }));

    // console.log(responses);
  };

  const deleteResponse = (domain, questionId) => {
    setResponses((prevResponses) => {
      const updatedResponses = { ...prevResponses };

      // Verifica se o domínio e a questionId existem nas respostas
      if (updatedResponses[domain] && updatedResponses[domain][questionId]) {
        // Deleta a resposta da questionId
        delete updatedResponses[domain][questionId];

        // Se não houver mais respostas para o domínio, também pode deletar o domínio
        if (Object.keys(updatedResponses[domain]).length === 0) {
          delete updatedResponses[domain];
        }
      }

      return updatedResponses;
    });
  };


  function objectToString(obj) {
    return `${Object.entries(obj).map(([key, value]) => `${key}-${value}`).join(' , ')}`;
  }


  // Função que avalia uma condição em formato de string
  function evaluateCondition(condition, responses, domain, questionId, conditionDelete) {
    try {
      const domainResp = responses[domain] === undefined ? {} : responses[domain];
      const jsonString = objectToString(domainResp);

      if (condition === "noConditions") {
        return true;
      } else if (Object.keys(domainResp).length === 0) {

      } else if (questionId in domainResp) {
        if (conditionDelete.some((value) => jsonString.includes(value))) {
          deleteResponse(domain, questionId)
          return false;
        } else {
          return true;
        }
      } else {
        const result = condition.includes(jsonString)

        return result;
      }
    } catch (error) {
      console.error(`Erro na avaliação da condição: ${error}`);
      return false;
    }
  }






  const [storedReviews, setstoredReviews] = useState({});


  useEffect(() => {
    const reviewsStorage = JSON.parse(localStorage.getItem('reviews'))
    setstoredReviews(reviewsStorage);

    const selectedReviewR = reviewsStorage.find((review) => review.id === reviewId);
    const selectedStudiesR = selectedReviewR.estudos.find((estudo) => estudo.id === parseInt(studyId));
    setResponses(selectedStudiesR.respostas);

  }, [reviewId, studyId]);


  const [bias, setBias] = useState("");


  const handleAddResponse = (reviewId, studyId, newResponse) => {
    // Crie uma cópia de storedReviews
    let updatedReviews = [...storedReviews];

    // Encontra a revisão com o reviewId fornecido
    const selectedReview = updatedReviews.find(
      (review) => review.id === reviewId
    );

    if (selectedReview) {
      // Encontra o estudo com o studyId fornecido dentro da revisão selecionada
      const selectedStudy = selectedReview.estudos.find(
        (estudo) => estudo.id === parseInt(studyId)
      );

      if (selectedStudy) {
        // Cria uma cópia do estudo selecionado
        const selectedStudyCopy = { ...selectedStudy };

        // Atualiza as respostas no estudo selecionado
        selectedStudyCopy.respostas = newResponse;

        // Atualiza o estudo selecionado no array de revisões
        updatedReviews = updatedReviews.map((review) =>
          review.id === reviewId
            ? {
              ...review,
              estudos: review.estudos.map((estudo) =>
                estudo.id === parseInt(studyId) ? selectedStudyCopy : estudo
              ),
            }
            : review
        );

        // Atualiza o Local Storage com os dados atualizados
        localStorage.setItem('reviews', JSON.stringify(updatedReviews));
        // console.log(updatedReviews)

      }
    }

    setBias(verify(activeClass, reviewId, studyId))

    // alert('Your answers have been saved successfully. You can now navigate away from this page')
  };

  const getSavedOrCurrentResponse = (activeClass, questionId, studyId, reviewId) => {
    // Verifique se há uma resposta na variável responses
    if (responses[activeClass] && responses[activeClass][questionId]) {
      return responses[activeClass][questionId];
    }

    const savedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
    const selectedReview = savedReviews.find((review) => review.id === reviewId);

    // Verifique se a revisão e o estudo existem
    if (selectedReview && selectedReview.estudos) {
      // Encontre o estudo correspondente ao ID do estudo
      const selectedStudy = selectedReview.estudos.find((estudo) => estudo.id === parseInt(studyId));

      // Verifique se o estudo e as respostas existem
      if (selectedStudy && selectedStudy.respostas && selectedStudy.respostas[activeClass]) {
        // Verifique se há uma resposta específica para a questão
        const questionResponse = selectedStudy.respostas[activeClass][questionId];

        if (questionResponse !== undefined && questionResponse !== null) {
          // Retorne as respostas específicas para a questão
          return questionResponse;
        }
      }
    }

    // Se não houver resposta salva, retorne null ou um valor padrão de sua escolha
    return null;
  };






  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={'Estudo'}
        description="Here you can see all studies in this review"
      />

      <main>

        <div className='formsData'>
        </div>


        <div className="Black">

        </div>
        <div className="Form-container">
          <div id='breadCrumb'>
            <div className="Breadcrumbs">
              <div className={`BreadcrumbsCircle ${activeClass === "domain1" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain1")}><p>1</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain2" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain2")}><p>2</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain3" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain3")}><p>3</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain4" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain4")}><p>4</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain5" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain5")}><p>5</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain6" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain6")}><p>6</p></div>
              <div className={`BreadcrumbsCircle ${activeClass === "domain7" ? 'Active' : ''}`} onClick={() => handleChangeActiveClass("domain7")}><p>7</p></div>
            </div>
            <h1>{currentDomainData.domainTitle}| Judgment: {bias}</h1>
          </div>


          <div id="questions-container">
            {/* Exibir as questões do domínio atual */}
            {Object.values(currentDomainData.questions).map((question) => (
              <div>
                <div className="Form-question" key={question.id}>
                  <div>
                    <p>{question.title}</p>
                  </div>
                  <div className="Form-questionButtons">
                    <select disabled={evaluateCondition(question.previousAnswers, responses, activeClass, question.id, question.resetAwnser, studyId, reviewId) ? false : true}

                      // value={responses[activeClass]?.[question.id] || ''}
                      value={getSavedOrCurrentResponse(activeClass, question.id, studyId, reviewId) || ''}
                      id={question.id}
                      onChange={(e) =>
                        handleResponseChange(activeClass, question.id, e.target.value)}>


                      <option value="select">SELECT</option>
                      <option value="yes">YES</option>
                      <option value="py">PY</option>
                      <option value="pn">PN</option>
                      <option value="no">NO</option>
                    </select>

                  </div>
                </div>
                <hr></hr>
              </div>
            ))}

          </div>
        </div>


        <footer>

          <div>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Warning! <br />
              Save before leave
            </p>
          </div>

          <div>
            <button onClick={(e) => handleAddResponse(reviewId, studyId, responses, activeClass)}>CHECK</button>
            {/* <button onClick={(e) => verify(activeClass, reviewId, studyId)}>TESTE</button> */}
          </div>


        </footer>

      </main >
    </div >
  )
}

export default StudyAnalysis;
