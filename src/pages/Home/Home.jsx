import React from 'react'
import Layout from '../../components/Layouts/Layout';
import "../../styles/HomeStyle.css";
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
function Home() {
  return (
    <>
      <Layout>
        {/* Home Section Hero Banner Start */}
        <Section1/>
        {/* Home Section Hero Banner End */}
        
        {/* Home Section About Start */}
        <Section2/>
        {/* Home Section About End */}

        {/* Home Section Menu Start */}
        <Section3/> 
        {/* Home Section Menu End */}

        {/* Home Section Promotion start */}
        <Section4/>
        {/* Home Section Promotion End */}

      </Layout>
    </>
  )
}

export default Home;