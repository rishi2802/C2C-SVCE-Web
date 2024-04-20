import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import logo from "../assets/icon.png"

function Logo(){
    return(
        <img src={logo} alt="c2c"/>
    )
}

function Events() {
  return (
    <div>
        <VerticalTimeline>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="13 February 2024"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Web Pageantry</h3>
    <p>
    Web Pageantry gave a perfect experience for students to craft their own websites with interactive components within given time making use of various strategies to manage time. It was organised with a total of 60 participants.
    </p>
</VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="29 December 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Behind The Scenes</h3>
    <p>
    Behind the Scenes provided a platform for freshers to integrate theoretical knowledge with practical application, fostering a holistic understanding of technical domains. It was organised with a total of 45 participants.
</p>
</VerticalTimelineElement>
    
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="17 October 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Seminar: Magoosh - Navigating Higher Education</h3>
    <p>
        C2C organized an educational seminar on Data Science career paths, featuring Grad School Expert Mr. Sarath Kumar. With seamless logistics and engaging sessions, the event deepened participants' understanding of higher education options, providing valuable insights and networking opportunities.
    </p>
</VerticalTimelineElement>
<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="27, 28 & 29 September 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Emerging technologies 3.0</h3>
                <p>
                  Renowned speakers, including Dr. P. Vinothiyalakshmi, Dr. Anitha, and Dr. N. Rajganesh, provided deep insights into Cloud Computing, Virtualization Techniques, and .NET Technology.  </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="19 September 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Walk International Seminar</h3>
<p> Led by Spoorthi Sagar, this seminar organized by C2C provided valuable insights into pursuing Data Science and AI.
    </p></VerticalTimelineElement>
    <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="12 September 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Seminar: GradSquare</h3>
                <p>
                GradSquare provided a comprehensive overview of higher education options, focusing on advanced degrees and specialized certifications in Cloud Computing, Artificial Intelligence, and Data Science.                </p></VerticalTimelineElement>
                <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="10 July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Alumni meet</h3>
    <p>
        The event blended marketing insights with fun activities, engaging around 60 students from various departments.
    </p>
</VerticalTimelineElement>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="10 July 2023"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">NAAC and NBA Project Display: Innovation Showcase</h3>
    <p>
        Students presented diverse projects, from smart inventory to medical monitoring apps, during the NBA project display.
    </p>
</VerticalTimelineElement>
<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="12 & 13 May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Squid Game</h3>
                <p>
                Drawing 400 participants from all departments, SQUID GAME Live at Highway 2023 transformed the college ground into a dystopian arena, featuring challenges inspired by the popular TV series. 
                </p></VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="11 & 12 May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">IPL auction 2.0</h3>
                <p>
                IPL Auction 2.0 introduced card-based dream team creation with budget management and player bidding. Participants competed for the highest scores, earning recognition from the club.                 </p></VerticalTimelineElement>
               
        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="11 & 12 May 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Laser tag 2.0</h3>
                <p>
                Laser Tag 2.0 featured participants navigating a darkened arena with high-tech laser guns and vests, emphasizing strategy and teamwork for a thrilling battle.</p>            </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="21 March 2023"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Challenge N Build</h3>
                <p>
                A tech-centric event for developers to bid on code snippets, build websites, and compete for prizes. Fostering collaboration and creativity, it's a platform to showcase skills and create value in the developer community.</p> </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="25 November 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Coding Contest</h3>
                <p>
                A 3-hour coding contest was organised with about 150 participants 
                </p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="21 November 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Tech debate</h3>
                <p>
                Organized by C2C, the four-month Debato-Discussion event engaged 2nd, 3rd, and final-year students in cutting-edge tech discussions on tools, IoT, blockchain, networks, and more. </p>
            </VerticalTimelineElement>
            
        <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="17 November 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Emerging technologies 2.0</h3>
                <p>
               A dynamic three-day workshop explored Python, ML, R, and hands-on model building. With a focus on practical implementation and insights into IoT, Cloud, and AI, participants optimized learned models.  </p>        </VerticalTimelineElement>


<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="13 November 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">8 steps to crack an interview</h3>
    <p>
        C2C facilitated a talk by Mr. Babu Narayanan Manickam, CEO of Qeagle Assurance and TestLeaf Software Solutions, providing practical tips for securing top-paid software positions. With 150 students in attendance, the interactive session emphasized actionable advice, highlighting C2C's commitment to impactful learning opportunities.
    </p>
</VerticalTimelineElement>
<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="13 September 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">Market the product</h3>
    <p>
        This non-tech marketing event immersed students in simulated scenarios, testing adaptability and creativity in selling diverse products. With around 200 active participants, the challenges emphasized practical marketing skills, fostering healthy competition and receiving positive feedback for the impactful learning experience.
    </p>
</VerticalTimelineElement>

<VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
    date="22 August 2022"
    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
>
    <h3 className="vertical-timeline-element-title">GitHub hands-on</h3>
    <p>
        This unique event combined the excitement of an IPL auction with a technical website-building challenge. Organized by the Compete to Compute Club, it aimed to showcase developers' skills, foster community, and provide networking opportunities. Carefully curated code snippets were bid on, creating a competitive yet engaging atmosphere. Continuous feedback collection ensures improvements for future events, aligning with members' interests.
    </p>
</VerticalTimelineElement>
<VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="21, 22 & 23 March 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Emerging technologies 1.0</h3>
                <p>
                Conducted on Google Meet, Emerging Technologies 1.0 explored IoT, ML, Cloud, and AI. With a focus on demystifying machine learning, the workshop engaged 200 students across departments, providing practical insights. Curated by the C2C Club, the event's impact was seen in positive feedback, certificates recognizing active participation, and encouragement for further research.                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="1 Aug 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Designing and Modelling of IoT, AI & ML systems</h3>
                <p>
                A 5-Day workshop on “Designing and Modelling of IoT, AI & ML systems” with about 50 participants. They were given exposure to All India Council for Technical Education (AICTE), ARM Education, STMicroelectronics with the support from Microsoft and Nielit Calicut.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="19 Jul 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Hands on Learning Session on Engineering Mathematics</h3>
                <p>
                A Hands on Classroom Session on Engineering Mathematics, conducted with 70 interested candidates to make them aware of the method on using mathematics in algorithms we use in our day-today activities.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="14 Jul 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Hands on Learning Session on OOPS</h3>
                <p>
                A Hands on Learning Session on Object-Oriented Programming, Participants were given exposure to the real-time usage of OOPS concepts in real life. It was organised with a total of 70 participants.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="4 & 5 May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Movie Screening</h3>
                <p>
                Top rated movies were screened, one on each day in a hall of 150 people. The Movies were selected by the majority of the participants and the most liked movie was screened with a total of 300 participants and 50 volunteers.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="4 May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">IPL Auction</h3>
                <p>
                IPL Auction was conducted with about 100 participants and 50 volunteers in organising it.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="3 & 4 May 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Lazer Tag</h3>
                <p>
                It is a recreational shooting sport where participants use infraredemitting light guns to tag designated targets. It was organised with about 100 volunteers and a total of 900 participants.
                </p>
            </VerticalTimelineElement>
          
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="28 February 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">Potential of IoT</h3>
                <p>
                A Webinar on “Potential of IoT”, presented by Mr.Sriram Nagarajan, Co-Founder & CEO of ROBORAM. This was conducted with about 60 participants.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="29 January 2022"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                >
                <h3 className="vertical-timeline-element-title">An Insight about Developer Jobs</h3>
                <p>
                A Webinar on “An Insight about Developer Jobs”. Mr.Rasswanth, Software Engineer(React UI), Mr.Tirumala Babu, Software Engineer(Data Engineering) as the resource people. There were a total of 50 Beneficiaries.
                </p>
            </VerticalTimelineElement>
           

            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                // icon={<StarIcon />}
            />
        </VerticalTimeline> 
     
    </div>
  )
}

export default Events