
const BlogBanner = () => {
    return <>
        <section className="blogBannerWrapper">
        <div className="blogrect"></div>
            <div className="blogBannerOverlay">
                <div className="leftBlogBanner">
                    <h2>BLOG AND UPDATES</h2>
                    <p>We offer an array of specialized oil field services, including Oil Well Cementing, Fishing Services, Downhole Camera Services, Slickline and Wireline Services, and Drilling Support Services, encompassing OCTGs, DD, and FEWD. Our expertise ensures efficient and reliable solutions for the oil and gas industry's diverse operational needs.</p>
                </div>
                <div className="rightBlogBanner">
                    <div className="blogBannerCard">
                        <img src="" alt="" />
                        <div className="blogBannerContent">
                            <h3><u>Fueling Africa's Future: 5 Massive Oil and gas Projects Unveiled</u></h3>
                            <p>Energy companies have their sights set on Africa. Here are the 5 largest oil & gas projects happening in Africa at the moment</p>
                            <small>Written by: Raphael Santos July 5, 2023</small>
                        </div>
                    </div>
                    <div className="blogBannerCard">
                        <img src="" alt="" />
                        <div className="blogBannerContent">
                            <h3><u>Changing crude flows are creating opportunities in the Us Golf Coast</u></h3>
                            <p>By Tim Fitzgibbon, Anantharaman Shankar, and Luka Vukomanovic</p>
                            <small>
                            September 21, 2022 - Flows of medium-sour Urals crude from Russia to Asia are increasing, widening the discount for light and heavy crude grades.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
}

export default BlogBanner