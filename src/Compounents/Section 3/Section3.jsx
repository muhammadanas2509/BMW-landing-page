import React, { useState } from 'react';
import './Section3.css'; // For styling (can also be included in the same file using styled-components or inline styles)
import S3Video from '../../assets/S3 video.mp4'
import { MdArrowForwardIos } from 'react-icons/md';
// import Img1 from '../../assets/S1 Card1.jpg'
const Section3 = () => {

  return (
    <>
   <div className="sec">
   <div className="ma">
  <div className="S3Video">
  <video
                 className='s3v'
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src={S3Video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
     
    </div>
  </div>
    <div className="t1"><h2>Become a BMW expert</h2></div>   
   </div>
   <div className="t21"><h2> <MdArrowForwardIos />BMW EXPLAINED</h2></div>
    </>
    

  );
};

export default Section3;
