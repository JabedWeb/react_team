import "./Team.css"

const Team = ({title,content,layout,bg}) => {
    return ( 
        <div style={{backgroundColor : bg}}  className={'Team ' +layout}>
            <div className="container">
            <div className="col">
                <h1>{title}</h1>
                <p>{content} </p>
            </div>
        <div className="row">
                <div className="col-md-4">
                    <div className="Team_member">
                        <img src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg" alt=""/>
                        <h1>Jabed Hasan</h1>
                        <h5>IOS Developer</h5>
                        <h6>Mirpur</h6>
                    </div>
            
                </div>
                <div className="col-md-4">
                    <div className="Team_member">
                        <img src="https://media.istockphoto.com/photos/smiling-indian-man-looking-at-camera-picture-id1270067126?k=20&m=1270067126&s=612x612&w=0&h=ZMo10u07vCX6EWJbVp27c7jnnXM2z-VXLd-4maGePqc=" alt=""/>
                        <h1>Saki Salman</h1>
                        <h5>Mern Stack Developer</h5>
                        <h6>Mirpur</h6>
                    </div>
            
                </div>
                <div className="col-md-4">
                    <div className="Team_member">
                        <img src="https://media.istockphoto.com/photos/smiling-man-outdoors-in-the-city-picture-id1179420343?k=20&m=1179420343&s=612x612&w=0&h=G2UGMVSzAXGAQs3pFZpvWlHNRAzwPIWIVtSOxZHsEuc=" alt=""/>
                        <h1>Imran</h1>
                        <h5>PHP Developer</h5>
                        <h6>Mirpur</h6>
                    </div>
            
                </div>
            </div>
        </div>
        </div>
     );
}
 
export default Team