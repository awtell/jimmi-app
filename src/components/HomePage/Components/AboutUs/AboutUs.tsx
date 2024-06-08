import './AboutUs.css';
import im1 from '../../../../assets/im1.jpeg';
const AboutUs = () => {

    return (
        <section id="about" className="about">
            <div className="container">

                <div className="row">
                    <div className="col-lg-6">
                        <img src={im1} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0">
                        <h3>About Us</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>
                        <ul>
                            <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                            <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        </ul>
                        <div className="row icon-boxes">
                            <div className="col-md-6">
                                <i className="bx bx-receipt"></i>
                                <h4>Corporis voluptates sit</h4>
                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                            </div>
                            <div className="col-md-6 mt-4 mt-md-0">
                                <i className="bx bx-cube-alt"></i>
                                <h4>Ullamco laboris nisi</h4>
                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}


export default AboutUs;
