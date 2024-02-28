import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link

import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';

import './style.css';



function AllReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Função para buscar revisões do Local Storage
    const getReviewsFromLocalStorage = () => {
      const reviewsJSON = localStorage.getItem('reviews');
      return reviewsJSON ? JSON.parse(reviewsJSON) : [];
    };

    // Buscar revisões do Local Storage e atualizar o estado
    const reviewsData = getReviewsFromLocalStorage();
    setReviews(reviewsData);
  }, []);

  const handleDeleteReview = (reviewIndex) => {
    const updatedReviews = [...reviews];
    updatedReviews.splice(reviewIndex, 1);
    setReviews(updatedReviews);
    // Atualize o Local Storage após a exclusão
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));
  };

  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="My reviews."
        description="Here you can see all your reviews"
      />

      <main>
        <form>
          <div className='formsData'>

          </div>
          {reviews.length === 0 ? (
            <div id='noAvailable'>
              <p>No reviews available</p>
              <p id='bottomText'>back to the previous page and create a new review</p>
            </div>
          ) : (
            <div id='reviewContainer'>
              {reviews.map((review, reviewIndex) => (
                <div className='reviewDetails'>
                  <h2>{review.reviewTitle}</h2>
                  <div id='buttonContainer'>
                    <Link to={`/review/${review.id}`}>
                      <button>
                        OPEN REVIEW
                      </button>
                    </Link>
                    <button onClick={() => handleDeleteReview(reviewIndex)} id='deleteButton'>
                      DELETE REVIEW
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Warning! <br />
              A deleted review can't be recovered
            </p>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default AllReviews;