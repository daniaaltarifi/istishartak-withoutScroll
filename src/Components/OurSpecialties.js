import React from 'react'

function OurSpecialties() {
  return (
    <div className="container main_container"id='SPECIALTIES'>
              <br />
    <br />
    <br />
    <div className="row cont d-flex align-items-center justify-content-center " >

        <div className="col-lg-6 col-md-12 col-sm-12   container_text ">
            <div className="stayingHealth ">
                <p className='font_title'><b>Our Specialties</b> </p>
                <p className="mt-3 paragraph_title">Access a network of the best and highly recommended doctors of more than 50 specialties, anywhere you are

                </p>
            </div>
            <button type="button" class="btn btn-lg btn_book_now mt-5">Book Now</button>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  mockup_phone style_img">
                    <img src={require('../Images/5.jpg')} className="change" />
                </div>



    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

</div>
  )
}

export default OurSpecialties
