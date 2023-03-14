import React from 'react';
import Header from "../components/common/Header";
import Breadcrumb from "../components/common/Breadcrumb";
import LoginBox from "../components/other/account/LoginBox";
import NewsLetter from "../components/other/cta/NewsLetter";
import Footer from "../components/common/Footer/Footer";
import ScrollTopBtn from "../components/common/ScrollTopBtn";
import breadcrumbimg from '../public/images/bread-bg.jpg'
import sectiondata from "../data/store";

const state = {
    breadcrumbimg: breadcrumbimg,
}
function Login() {
    return (
        <main className="login-page">
            {/* Header */}
            <Header />

            {/* Breadcrumb */}
            <Breadcrumb CurrentPgTitle="Login" img={state.breadcrumbimg} />

            <section className="form-shared padding-top-40px padding-bottom-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mx-auto">
                            <LoginBox title="Login to your account" subtitle="with your social network" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <NewsLetter newsLetterContent={sectiondata.calltoactions.newsletters} />

            {/* Footer */}
            <Footer />

            <ScrollTopBtn />

        </main>
    );
}

export default Login;
