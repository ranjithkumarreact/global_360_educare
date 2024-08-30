import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpenReader } from '@fortawesome/free-solid-svg-icons'

const PrivacyPolicy = () => {
    return (
        <div>
            <section className="pt-50 pb-50 privacy-border">
                <div className="container">
                    <div>
                        <div className="mb-3">
                            <h3>Privacy policy</h3>
                        </div>
                        <div className="privacy-sec">
                            <div>
                                <h4>Introduction</h4>
                                <div className="privacy-descrption">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div>
                                        <p>Global 360 Educare we is committed to
                                            protecting your privacy. This
                                            Privacy Policy explains how we
                                            collect, use, disclose, and
                                            safeguard your information when you
                                            visit our website,
                                            www.global360educare.com (the
                                            "Site"), and use our services.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="privacy-sec">
                            <div>
                                <h4>Information We Collect</h4>

                                <span className="wecollectphara">We may collect and process the following types of information:<br/>
                                Personal Information:</span>
                                <div className="privacy-descrption mt-2">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div >
                                        <p>Name, email address, phone number, company name, and other contact details.</p>
                                    </div>
                                </div>

                                <span className="wecollectphara">Location Data :</span>

                                <div className="privacy-descrption mt-2">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div >
                                        <p>GPS location data to track the movements of salespersons.</p>
                                    </div>
                                </div>


                                <span className="wecollectphara">Usage Data : </span>

                                <div className="privacy-descrption mt-2">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div >
                                        <p>Information about your interactions with the App, including access times, pages viewed, and other usage information.</p>
                                    </div>
                                </div>
                                <span className="wecollectphara">Device Information :</span>

                                <div className="privacy-descrption mt-2">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div >
                                        <p>Information about your device, including device type, operating system, unique device identifiers, and mobile network information.</p>
                                    </div>
                                </div>


                            </div>
                        </div>



                        <div className="privacy-sec">
                        <div>
                            <h4>How We Use Your Information</h4>

                            <span className="wecollectphara">We use the information we collect in the following ways :<br/>
                            To Provide and Improve the App :</span>
                            <div className="privacy-descrption mt-2">
                                <div>
                                    <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                </div>
                                <div >
                                    <p>To operate and maintain our App, including tracking salesperson location for logistical and safety purposes.</p>
                                </div>
                            </div>

                            <span className="wecollectphara">To Communicate with You :</span>

                            <div className="privacy-descrption mt-2">
                                <div>
                                    <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                </div>
                                <div >
                                    <p>To send you updates, notifications, and other information related to your use of the App.</p>
                                </div>
                            </div>


                            <span className="wecollectphara">To Ensure Security :</span>

                            <div className="privacy-descrption mt-2">
                                <div>
                                    <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                </div>
                                <div >
                                    <p>Information about your interactions with the App, including access times, pages viewed, and other usage information.</p>
                                </div>
                            </div>
                            <span className="wecollectphara">Device Information :</span>

                            <div className="privacy-descrption mt-2">
                                <div>
                                    <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                </div>
                                <div >
                                    <p>Information about your device, including device type, operating system, unique device identifiers, and mobile network information.</p>
                                </div>
                            </div>


                        </div>
                    </div>
                        <div className="privacy-sec mt-4">
                            <div>
                                <h4>How We Use Collected Information</h4>
                                <h5>We use the information to:</h5>
                                <ul>
                                    <li><FontAwesomeIcon className='bookread' icon={faBookOpenReader} /> Personalize user experience</li>
                                    <li><FontAwesomeIcon className='bookread' icon={faBookOpenReader} /> Improve our Site</li>
                                    <li><FontAwesomeIcon className='bookread' icon={faBookOpenReader} /> Send periodic emails and updates</li>
                                    <li><FontAwesomeIcon className='bookread' icon={faBookOpenReader} /> Respond to inquiries, questions, and
                                        other requests</li>
                                </ul>
                            </div>
                        </div>
                        <div className="privacy-sec mt-4">
                            <div>
                                <h4>How We Protect Your Information</h4>
                                <div className="privacy-descrption">
                                    <div>
                                        <FontAwesomeIcon className='bookread' icon={faBookOpenReader} />
                                    </div>
                                    <div>
                                        <p>We adopt appropriate data collection,
                                            storage, and processing practices
                                            and security measures to protect
                                            against unauthorized access,
                                            alteration, disclosure, or
                                            destruction of your personal
                                            information.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PrivacyPolicy
