import Nav from 'react-bootstrap/Nav';
import './NavBar.css';
import { memo, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client';

const images = [
    '/marquee/amar-ujala.jpg',
    '/marquee/business-standard.png',
    '/marquee/cnbc.png',
    '/marquee/dd-news-2.jpg',
    '/marquee/educationWorld.jpg',
    '/marquee/huffington_logo.jpg',
    '/marquee/indiatoday.jpg',
    '/marquee/indiatodaybeta.jpg',
    '/marquee/rajya-sabha.jpg',
    '/marquee/Rediff.png',
    '/marquee/reliance-foundation.jpg',
    '/marquee/statesman.jpg',
    '/marquee/tech-circle.jpg',
    '/marquee/The_economic_Times.jpg',
    '/marquee/the-telegraph.jpg',
    '/marquee/the-tribune.jpg',
    '/marquee/thss-1.png',
    '/marquee/toi.png',
    '/marquee/YourStory.png'
]

const groupSize = 5;
const totalDots = Math.ceil(images.length / groupSize);

const NavBar = () => {
    const carouselRef = useRef();
    const [index, setIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const scrollToGroup = (groupIndex) => {
        const width = carouselRef.current.offsetWidth;
        carouselRef.current.scrollTo({
            left: width * groupIndex,
            behavior: 'smooth'
        });
        setIndex(groupIndex);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prev => {
                const next = (prev + 1) % totalDots;
                scrollToGroup(next);
                return next;
            });
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const FAQItem = memo(({ question, answer }) => {
        const [isOpen, setIsOpen] = useState(false);
        return (
            <div className="faq-item">
                <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                    <span className="question-text">{question}</span>
                    <span className="toggle-sign">{isOpen ? "-" : "+"}</span>
                </div>
                {isOpen && (
                    <div className="answer">
                        {answer}
                    </div>
                )}
            </div>
        );
    });
    

    return (
        <>
            <Nav>
                <div className="navbar">
                    <a className="logo" href="#home">CareerGuide<span className=""></span>.com</a>

                    <ul className="nav-items">
                        <li><a href="#features">Class 10</a></li>
                        <li><a href="#class11">Class 11-12</a></li>
                        <li><a href="#counsellors">Counsellors</a></li>
                        <li><a href="#professionals">Professionals</a></li>
                        <li><a href="#abroad">Study Abroad</a></li>
                        <li><a href="#test">Psychometric Test</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#courses">Courses</a></li>
                        <li className="phone-number">918800442358</li>
                        <li><a href="#signin">Sign In</a></li>
                        <li><a href="#dashboard">My Dashboard</a></li>
                    </ul>
                </div>
            </Nav>


            {/* header */}
            <div>
                <div className='header'>
                    <h1 className="h1">SCIENTIFICALLY PLAN YOUR CAREER</h1>
                    <img className='img' src="public/images/award.png" alt="image" />
                    <p className="ptag">FOR SCHOOL/COLLEGE STUDENTS & WORKING PROFESSIONALS</p>

                </div>
                <div>
                    <hr className='hr' />
                </div>
            </div>

            {/* section */}
            <div className='section'>
                <section className='container1'>
                    <p className='heading1' ><span className='highlighted-text'>CAREER REPORT</span></p>
                    <p className='price' >1999₹</p>
                    <p style={{ color: "red", fontSize: "25px", fontWeight: "bolder", marginTop: "-10px" }}>50% off</p>
                    <p><span className='finalDiscount' >999₹</span></p>
                    <p> <span style={{ fontSize: "20px", fontWeight: "bold" }} >1</span> Psychometric Career Test</p>
                    <hr className='allHr' />
                    <p> <span style={{ fontSize: "20px", fontWeight: "bold" }}>1</span> Psychometric Career Report</p>
                    <hr className='allHr' />
                    <p className='book'>E-BOOK SELF CAREER COUNSELLING</p>
                    <hr className='allHr' />
                    <button className='button'>GET STARTED</button>
                </section>


                <section className='container2'>
                    <p className='heading1' ><span className='highlighted-text'>RECOMMENDED PLAN</span></p>
                    <p  className='price'>5,999₹</p>
                    <p style={{ color: "red", fontSize: "25px", fontWeight: "bolder", marginTop: "-10px" }}>16% off</p>
                    <p><span className='finalDiscount' >4,999₹</span></p>
                    <p> <span style={{ fontSize: "20px", fontWeight: "bold" }}>2</span> Psychometric Career Test</p>
                    <hr className='allHr' />
                    <p> <span style={{ fontSize: "20px", fontWeight: "bold" }}>2</span> Psychometric Career Report</p>
                    <hr className='allHr' />
                    <p className='book1'> <span style={{ fontSize: "20px", fontWeight: "bold" }}>1</span> VIDEO CAREER COUNSELLING SESSION</p>
                    <hr className='allHr' />
                    <p >PERSONALIZED ROADMAP</p>
                    <hr className='allHr' />
                    <p>E-BOOK SELF CAREER COUNSELLING</p>
                    <hr className='allHr' />
                    <p>E-BOOK NEW AGE CAREERS</p>
                    <hr className='allHr' />
                    <button className='button2'>GET STARTED</button>
                </section>
                <section className='container3'>
                    <p className='heading3' ><span className='highlighted-text3'>OUR MOST POPULAR CAREER PLAN</span></p>
                    <p  className='price3'>12,999₹</p>
                    <p style={{ color: "red", fontSize: "25px", fontWeight: "bolder", marginTop: "-10px" }}>24% off</p>
                    <p><span className='finalDiscount3' >9,999₹</span></p>

                    <p><span style={{ fontSize: "20px", fontWeight: "bold" }}>3</span> Psychometric Career Test</p>
                    <hr className='allHr' />
                    <p><span style={{ fontSize: "20px", fontWeight: "bold" }}>3</span> Psychometric Career Report</p>
                    <hr className='allHr' />
                    <p className='book1'> <span style={{ fontSize: "20px", fontWeight: "bold" }}>1</span> VIDEO CAREER COUNSELLING SESSION</p>
                    <hr className='allHr' />
                    <p>E-BOOK SELF CAREER COUNSELLING</p>
                    <hr className='allHr' />
                    <p>E-BOOK NEW AGE CAREERS</p>
                    <hr className='allHr' />
                    <p>E-BOOK NEW AGE TECHNOLOGY</p>
                    <hr className='allHr' />
                    <p>E-BOOK DIGITAL CAREER </p>
                    <hr className='allHr' />
                    <button className='button3'>GET STARTED</button>
                </section>
            </div>

            {/* Hero section */}
            <div className='hero'>
                <div className="video-section">
                    <iframe
                        width="650"
                        height="400"
                        src="https://www.youtube.com/embed/igVKdmUTQoM"
                        title="Why invest in career guidance"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                    <div className="text-section">
                        <h4 className="badge">SCIENTIFICALLY PLAN YOUR CAREER</h4>
                        <h2 className='badge1'>A CAREER COUNSELLOR CAN CHANGE YOUR LIFE</h2>
                        <p className='badge2'>
                            Investing in Career Guidance & Career counselling helps you
                            understand yourself and your career options better, making it easier
                            to make decisions. It also helps you learn more about the job market,
                            be happier in your career, and succeed in the long run.
                        </p>
                        <button className="btn">VIEW PRICING</button>
                    </div>
                </div>

            </div>

            {/* Marquee Section */}
            <div className="carousel-container">
                <motion.div
                    className="carousel"
                    ref={carouselRef}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragStart={() => setIsDragging(true)}
                    onDragEnd={() => setIsDragging(false)}
                >
                    {Array.from({ length: totalDots }).map((_, groupIndex) => {
                        const start = groupIndex * groupSize;
                        const end = start + groupSize;
                        const groupImages = images.slice(start, end);
                        return (
                            <div className="carousel-page" key={groupIndex}>
                                {groupImages.map((img, i) => (
                                    <div className="carousel-item" key={i}>
                                        <img src={img} alt={`slide-${start + i}`} />
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </motion.div>

                <div className="dots">
                    {Array.from({ length: totalDots }).map((_, i) => (
                        <div
                            key={i}
                            className={`dot ${index === i ? 'active' : ''}`}
                            onClick={() => scrollToGroup(i)}
                        />
                    ))}
                </div>
            </div>

            {/* Review sectiom */}
            <div className="card-grid">

                {/* Video 1 */}
                <div className="card-block">
                    <iframe
                        width="320"
                        height="220"
                        src="https://www.youtube.com/embed/_5ThNUGLx4Y"
                        title="Transforming Your Career"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Review 1 */}
                <div className="card-block review-card">
                    <p>A special thanks to Surabhi ma'am for her guidance and career clarity. I highly recommend that anyone with confusion regarding their next career steps consult her for better clarity.</p>
                    <div className="review-footer">
                        <img className="review-image" src="public/images/picture1.png" alt="Tanisha" />
                        <div>
                            <p className="reviewer-name">Tanisha</p>
                            <p className="reviewer-title">Graduate Degree/Master's</p>
                        </div>
                    </div>
                </div>

                {/* Video 2 */}
                <div className="card-block">
                    <iframe
                        width="320"
                        height="220"
                        src="https://www.youtube.com/embed/olu3CpIaGho"
                        title="From confusion to clarity"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Review 2 */}
                <div className="card-block review-card">
                    <p>I am grateful for the session with Ma'am. She was generous and resourceful with her inputs and she also gave her time beyond schedule.</p>
                    <div className="review-footer">
                        <img className="review-image" src="public/images/picture2.png" alt="Dinesh Sharma" />
                        <div>
                            <p className="reviewer-name">Dinesh Sharma</p>
                            <p className="reviewer-title">Working Professional</p>
                        </div>
                    </div>
                </div>

                {/* Video 3 */}
                <div className="card-block">
                    <iframe
                        width="320"
                        height="220"
                        src="https://www.youtube.com/embed/O426vngPojM"
                        title="Find your path"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Review 3 */}
                <div className="card-block review-card">
                    <p>I found the session very informative regarding what can be done in the field of science other than MBBS and engineering. I am thankful for Ma'am's time and effort to answer everything.</p>
                    <div className="review-footer">
                        <img className="review-image" src="public/images/picture3.png" alt="Jeet Nabam" />
                        <div>
                            <p className="reviewer-name">Jeet Nabam</p>
                            <p className="reviewer-title">12th Class</p>
                        </div>
                    </div>
                </div>

            </div>



            {/* FAQ  */}
            <div className="faq-container">
                <h1 className='faq-heading'>FREQUENTLY ASKED QUESTIONS</h1>
                <p className='faq-subheading'>What Users usually ask us.</p>
            </div>

            <div className='FaqQuestion'>
                <FAQItem
                   question = "At what point in my academic or professional journey should I consider  career counselling/career guidance?"
                   answer = "The best time to start career counselling/career guidance is early in your academic journey, especially during your student years - both in school as well as college. Initiating career counselling/career guidance at this stage helps you explore things in an organized way, giving you a clear understanding of your career goals with respect to career selection, entrance exams, college admissions and higher education."
                />               
            </div>

            <div className='FaqQuestion'>
                <FAQItem
                   question = "How long does it typically take to complete the psychometric career test evaluation and counselling session? Can I record the CareerGuide counselling session?"
                   answer = "Our psychometric test typically take 40-60 minutes and are recommended to be completed in one go. However, during a psychometric test, if there are glitches or electricity failures, the test automatically saves your progress so you can resume and continue whenever you want. The CareerGuide counselling session takes 40-60 mins. During the career counselling session you can record the full career guidance counselling session, including counsellors' thoughts, suggestions, and guidance."
                />               
            </div>

            <div className='FaqQuestion'>
                <FAQItem
                   question = "What payment methods are accepted for enrolling in the psychometric tests/ career counselling session ? Can I use alternative options besides credit/debit cards?"
                   answer = "You can make payment for the psychometric test/career counselling session using various secure and convenient methods. We accept credit/debit cards, bank transfer, net banking, UPI (Google Pay, PhonePe, Paytm, Razorpay), and e-wallets. Additionally, we understand the need for flexibility, so we provide alternative options to ensure you can choose the method that best suits your preferences and convenience."
                />               
            </div>

            <div className='FaqQuestion'>
                <FAQItem
                   question = "Do I need to prepare for the CareerGuide psychometric test and CareerGuide counselling? Is parental involvement encouraged in the career counselling/career guidance sessions, or are they exclusively for the students?"
                   answer = "No, you do not need to prepare before taking the CareerGuide psychometric test or attending CareerGuide counselling. You just need to ensure a stable internet connection and a device with a camera; that's all, the rest is up to us. We strongly believe that parents play a crucial role in helping their children choose a career. Therefore, we encourage parents to join the career counselling/career guidance sessions with their child on our platform. We believe that involving parents improves career guidance. It creates a teamwork environment that helps students make informed decisions about their future."
                />               
            </div>

            
            <div className='FaqQuestion'>
                <FAQItem
                   question = "Can you provide details about the professionals who will be guiding me through the career planning process?"
                   answer = "Absolutely! Our team of career experts, who are highly experienced professionals, will guide you through your career journey. They have 12+ years of experience in the career counselling/career guidance industry. Our counsellors are Certified Master Career Guide trained and certified under our founder Surabhi Dewra. Click here to visit their profile."
                />               
            </div>

            <div className='FaqQuestion'>
                <FAQItem
                   question = " How can I avail face-to-face CareerGuide counselling sessions and the CareerGuide psychometric test?"
                   answer = "Yes, you can avail face-to-face counselling sessions and the CareerGuide psychometric test at our Delhi head office without any extra cost. If you are from Delhi NCR, it will also be beneficial for you to take face-to-face counselling sessions and the CareerGuide psychometric test."
                />               
            </div>
            

            <div className='FaqQuestion'>
                <FAQItem
                   question = "I'm located outside of India. How can I access your services for career counselling/career guidance?"
                   answer = "Our career counselling/career guidance services are designed to cater to individuals across the world, regardless of their location. If you're residing outside of India, you can still benefit from our career counselling/career guidance sessions through video chat. These virtual sessions are just as effective as face-to-face interactions, and many individuals opt for them due to the convenience they offer. This ensures that you can receive valuable career counselling/career guidance from the comfort of your own location."
                />               
            </div>


            <div className='FaqQuestion'>
                <FAQItem
                   question = "How can I avail your services for the CareerGuide psychometric test and CareerGuide counselling?"
                   answer = "Availing our services is a straightforward process. Simply visit our website or contact our customer support team. Depending on the nature of the service, you may be able to sign up directly online or schedule a consultation. Our platform is designed to be user-friendly, ensuring that you can easily navigate and access the services you need. If you have specific questions or require assistance, feel free to reach out to our support team for personalized guidance on how to proceed."
                />               
            </div>


            <div className='FaqQuestion'>
                <FAQItem
                   question = "Can I get a chance to have a CareerGuide counselling session with CareerGuide founders?"
                   answer = "Yes, we offer a special opportunity for passionate and curious individuals to have a CareerGuide counselling session with CareerGuide founders."
                />               
            </div>


            <div className='FaqQuestion'>
                <FAQItem
                   question = " How do the CareerGuide Psychometric test and CareerGuide counselling session contribute to making informed decisions about my career path?"
                   answer = "The CareerGuide Psychometric test and CareerGuide counselling session are beneficial for individuals of any age group seeking to discover the most suitable career options. The analysis report and counsellors’ guidance serve as valuable tools to identify and explore potential careers, whether you're just starting your career search or considering a change. By pinpointing your strengths and potential weaknesses, the assessment and counselling session aid in making informed decisions about your career."
                />               
            </div>


            <div className='FaqQuestion'>
                <FAQItem
                   question = "What is the refund and cancellation policy?"
                   answer = "You will be charged as set forth on the payment page. If you are not satisfied with the services we will provide you another counsellor to meet your expectations. You may email regarding your issues to us at customercare@careerguide.com. We want you to be successfull in your career and will initiate necessary steps in appropriate circumstances at our sole discretion."
                />               
            </div>

           

        </>
    )
}

export default NavBar;