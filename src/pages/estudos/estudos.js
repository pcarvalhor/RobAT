import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


import PageHeader from '../../components/PageHeader';
import warningIcon from '../../assets/images/icons/warning.svg';
import Input from '../../components/Input';

import './style.css';

function ReviewDetail() {
  const { reviewId } = useParams();
  const [review, setReview] = useState(null);
  const [newStudyName, setNewStudyName] = useState('');

  useEffect(() => {
    const getReviewFromLocalStorage = (id) => {
      const reviewsJSON = localStorage.getItem('reviews');
      const reviews = reviewsJSON ? JSON.parse(reviewsJSON) : [];
      return reviews.find((review) => review.id === id);
    };

    const reviewData = getReviewFromLocalStorage(reviewId);
    setReview(reviewData);
  }, [reviewId]);

  if (!review) {
    return <div>Review not found.</div>;
  }

  const handleDeleteStudy = (studyIndex) => {
    const updatedReview = { ...review };
    updatedReview.estudos.splice(studyIndex, 1);

    // Atualize o Local Storage após a exclusão do estudo
    const updatedReviews = JSON.parse(localStorage.getItem('reviews'));
    updatedReviews.forEach((r, index) => {
      if (r.id === reviewId) {
        updatedReviews[index] = updatedReview;
      }
    });
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    setReview(updatedReview);
  };

  const handleAddStudy = () => {
    if (newStudyName.trim() === '') {
      return; // Evita adicionar estudos em branco
    }

    const updatedReview = { ...review };
    const newStudy = {
      id: Date.now(),
      name: newStudyName,
      respostas: []
      // Adicione mais campos conforme necessário
    };

    updatedReview.estudos.push(newStudy);
    setNewStudyName(''); // Limpa o campo de entrada após adicionar

    // Atualize o Local Storage após adicionar o estudo
    const updatedReviews = JSON.parse(localStorage.getItem('reviews'));
    updatedReviews.forEach((r, index) => {
      if (r.id === reviewId) {
        updatedReviews[index] = updatedReview;
      }
    });
    localStorage.setItem('reviews', JSON.stringify(updatedReviews));

    setReview(updatedReview);
  };



  return (
    <div id="page-teacher-form" className="container">
      <PageHeader
        title={review.reviewTitle}
        description="Here you can see all studies in this review"
      />

      <main>
        <form>
          <div className='formsData'>
            <div id='addStudyDiv'>
              <Input

                label={'Study name'}
                onChange={(e) => { setNewStudyName(e.target.value) }}
              />

              <div>

              </div>

              <button id='saveButton' onClick={handleAddStudy}>
                Add Study
              </button>
            </div>
          </div>

          <hr></hr>

          <div id='reviewContainer'>
            {review.estudos.map((study, studyIndex) => (
              <div className='reviewDetails'>
                <h2>{study.name}</h2>
                <div id='buttonContainer'>
                  <Link to={`/analysis/${reviewId}/${study.id}`}>
                    <button >
                      OPEN STUDY
                    </button>
                  </Link>

                  <button onClick={() => handleDeleteStudy(studyIndex)}>
                    DELETE STUDY
                  </button>
                </div>
              </div>
            ))}

            <Link to={`/table/${reviewId}`}>
              <button >
                OPEN GRAPH
              </button>
            </Link>
          </div>

          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Warning! <br />
              A deleted study can't be recovered
            </p>
          </footer>
        </form>
      </main>
    </div>
  )
}

export default ReviewDetail;
