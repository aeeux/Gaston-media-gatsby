import React from 'react';

const kontakt = () => {
    return (
        <div className="abcdefgh">
                     <li className="heading-ab">Contact us </li>
<div className="grid1">
  <div className="main1">
  <div className="container4">

<form>

  <p className="name1">
    <input name="name" type="text" className="feedback-input1" placeholder="Name" id="name1" />
  </p>

  <p className="email1">
    <input name="email" type="text" className="feedback-input1" id="email1" placeholder="Email" />
  </p>

  <p className="text1">
    <textarea name="text" className="feedback-input1" id="comment1" placeholder="Message"></textarea>
  </p>


  <div className="submit1">
    <input type="submit" value="Send" id="button-kontakt" />
  </div>
</form>
  </div>
  </div>
  <section className="side1">
    <div>
    <iframe className="google-maps" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2260.5308115017633!2d12.15489081585485!3d55.488275019830006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652f16a5d0a5239%3A0x69819e25f931e415!2sZealand%20-%20University%20of%20Applied%20Sciences!5e0!3m2!1sen!2sdk!4v1636109334678!5m2!1sen!2sdk" allowfullscreen="" loading="lazy"></iframe>
    </div>
  </section>
</div>
        </div>
    )
}

export default kontakt