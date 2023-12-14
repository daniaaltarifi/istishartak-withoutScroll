import React from 'react'
import { DeviceFrameset } from 'react-device-frameset'
import 'react-device-frameset/styles/marvel-devices.min.css'
import { useTranslation } from 'react-i18next';

function StayingHealth() {
  return (
    <div className="container main_container" id='HOME'>
 
    <div className="row cont d-flex align-items-center justify-content-center mt-5" >
 
        <div className="col-lg-6 col-md-12 col-sm-12 container_text">
            <div className="stayingHealth">
                <p  className='font_title'>Staying healthy is just a <b>tap</b> away</p>
                <p className="mt-3 paragraph_title">Our incredible team of doctors want you to have the quality of in-person care but from the comfort of home</p>
            </div>

        </div>
        <div className="col-lg-6 col-md-12 col-sm-12  mockup_phone style_img">
                    <img src={require('../Images/1.jpg')} className="change fade-bottom" />
                </div>
{/* <DeviceFrameset device="iPhone 8" color="gold" className="mockup_phone">
        </DeviceFrameset> */}

    </div>
    <br />
    <br />
    <br />
    {/* <br />
    <br />
    <br />
<br/>
<br/>
<br/>
<br/> */}

</div>
  )
}

export default StayingHealth
// import React from 'react';
// import { useSpring, animated } from 'react-spring';

// function StayingHealth() {
//   const [imageIndex, setImageIndex] = React.useState(0);

//   const imageStyles = useSpring({
//     opacity: 1,
//     transform: 'scale(1)',
//     from: { opacity: 0, transform: 'scale(0.9)' },
//   });

//   const images = [
//     require('../Images/1.jpg'), // Default image
//     require('../Images/2.jpg'), // Replace with the new image path
//     require('../Images/3.jpg'), // Default image
//     require('../Images/4.jpg'), // Default image
//     require('../Images/5.jpg'), // Default image

//   ];

//   const handleChangeImage = () => {
//     // Change the image index to the next image in the array
//     setImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   return (
//     <div className="container main_container" id="HOME">
//       <div className="row cont d-flex align-items-center justify-content-center mt-5">
//         <div className="col-lg-6 col-md-12 col-sm-12 container_text">
//           <div className="stayingHealth">
//             <p className="font_title">Staying healthy is just a <b>tap</b> away</p>
//             <p className="mt-3 paragraph_title">
//               Our incredible team of doctors wants you to have the quality of in-person care but from the comfort of home
//             </p>
//           </div>
//         </div>
//         <div className="col-lg-6 col-md-12 col-sm-12 mockup_phone style_img">
//           <animated.img
//             style={imageStyles}
//             src={images[imageIndex]}
//             className="change"
//             onClick={handleChangeImage}
//           />
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }

// export default StayingHealth;
// true solution
// import React, { useEffect, useState } from 'react';
// import { DeviceFrameset } from 'react-device-frameset';
// import 'react-device-frameset/styles/marvel-devices.min.css';
// import { useTranslation } from 'react-i18next';
// import '../Style/Staying.css'
// function StayingHealth() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const pageTop = window.scrollY;
//       const pageBottom = pageTop + window.innerHeight;
//       const tags = document.querySelectorAll('.change');

//       tags.forEach((tag) => {
//         if (tag.getBoundingClientRect().top < pageBottom) {
//           tag.classList.add('visible');
//         } else {
//           tag.classList.remove('visible');
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <div className="container main_container" id='HOME'>
//       <div className="row cont d-flex align-items-center justify-content-center mt-5">
//         <div className="col-lg-6 col-md-12 col-sm-12 container_text">
//           <div className="stayingHealth">
//             <p className='font_title'>Staying healthy is just a <b>tap</b> away</p>
//             <p className="mt-3 paragraph_title">Our incredible team of doctors want you to have the quality of in-person care but from the comfort of home</p>
//           </div>
//         </div>
//         <div className={`col-lg-6 col-md-12 col-sm-12 mockup_phone style_img `}>
//           <img
//             src={require( "../Images/1.jpg")}
//             className={`change `}
//           />
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//     </div>
//   );
// }


// export default StayingHealth;

