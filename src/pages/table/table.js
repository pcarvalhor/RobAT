import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import domtoimage from 'dom-to-image';

import './style.css';
import serious from '../../assets/images/icons/negative.png';
import moderate from '../../assets/images/icons/neutral.png';
import low from '../../assets/images/icons/positive.png';
import critical from '../../assets/images/icons/critical.png';
import neutral from '../../assets/images/icons/noinformation.png';

import verify from '../../services/verifyJudgment';
import verifyOverall from '../../services/verifyOverall';


const Table = () => {

    const { reviewId } = useParams();
    const [review, setReview] = useState(null);
    const tableContainerRef = useRef(null);

    useEffect(() => {
        const getReviewFromLocalStorage = (id) => {
            const reviewsJSON = localStorage.getItem('reviews');
            const reviews = reviewsJSON ? JSON.parse(reviewsJSON) : [];
            return reviews.find((review) => review.id === id);
        };

        const reviewData = getReviewFromLocalStorage(reviewId);
        setReview(reviewData);
    }, [reviewId]);

    // Screenshot Function
    const handleScreenshot = () => {
        if (!tableContainerRef.current) return;

        domtoimage.toSvg(tableContainerRef.current)
            .then((dataUrl) => {
                const link = document.createElement('a');
                link.href = dataUrl;
                link.download = 'table_screenshot.svg';
                link.click();
            })
            .catch((error) => {
                console.error('Error capturing screenshot:', error);
            });
    };

    if (!review) {
        return <div>Review not found.</div>;
    }


    return (

        <body>

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"></link>

            <button onClick={handleScreenshot} className="screenshot-button">Export Svg</button>
            <div class="page-container" ref={tableContainerRef}>
                <div class="title">Risk of Bias domains</div>
                <div class="table-container">
                    <div class="rotate-text">Study</div>
                    <table class="custom-table">
                        <thead>
                            <tr>
                                <th class="column"></th>
                                <th class="column">D1</th>
                                <th class="column">D2</th>
                                <th class="column">D3</th>
                                <th class="column">D4</th>
                                <th class="column">D5</th>
                                <th class="column">D6</th>
                                <th class="column">D7</th>
                                <th class="column">Overall</th>
                            </tr>
                        </thead>
                        <tbody>
                            {review.estudos.map((study, studyIndex) => (
                                <tr>
                                    <td>{study.name}</td>
                                    <td class="centered-image-cell"><img src={verify("domain1", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain2", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain3", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain4", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain5", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain6", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verify("domain7", reviewId, study.id)} alt="X" class="small-image" /></td>
                                    <td class="centered-image-cell"><img src={verifyOverall(reviewId, study.id)} alt="X" class="small-image" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div class="bottom-text">
                    Domains:<br></br>
                    D1: Bias due to confounding.<br></br>
                    D2: Bias due to selection of participants.<br></br>
                    D3: Bias due to selection of interventions.<br></br>
                    D4: Bias due to deviations from intended interventions.<br></br>
                    D5: Bias due to missing data.<br></br>
                    D6: Bias in measurementt of outcomes.<br></br>
                    D6: Bias in selection of the reported result.<br></br>
                </div>
                <div class="bottom-right-text">
                    Judgement:<br></br>
                    <img src={critical} alt="+" class="bottom-small-image" />Critical<br></br>
                    <img src={serious} alt="+" class="bottom-small-image" />Serious<br></br>
                    <img src={moderate} alt="+" class="bottom-small-image" />Moderate<br></br>
                    <img src={low} alt="+" class="bottom-small-image" />Low<br></br>
                    <img src={neutral} alt="+" class="bottom-small-image" />No information<br></br>

                </div>
            </div>
        </body>

    )
}

export default Table;

