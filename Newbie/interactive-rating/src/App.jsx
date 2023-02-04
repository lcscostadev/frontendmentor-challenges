import React, { useState } from 'react'
import './App.css'
import { star, thank_img } from './assets/index';

function App() {

  const [selectedRating, setSelectedRating] = useState();
  const [submit, setSubmit] = useState(false);

  const handleRating = (rating) => {
    setSelectedRating(rating);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  }

  return submit ? <div className='thank-page'>
    <img src={thank_img} alt="" />
    <span>You selected {selectedRating} out of 5</span>
    <div>
      <h1>Thank you!</h1>
      <p> We appreciate you taking the time to give a rating. If you ever need more support,
        don't hesitate to get in touch!</p>
    </div>
  </div> : (
    <>
      <main className='container'>
        <form onSubmit={handleFormSubmit} className='panel'>
          <img src={star} alt="" className='star' />
          <h1 className='title'>How did we do?</h1>
          <p className='paragraph'>Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!</p>
          {/* {selectedRating} */}
          <div className='btn-group'>
            {[1, 2, 3, 4, 5].map((rating) => (
              <button type='button' className='btn' onClick={() => handleRating(rating)}>
                {rating}
              </button>
            ))}
          </div>
          <button disabled={selectedRating === undefined} className='submit-btn'>Submit</button>
        </form>
      </main>
    </>
  )
}

export default App
