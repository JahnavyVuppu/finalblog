import emailjs from 'emailjs-com'
const Mailer = ()=>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_edc6gyu',
        'template_9xlwqng',
        e.target,
        'Qt6u0JvZJYQrA1XSn'
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err))
        ;
    }
    return(
        
        <div class="container border" style={{marginTop:"50px",
        width:'100%',
        
        backgroundImage:`url('https://tse1.mm.bing.net/th?id=OIP.8JGdomgHrqhk4LjsuC_6VwHaDt&pid=Api&P=0&w=365&h=182')`,
        backgroundPosition:'center',
        backgroundSize: "cover",
    }}>
    

            <h2 style={{marginTop:'30px',paddingTop:'30px'}}>Feel Free to Contact Us</h2>
            
            <form className="row" style={{margin:"50px",padding:"2px 400px"}} onSubmit={sendEmail}>
            
                    <table>
                        <tr><td>
                    <label>Enter Your Name: </label></td>
                    <td><input type="text"  name="name"  className="form-control" placeholder="Enter Your Name" style={{width:"300px", height:"20px"}}/>
                    </td>
                    </tr>
                    <tr><td>
                    <label>Contact Number:</label></td>
                    <td><input type="text" name="phone" className="form-control" placeholder="Enter Your Phone Number" style={{width:"300px", height:"20px"}}/></td>
                    </tr>
                    <tr><td><label>Email: </label></td>
                    <td>
                    <input type="email" className="form-control" name="user_email" placeholder="Enter Your Email Id" style={{width:"300px", height:"20px"}}/>
                    </td>
                    </tr><tr><td><label>Message: </label></td>
                    
                    <td>
                    <textarea name="message" className="form-control" id=""  cols="10" rows="3" placeholder="How may we help you?" style={{width:'291px',height:'122px'}}></textarea>
                    </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                    <button class="btn" type='submit' 
                    className="form-control btn btn-primary" 
                    value='Send'
                    style={{marginTop:'30px'}}>Submit</button>
                    </td>
                    </tr>
              </table>
              
        
            </form>
       

    </div>
 
    )

};
export default Mailer;