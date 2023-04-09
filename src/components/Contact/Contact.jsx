import "./Contact.css";

export const Contact = () => {
    return (
            <div className="footer" id="_contact">
                <div className="opening_hours">
                    <h1>Hours</h1>
                    <hr />
                    <br />
                        MON-FRI: 10:00am to 6:00pm <br />
                        SAT-SUN : 6am to 6pm
                </div>
                <div className="reviews">
                    <h1>Reviews</h1>
                    <hr />
                    <br />
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i></span>
                    <span><i className="fa-solid fa-star"></i><br /></span>
                    <span>
                         <em>"This 5-star sweet restaurant is a must-visit!<br />
                         The delicious desserts make for an unforgettable&nbsp;experience."<br/> 
                         - Elon Musk</em>
                    </span>
                </div>
                <div className="contact">   
                    <h1>Contact</h1>
                    <hr />
                    <br />
                    Ph: +91 0000000000 <br />    
                    Email : pleasedontcontact@gmail.com <br />
                    <span>Address:</span> <br />
                    Nowhere, Somewhere on Earth
                </div>
            </div>
    )
};