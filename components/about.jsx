import React, { useEffect } from 'react';
import './css/about.css';
import AOS from "aos";
import "aos/dist/aos.css";
import cmImage from '../public/images/nitishkumar.jpg';
import EnergyMinister from '../public/images/AboutImages/Energy Minister.jpg';
import md from '../public/images/AboutImages/New MD Sir.jpeg.jpg'
import cmd from '../public/images/AboutImages/cmd.jpg';



function About() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            {/* about section start */}

            <div className="aboutSection">
                <div className="aboutText" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">

                    <h3 className="decorative-heading">About Us</h3>
                    {/* <h3 style={{ textAlign: 'center', fontStyle: 'italic', fontSize: '3rem', fontFamily: 'Brush Script MT, cursive' }}>About Us </h3> */}

                    <p style={{ textAlign: 'justify' }}>Bihar State Power Transmission Company Limited, a subsidiary company of Bihar State Power (Holding) Company Limited, is a Government of Bihar wholly owned corporate entity incorporated under the Companies Act 1956 on 1st Nov, 2012 after restructuring of erstwhile Bihar State Electricity Board. It carries out intra-state transmission and wheeling of electricity under license issued by the Bihar Electricity Regulatory Commission. It also discharges the functions of State Load Despatch Centre (SLDC) of Bihar.               </p>
                    <br /><br /><button className="view-more-button">View More</button>
                </div>

                <div className="aboutImage" data-aos="fade-up" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    {/* Add image or any content here */}
                    {/* CM image */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmImage} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Chief Minister</h5>
                            <p className='text-center'>Nitish Kumar</p>
                        </div>
                    </div>

                    {/* Energy Minister */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={EnergyMinister} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Energy Minister</h5>
                            <p className='text-center'> Sri Bijendra Pd. Yadav</p>
                        </div>
                    </div>



                    {/* CMD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={cmd} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Chairman-cum-MD</h5>
                            <p className='text-center'> Kumar</p>
                        </div>
                    </div>

                    {/* MD */}
                    <div className="Card">
                        <div className='imageContainer'>
                            <img src={md} alt="CM Image" className="cardImage" />
                        </div>
                        <div className='cardText'>
                            <h5 className='text-center'>Managing Director</h5>
                            <p className='text-center'> Kumar</p>
                        </div>
                    </div>

                </div>
                <div className='newsAndUpdates'>
    <div className="about-container">
        <div className="about-header">
            <h1>News & Announcements</h1>
            <div className="close-icon">
                <span className="material-icons">close</span>
            </div>
        </div>
        <div className="about-content">
            <div className="about-item">
                <div className="about-item-title">
                    Zone Wise solar power margin at UPPTCL Substations with date 30.04.2024.
                </div>
                <div className="about-item-details">
                    <span className="material-icons">insert_drive_file</span>
                    File Size: 4 MB | Language: English
                </div>
                <div className="about-item-date">Date: 01/05/2024</div>
            </div>
            <div className="about-item">
                <div className="about-item-title">
                    Date & Venue of Public Hearing for UPPTCL Petition for ARR/Tariff of FY 2024-25, ARR for FY 2023-24 & True-UP for FY 2022-23
                </div>
                <div className="about-item-details">
                    <span className="material-icons">insert_drive_file</span>
                    File Size: 1 MB | Language: English
                </div>
                <div className="about-item-date">Date: 03/07/2024</div>
            </div>
            <div className="about-item">
                <div className="about-item-title">
                    REGARDING ZONEWISE AVAILABLE CLUSTER CAPACITY SOLAR POWER MARGIN AT UPPTCL SUBSTATIONS
                </div>
                <div className="about-item-details">
                    <span className="material-icons">insert_drive_file</span>
                    File Size: 3 MB | Language: English
                </div>
                <div className="about-item-date">Date: 10/06/2024</div>
            </div>
            <div className="about-item">
                <div className="about-item-title">
                    List of Winners of Environment Day Crossword Quiz-2024
                </div>
                <div className="about-item-details">
                    <span className="material-icons">insert_drive_file</span>
                    File Size: 1 MB | Language: Hindi
                </div>
            </div>
        </div>
        <div className="about-footer">
            <button className="about-footer-button">View All</button>
        </div>
    </div>
</div>


            </div>




        </>
    );
}

export default About;
