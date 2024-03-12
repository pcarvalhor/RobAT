import serious from '../assets/images/icons/negative.png';
import moderate from '../assets/images/icons/neutral.png';
import low from '../assets/images/icons/positive.png';
import critical from '../assets/images/icons/critical.png';
import neutral from '../assets/images/icons/noinformation.png';

function verify(domain, reviewId, studyId) {
  const reviewsStorage = JSON.parse(localStorage.getItem('reviews'))
  const selectedReviewR = reviewsStorage.find((review) => review.id === reviewId);
  const selectedStudiesR = selectedReviewR.estudos.find((estudo) => estudo.id === parseInt(studyId));
  const respostas = selectedStudiesR.respostas

  localStorage.setItem('judgments', []); // cria um local storage com a key judgment




  if (domain === "domain1") {
    if (respostas.domain1[11] === "no" || respostas.domain1[11] === "pn") {
      const bias1 = 'low';

      return low

    } else if ((respostas.domain1[14] === "yes" || respostas.domain1[14] === "py") && (respostas.domain1[15] === "yes" || respostas.domain1[15] === "py")) {

      return moderate
    } else if ((respostas.domain1[14] === "no" || respostas.domain1[14] === "pn") || (respostas.domain1[15] === "no" || respostas.domain1[15] === "pn") || (respostas.domain1[17] === "no" || respostas.domain1[17] === "pn") || (respostas.domain1[18] === "no" || respostas.domain1[18] === "pn")) {

      return serious;
    } else if (respostas.domain1[16] === "yes" || respostas.domain1[16] === "py") {

      return critical;
    } else {

      return neutral;
    }

  }

  if (domain === "domain2") {
    if ((respostas.domain2[21] === "no" || respostas.domain2[21] === "pn") && (respostas.domain2[24] === "yes" || respostas.domain2[24] === "py")) {

      return low;
    } else if (
      ((respostas.domain2[21] === "yes" || respostas.domain2[21] === "py") && (respostas.domain2[25] === "yes" || respostas.domain2[2] === "py"))
      ||
      ((respostas.domain2[24] === "no" || respostas.domain2[24] === "pn") && (respostas.domain2[23] === "no" || respostas.domain2[23] === "pn"))
      ||
      ((respostas.domain2[24] === "no" || respostas.domain2[24] === "pn") && (respostas.domain2[25] === "yes" || respostas.domain2[25] === "py"))
    ) {

      return moderate;
    } else if (
      ((respostas.domain2[22] === "yes" || respostas.domain2[22] === "py") && (respostas.domain2[23] === "no" || respostas.domain2[23] === "pn") && (respostas.domain2[25] === "yes" || respostas.domain2[25] === "py"))
      ||
      ((respostas.domain2[24] === "no" || respostas.domain2[24] === "pn") && (respostas.domain2[25] === "no" || respostas.domain2[25] === "pn"))
    ) {

      return serious;
    } else if (
      ((respostas.domain2[22] === "yes" || respostas.domain2[22] === "py") && (respostas.domain2[23] === "yes" || respostas.domain2[23] === "py") && (respostas.domain2[25] === "no" || respostas.domain2[25] === "pn"))
      ||
      ((respostas.domain2[24] === "no" || respostas.domain2[24] === "pn") && (respostas.domain2[25] === "no" || respostas.domain2[25] === "pn"))
    ) {

      return critical;
    } else {

      return neutral;
    }
  }

  if (domain === "domain3") {
    if ((respostas.domain3[31] === "yes" || respostas.domain3[31] === "py") && (respostas.domain3[32] === "yes" || respostas.domain3[32] === "py")) {

      return low;
    } else if (
      ((respostas.domain3[31] === "yes" || respostas.domain3[31] === "py") && (respostas.domain3[32] === "no" || respostas.domain3[32] === "pn") && (respostas.domain3[34] === "no" || respostas.domain3[34] === "pn"))
    ) {

      return moderate;
    } else if (
      ((respostas.domain3[31] === "no" || respostas.domain3[31] === "pn") && (respostas.domain3[33] === "yes" || respostas.domain3[33] === "py") && (respostas.domain3[34] === "yes" || respostas.domain3[34] === "py"))
    ) {

      return serious;
    } else if ((respostas.domain3[35] === "yes" || respostas.domain3[35] === "py")) {

      return critical;
    } else {

      return neutral;
    }
  }


  if (domain === "domain4") {
    if (
      ((respostas.domain4[41] === "no" || respostas.domain4[41] === "pn") || (respostas.domain4[42] === "no" || respostas.domain4[42] === "pn"))
      ||
      ((respostas.domain4[43] === "yes" || respostas.domain4[43] === "py") && (respostas.domain4[44] === "yes" || respostas.domain4[44] === "yes") && (respostas.domain4[45] === "yes" || respostas.domain4[45] === "py"))
    ) {

      return low;
    } else if (

      ((respostas.domain4[41] === "yes" || respostas.domain4[41] === "py") && (respostas.domain4[42] === "no" || respostas.domain4[42] === "pn"))
      ||
      ((respostas.domain4[44] === "yes" || respostas.domain4[44] === "py") && (respostas.domain4[45] === "no" || respostas.domain4[45] === "pn"))
      ||
      ((respostas.domain4[43] === "no" || respostas.domain4[43] === "pn") && (respostas.domain4[46] === "yes" || respostas.domain4[46] === "py"))
      ||
      ((respostas.domain4[44] === "no" || respostas.domain4[44] === "pn") && (respostas.domain4[46] === "yes" || respostas.domain4[46] === "py"))
      ||
      ((respostas.domain4[45] === "no" || respostas.domain4[45] === "pn") && (respostas.domain4[46] === "yes" || respostas.domain4[46] === "py"))
    ) {

      return moderate;
    } else if (
      ((respostas.domain4[41] === "yes" || respostas.domain4[41] === "py") && (respostas.domain4[42] === "yes" || respostas.domain4[42] === "yes"))
      ||
      ((respostas.domain4[43] === "no" || respostas.domain4[43] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "no" || respostas.domain4[47] === "pn"))
      ||
      ((respostas.domain4[44] === "no" || respostas.domain4[44] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "no" || respostas.domain4[47] === "pn"))
      ||
      ((respostas.domain4[45] === "no" || respostas.domain4[45] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "no" || respostas.domain4[47] === "pn"))
    ) {

      return serious;
    } else if (
      ((respostas.domain4[41] === "yes" || respostas.domain4[41] === "py") && (respostas.domain4[42] === "yes" || respostas.domain4[42] === "yes") && (respostas.domain4[47] === "no" || respostas.domain4[47] === "pn"))
      ||
      ((respostas.domain4[43] === "no" || respostas.domain4[43] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "yes" || respostas.domain4[47] === "py"))
      ||
      ((respostas.domain4[44] === "no" || respostas.domain4[44] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "yes" || respostas.domain4[47] === "py"))
      ||
      ((respostas.domain4[45] === "no" || respostas.domain4[45] === "pn") && (respostas.domain4[46] === "no" || respostas.domain4[46] === "pn") && (respostas.domain4[47] === "yes" || respostas.domain4[47] === "py"))
    ) {

      return critical;
    } else {

      return neutral;
    }
  }

  if (domain === "domain5") {
    if ((respostas.domain5[51] === "yes" || respostas.domain5[51] === "py") || (respostas.domain5[54] === "yes" || respostas.domain5[54] === "py") || (respostas.domain5[55] === "yes" || respostas.domain5[55] === "py")) {

      return low;
    } else if (
      (respostas.domain5[54] === "no" || respostas.domain5[54] === "pn") && (respostas.domain5[55] === "yes" || respostas.domain5[55] === "py") && (respostas.domain5[56] === "no" || respostas.domain5[56] === "pn")
    ) {

      return moderate;
    } else if (
      (respostas.domain5[54] === "no" || respostas.domain5[54] === "pn") && (respostas.domain5[55] === "yes" || respostas.domain5[55] === "py") && (respostas.domain5[56] === "yes" || respostas.domain5[56] === "py")
    ) {

      return serious;
    } else if (
      (respostas.domain5[55] === "no" || respostas.domain5[55] === "pn") && (respostas.domain5[57] === "yes" || respostas.domain5[56] === "py")
    ) {

      return critical;
    } else {

      return neutral;
    }
  }

  if (domain === "domain6") {

    if ((respostas.domain6[61] === "no" || respostas.domain6[61] === "pn") && (respostas.domain6[63] === "yes" || respostas.domain6[63] === "py") && (respostas.domain6[64] === "no" || respostas.domain6[64] === "pn")
    ) {

      return low;
    } else if (
      (respostas.domain6[61] === "yes" || respostas.domain6[61] === "py") &&
      (respostas.domain6[63] === "yes" || respostas.domain6[63] === "py") &&
      (respostas.domain6[64] === "yes" || respostas.domain6[64] === "py") &&
      (respostas.domain6[65] === "no" || respostas.domain6[65] === "pn")
    ) {

      return moderate;
    } else if (
      ((respostas.domain6[61] === "yes" || respostas.domain6[61] === "py") && (respostas.domain6[62] === "yes" || respostas.domain6[62] === "py"))
      ||
      ((respostas.domain6[63] === "no" || respostas.domain6[63] === "pn") &&
        (respostas.domain6[66] === "yes" || respostas.domain6[66] === "py"))
      ||
      ((respostas.domain6[64] === "yes" || respostas.domain6[64] === "py") &&
        (respostas.domain6[65] === "yes" || respostas.domain6[65] === "py"))
    ) {

      return serious;
    } else if (
      (respostas.domain6[63] === "no" || respostas.domain6[63] === "pn") &&
      (respostas.domain6[66] === "yes" || respostas.domain6[66] === "py")
    ) {

      return critical;
    } else {

      return neutral;
    }
  }

  if (domain === "domain7") {
    if (
      (respostas.domain7[71] === "no" || respostas.domain7[71] === "pn") &&
      (respostas.domain7[72] === "no" || respostas.domain7[72] === "pn") &&
      (respostas.domain7[73] === "no" || respostas.domain7[73] === "pn")
    ) {

      return low;
    } else if (
      (respostas.domain7[71] === "no" || respostas.domain7[71] === "pn") ||
      (respostas.domain7[72] === "no" || respostas.domain7[72] === "pn") ||
      ((respostas.domain7[73] === "yes" || respostas.domain7[73] === "py") &&
        (respostas.domain7[74] === "no" || respostas.domain7[74] === "pn"))
    ) {

      return moderate;
    } else if (
      (respostas.domain7[71] === "yes" || respostas.domain7[71] === "py") ||
      (respostas.domain7[72] === "yes" || respostas.domain7[72] === "py") ||
      (respostas.domain7[73] === "yes" || respostas.domain7[73] === "py") ||
      ((respostas.domain7[73] === "yes" || respostas.domain7[73] === "py") &&
        (respostas.domain7[74] === "yes" || respostas.domain7[74] === "yes"))
    ) {

      return serious;
    } else if (
      ((respostas.domain7[71] === "yes" || respostas.domain7[71] === "py")
        && (respostas.domain7[72] === "yes" || respostas.domain7[72] === "py")
        && (respostas.domain7[73] === "yes" || respostas.domain7[73] === "py"))
      && (respostas.domain7[75] === "yes" || respostas.domain7[75] === "py")
    ) {

      return critical;
    } else {

      return neutral;
    }
  }
}
export default verify;


