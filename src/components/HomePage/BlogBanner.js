import blog1 from "../../assets/images/blog1.png"
import blog2 from "../../assets/images/blog2.png"


import { FaArrowRight } from "react-icons/fa6";
const BlogBanner = () => {
    return <>
        <section className="blogBannerWrapper">
        <div className="blogrect"></div>
            <div className="blogBannerOverlay">
                <div className="leftBlogBanner">
                    <h2>BLOG AND UPDATES</h2>
                    <p>We offer an array of specialized oil field services, including Oil Well Cementing, Fishing Services, Downhole Camera Services, Slickline and Wireline Services, and Drilling Support Services, encompassing OCTGs, DD, and FEWD. Our expertise ensures efficient and reliable solutions for the oil and gas industry's diverse operational needs.</p>
                    <button className="balckbtn">View More <FaArrowRight/></button>
                </div>
            </div>
                <div className="rightBlogBanner">
                    <div className="blogBannerCard">
                        <img src={blog1} alt="" />
                        <div className="blogBannerContent">
                            <h3><u>Fueling Africa's Future: 5 Massive Oil and gas Projects Unveiled</u></h3>
                            <p>Energy companies have their sights set on Africa. Here are the 5 largest oil & gas projects happening in Africa at the moment</p>
                            <small>Written by: Raphael Santos July 5, 2023</small>
                            <div className="buttonWrap">
                            <button>Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="blogBannerCard">
                        <img src={blog2} alt="" />
                        <div className="blogBannerContent">
                            <h3><u>Changing crude flows are creating opportunities in the Us Golf Coast</u></h3>
                            <p>Energy companies have their sights set on Africa. Here are the 5 largest oil & gas projects happening in Africa at the moment</p>
                            <small>
                            Written by: Raphael Santos July 5, 2023</small>
                            <div className="buttonWrap">
                            <button>Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>

    </>
}

export default BlogBanner