import React from 'react';
import Head from 'next/head';
import '@/styling/Services.css';

import { FaCar, FaTools, FaFileAlt } from 'react-icons/fa';

export default function Services() {
  return (
    <>
      <Head>
        <title>Carvilla</title>
        <meta name="description" content="Get your desired car in reasonable price" />
      </Head>

      {/* Services Section */}
      <section  id="services">
        <h2 className="sectionTitle">Our Services</h2>
        <div className="servicesContainer">
          <div className="serviceCard">
            <FaCar className="serviceIcon" />
            <h3>Largest Dealership of Cars</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaTools className="serviceIcon" />
            <h3>Unlimited Repair Warranty</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
            <div className="underline"></div>
          </div>
          <div className="serviceCard">
            <FaFileAlt className="serviceIcon" />
            <h3>Insurance Support</h3>
            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut den fugit sed quia.</p>
            <div className="underline"></div>
          </div>
        </div>
      </section>
    </>
  );
}
