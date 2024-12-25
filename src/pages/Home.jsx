import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Donation from "../components/donation"

import id1 from '../img/id-1.jpg'
import id2 from '../img/id-2.jpg'
import id3 from '../img/id-3.jpg'
import id4 from '../img/id-4.jpg'
import id5 from '../img/id-5.jpg'

import mark1 from '../img/st-1.png'
import mark2 from '../img/st-2.png'
import mark3 from '../img/st-3.png'

import media from '../img/media.jpg'

export default function Home() {
    return(
        <>
            <Navbar />

            <main>

                <div className="bg-img bg-img-1 h-full">
                    <div className="p-64 w-100p h-100p hidden-blue">
                        <h1 className="white text-64">Welcome to Our Tourism Site!</h1><br /><br />
                        <p className="white text-36">Discover the world's hidden gems and unforgettable experiences.</p>
                    </div>
                </div>

                <div className="flex p-32 jcc aic">
                    <div className="w-50p flex jce aic flex-col">
                        <h1 className="text-36">Expolre with team</h1><br />
                        <p className="text-16 w-50p">exploring new places with your team is always better than going solo, isn't it? Use your teamwork skills to discover new destinations together. Whether it's new countries, streets, or hidden gems, exploring with a group makes the adventure more exciting. After all, not every team member will know the place, which makes it an opportunity for everyone to learn and have fun together. So, why explore alone when you can create amazing memories with your team?</p>
                    </div>
                    <div className="w-25p">
                        <img className="id-imgs" src={ id1 } alt="" />
                    </div>
                </div>

                <div className="flex p-32 jcc aic">
                    <div className="w-25p"></div>
                    <div className="w-25p flex ">
                        <img className="id-imgs" src={ id2 } alt="" />
                    </div>
                    <div className="w-50p flex jce aic flex-col">
                        <h1 className="text-36">Catch beautiful time</h1><br />
                        <p className="text-16 w-50p">Watch as incredible moments unfold before your eyes, capturing the most beautiful times. Witness the sunrise and sunset, and immerse yourself in their breathtaking beauty. Why not join us and experience this magic for yourself? Isn't it fascinating to see the bright, stunning sun slowly dip below the horizon right before your eyes?</p>
                    </div>
                </div>

                <div className="bg-img bg-img-2 h-full">
                    <div className="p-64 w-100p h-100p hidden-blue">
                        <h1 className="white text-36">Explore just amazing places!</h1><br /><br /><br />
                        <div className="flex jca">
                            <div className="card p-12 flex flex-col">
                                <h1>free-fly</h1><br /><br />
                                <p>Designed for those who prioritize affordability, Free-Fly offers budget-friendly tickets with essential features. While amenities are limited, this option ensures a simple and economical way to reach your destination. It’s ideal for travelers who want to save money without compromising the opportunity to explore new places.</p>
                                <img className="size-130" src={ mark1 } alt="" />
                            </div>
                            <div className="card p-12 flex flex-col">
                                <h1>vip-fly</h1><br /><br />
                                <p>For those seeking a bit more comfort and convenience, VIP-Fly is the perfect choice. This category includes premium tickets with enhanced features, such as better seating, added services, and a more enjoyable overall travel experience. It’s a great option for travelers who value a higher level of comfort without breaking the bank.</p>
                                <img className="size-130" src={ mark2 } alt="" />
                            </div>
                            <div className="card p-12 flex flex-col">
                                <h1>gem-fly</h1><br /><br />
                                <p>The pinnacle of luxury and quality, Gem-Fly tickets offer the best travel experience available. The best choice for those seeking top-tier comfort and quality, Gem-Fly offers exceptional services and superior amenities. It’s designed to make your journey as smooth and luxurious as possible. Really expensive.</p>
                                <img className="size-130" src={ mark3 } alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* <div className="flex p-40">
                    <div className="w-50p">
                        <h1 className="text-36">Media Coverage / follow us on social medias</h1><br />
                        <div className="flex"><p className="text-16">Discover the latest news, articles, and videos about the tourism industry. Join us for exclusive interviews, behind-the-scenes moments, and exclusive updates from our team. By staying updated, you'll be able to find the best places to explore, catch beautiful times, and enjoy amazing experiences with your team.</p><div className="w-50p"></div></div>
                    </div>
                    <div className="w-25p"></div>
                    <div className="w-25p">
                        <img src={ media } className='id-imgs' alt="" />
                    </div>
                </div> */}

                <div className="flex w-100p jca ">
                    <div className="w-50p p-40">
                        <h1>Why you can trust us?</h1>
                        <div className="flex mt-40 w-100p">
                            <div className="w-25p text-64 flex jcc aic opacity-5">200+</div>
                            <div className="w-75p text-32">companies use our website to sail their tichets</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">5k+</div>
                            <div className="w-75p text-32">tichets sailed in our website marketplace</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">2</div>
                            <div className="w-75p text-32">years experience working with protection</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">10+</div>
                            <div className="w-75p text-32">supporter companies that support us with materials and money</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">4.6</div>
                            <div className="w-75p text-32">rating on WTWR ( World Tour Websites Rating )</div>
                        </div><br />
                        <div className="w-100p flex jcc aic"><img className="radius-32 w-75p" src={ id3 } alt="id-3" /></div>
                    </div>
                    <div className="w-50p p-40">
                        <div className="w-100p flex jcc aic mt-40"><img className="radius-32 w-75p" src={ id4 } alt="id-4" /></div>
                        <h1 className="mt-40">Any garantees ?</h1>
                        <div className="flex mt-40 w-100p">
                            <div className="w-25p text-64 flex jcc aic opacity-5">1</div>
                            <div className="w-75p text-32">secure transactions with advanced encryption</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">2</div>
                            <div className="w-75p text-32">verified partners for trustworthy bookings</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">3</div>
                            <div className="w-75p text-32">continuous monitoring to prevent fraud</div>
                        </div><br />
                        <div className="flex">
                            <div className="w-25p text-64 flex jcc aic opacity-5">4</div>
                            <div className="w-75p text-32">dedicated support for safety concerns</div>
                        </div><br />
                    </div>
                </div>

                <div className="bg-img bg-img-3 h-full">
                    <div className="p-64 w-100p h-100p hidden-blue">
                        <h1 className="white text-64">Take amazing experiense and some souvinirs </h1><br /><br />
                        <p className="white text-36">Our platform partners with over 200 companies to bring you an incredible variety of gifts, exclusive facilities, and memorable souvenirs—all available to you for free. Experience the joy of receiving exciting perks at no cost!</p>
                    </div>
                </div>

                <div className="w-100p flex jcc aic flex-col p-40">
                    <h1 className="text-64">Become a Valued Supporter of Our Project!</h1>
                    <br /><p className="w-75p tac text-20">We invite you to join us on this exciting journey to make travel more accessible and rewarding. By partnering with us, you’ll have the chance to connect with popular YouTube bloggers who share exclusive promo codes for discounts, giving you access to amazing savings on your next adventure. If you’re passionate about supporting innovative projects, consider making a donation to help us grow. As a token of our gratitude, we’ll provide you with access to our mobile or online app. This app is your ultimate tool for monitoring prices, exploring exclusive discounts, and staying updated on the best deals available. Your support will directly contribute to improving our platform, expanding our features, and making travel experiences even more enjoyable for everyone. Together, we can build a stronger, smarter, and more connected travel community.</p>

                    <div className="flex mt-40"><Donation /> <img className="donatImg" src={ id5 } alt="" /></div>
                </div>
            </main>

            <Footer />
        </>
   )
}
