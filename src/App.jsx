import React, { useEffect } from 'react';
import Swal from 'sweetalert2'; // Import SweetAlert2
import Navbar from './Compounents/Navbar/Navbar';
import './App.css';
import Section1 from './Compounents/Section 1/Section1';
import Section2 from './Compounents/Section 2/Section2';
import Section3 from './Compounents/Section 3/Section3';
import Section4 from './Compounents/Section 4/Section4';
import Section5 from './Section 5/Section5';

const App = () => {
  useEffect(() => {
    // Show the SweetAlert when the component mounts
    Swal.fire({
      title: 'Working progress...',
      text: 'This application is under construction.',
      icon: 'info',
      confirmButtonText: 'OK',
    });
  }, []); // Empty dependency array ensures this runs only once

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </>
  );
};

export default App;
