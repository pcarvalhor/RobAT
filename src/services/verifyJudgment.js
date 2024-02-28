import negative from '../assets/images/icons/negative.png';
import neutral from '../assets/images/icons/neutral.png';
import low from '../assets/images/icons/positive.png';

function verify(domain, reviewId, studyId) {
  const reviewsStorage = JSON.parse(localStorage.getItem('reviews'))
  const selectedReviewR = reviewsStorage.find((review) => review.id === reviewId);
  const selectedStudiesR = selectedReviewR.estudos.find((estudo) => estudo.id === parseInt(studyId));
  const respostas = selectedStudiesR.respostas

  localStorage.setItem('judgments', []); // cria um local storage com a key judgment

  const biasDomain1 = ""
  const biasDomain2 = ""
  const biasDomain3 = ""
  const biasDomain4 = ""
  const biasDomain5 = ""
  const biasDomain6 = ""
  const biasDomain7 = ""


  if (domain === "domain1") {
    if (respostas.domain1[11] === "no" || respostas.domain1[11] === "pn") {
      return low;

    }
  }
  if (domain === "domain2") {
    return neutral
  }
  if (domain === "domain3") {
    return neutral
  }
  if (domain === "domain4") {
    return neutral
  }
  if (domain === "domain5") {
    return neutral
  }
  if (domain === "domain6") {
    return neutral
  }
  if (domain === "domain7") {
    return neutral
  }
  if (domain === "overall") {
    return negative
  }

}

export default verify;


