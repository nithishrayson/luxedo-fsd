import HeroSection from "../HeroSection/HeroSection";
import NewArrivals from "../NewArrivals/NewArrivals";
import TopSelling from "../TopSelling/TopSelling";
import DressStyleCard from "../DressStyleCard/DressStyleCard";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";
import Footer from "../Footer/Footer";
import BrandScroller from "../../widgets/BrandScroller/BrandScroller";

const HomePage = () => {
    return (
        <div className="homepage-wrapper">
            <HeroSection />
            <section className="section-wrapper my-5">
                <NewArrivals />
            </section>
                <div className="section-divider mx-auto my-4"></div>

                <section className="section-wrapper my-5">
                    <TopSelling />
                </section>

                <div className="section-divider mx-auto my-4"></div>
                <section className="section-wrapper my-5">
                    <DressStyleCard />
                </section>

                <div className="section-divider mx-auto my-4"></div>
                <section className="brand-section py-5">
                    <div className="container">
                        <h2 className="fw-bold text-uppercase mb-5 text-center">
                            Featured Brands
                        </h2>
                        <BrandScroller />
                    </div>
                </section>

                <div className="section-divider mx-auto my-4"></div>
                <ReviewCarousel />
            </div>
    );
};

export default HomePage;
