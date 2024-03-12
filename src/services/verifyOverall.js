import serious from '../assets/images/icons/negative.png';
import moderate from '../assets/images/icons/neutral.png';
import low from '../assets/images/icons/positive.png';
import critical from '../assets/images/icons/critical.png';
import neutral from '../assets/images/icons/noinformation.png';

import verify from '../services/verifyJudgment';

function verifyOverall(reviewId, studyId) {
  const bias1 = verify("domain1", reviewId, studyId)
  const bias2 = verify("domain2", reviewId, studyId)
  const bias3 = verify("domain3", reviewId, studyId)
  const bias4 = verify("domain4", reviewId, studyId)
  const bias5 = verify("domain5", reviewId, studyId)
  const bias6 = verify("domain6", reviewId, studyId)
  const bias7 = verify("domain7", reviewId, studyId)

  if ((bias1 === low) && (bias2 === low) && (bias3 === low) && (bias4 === low) && (bias5 === low) && (bias6 === low) && (bias7 === low)) {
    return low;
  } else if (((bias1 === moderate) && (bias2 === moderate) && (bias3 === moderate) && (bias4 === moderate) && (bias5 === moderate) && (bias6 === moderate) && (bias7 === moderate)) || (bias1 === low) || (bias2 === low) || (bias3 === low) || (bias4 === low) || (bias5 === low) || (bias6 === low) || (bias7 === low)) {
    if ((bias1 === neutral) || (bias2 === neutral) || (bias3 === neutral) || (bias4 === neutral) || (bias5 === neutral) || (bias6 === neutral) || (bias7 === neutral)) {
      return neutral;
    } else {
      return moderate;
    }
  } else if ((bias1 === serious) || (bias2 === serious) || (bias3 === serious) || (bias4 === serious) || (bias5 === serious) || (bias6 === serious) || (bias7 === serious)) {
    return serious;
  } else if ((bias1 === critical) || (bias2 === critical) || (bias3 === critical) || (bias4 === critical) || (bias5 === critical) || (bias6 === critical) || (bias7 === critical)) {
    return critical;
  } else if ((bias1 === neutral) || (bias2 === neutral) || (bias3 === neutral) || (bias4 === neutral) || (bias5 === neutral) || (bias6 === neutral) || (bias7 === neutral)) {
    return neutral;
  }
  else {
    return neutral;
  }

}

export default verifyOverall;