import React, { useState } from 'react';

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';

import './style.css';



function Bias() {

  const [reviewTitle, setReviewTitle] = useState('');

  function generateRandomId() {
    // Gere um número aleatório entre 0 e 1 (exclusivo)
    const randomNumber = Math.random();
    // Converta o número em uma string e remova o ponto decimal
    const randomId = randomNumber.toString(36).substring(2);
    return randomId;
  }

  const getReviewsFromLocalStorage = () => {
    const reviewsJSON = localStorage.getItem('reviews');
    return reviewsJSON ? JSON.parse(reviewsJSON) : [];
  };

  // Função para salvar todas as revisões no Local Storage
  const saveReviewsToLocalStorage = (reviews) => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  };

  // Função para adicionar uma nova revisão
  const addReview = (reviewTitle) => {
    const reviews = getReviewsFromLocalStorage();
    const newReview = {
      id: generateRandomId(),
      reviewTitle,
      estudos: [],
    };
    reviews.push(newReview);
    saveReviewsToLocalStorage(reviews);
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Add new review."
        description="Fill the gaps bellow and add a new review"
      />

      <main>
        <form>

          <fieldset>
            <legend>Review Title</legend>

          </fieldset>
          <div className='formsData'>
            <Input


              onChange={(e) => { setReviewTitle(e.target.value) }}
            />
          </div>


          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Warning! <br />
              Fill all the gaps
            </p>
            <button onClick={() => addReview(reviewTitle)}>
              SAVE REVIEW
            </button>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default Bias;