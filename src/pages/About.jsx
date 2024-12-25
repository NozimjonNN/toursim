import Navbar from "../components/navbar"
import Footer from "../components/footer"

import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import team4 from '../img/team-4.jpg'

export default function About() {
    return(
        <>
            <Navbar />
            <main>
                <div className="h-full bg-img-4 bg-img">
                    <div className="w-100p h-100p hidden-blue p-40">
                        <h1 className="white text-64">More about us</h1>
                        <p className="white text-36">Our mission is to provide our guests with the best possible experiences while staying true to our roots. We believe that every moment deserves a unique and memorable experience.</p>
                    </div>
                </div>

                <div className="p-40">
                    <h1 className="text-48">Our Team</h1>
                    <div className="flex jca mt-40">
                        <div className="flex flex-col p-20 radius-32 card-about jce aic">
                            <img className="size-150 radius-full" src={ team1 } alt="" />
                            <br /> <h3 className="text-24">Emily Clark</h3>
                            <p className="text-16">Software Engineer</p>
                            <p>" Building the future one line of code at a time. There's always a new challenge waiting to be solved "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team2 } alt="" />
                            <br /> <h3 className="text-24">Michael Turner</h3>
                            <p className="text-16">Product Designer</p>
                            <p>" Design is not just about aesthetics, it's about making the user experience intuitive and seamless "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team3 } alt="" />
                            <br /> <h3 className="text-24">Sarah Johnson</h3>
                            <p className="text-16">Business Analyst</p>
                            <p>" Data is my language. I translate complex information into actionable insights for smarter decisions "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team4 } alt="" />
                            <br /> <h3 className="text-24">David Martinez</h3>
                            <p className="text-16">Marketing Manager</p>
                            <p>" It's all about connecting the brand with the right audience. Every campaign is a new opportunity to make an impact "</p>
                        </div>
                    </div>
                    <div className="flex jca mt-40">
                        <div className="flex flex-col p-20 radius-32 card-about jce aic">
                            <img className="size-150 radius-full" src={ team4 } alt="" />
                            <br /> <h3 className="text-24">Olivia Brown</h3>
                            <p className="text-16">Data Scientist</p>
                            <p>" Behind every number is a story. My job is to uncover the insights that drive innovation "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team3 } alt="" />
                            <br /> <h3 className="text-24">Daniel Wilson</h3>
                            <p className="text-16">Content Writer</p>
                            <p>" Words have power. I love crafting stories that inform, entertain, and inspire "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team2 } alt="" />
                            <br /> <h3 className="text-24">Sophia Lee</h3>
                            <p className="text-16">UX/UI Developer</p>
                            <p>" Great design is invisible. I ensure users enjoy smooth, intuitive experiences without even thinking about it "</p>
                        </div>
                        <div className="flex flex-col p-20 radius-16 card-about jce aic">
                            <img className="size-150 radius-full" src={ team1 } alt="" />
                            <br /> <h3 className="text-24">James Carter</h3>
                            <p className="text-16">Operations Coordinator</p>
                            <p>" Every project needs a plan. I'm here to ensure that everything runs smoothly, efficiently, and on time "</p>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
   )
}
