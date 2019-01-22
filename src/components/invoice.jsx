import React, { Component } from 'react';

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData:[],
            listData1:[],
            userdata: JSON.parse(localStorage.getItem("user")),
            date:0,
        }
        this.state.listData = JSON.parse(localStorage.getItem("invoice"));
        this.state.listData1 = JSON.parse(localStorage.getItem("provider1")); 
        console.log(this.state.listData1)
        var today = new Date();
        this.state.date=today.getFullYear() + '-' + (today.getMonth() +1) + '-' + today.getDate();
        console.log(this.state.date) 

console.log(this.state.listData)
    }
    componentWillMount(){
        window.scrollTo(0,0)
    }
    render(){
        return(
            <div className="container">
                 <div className="page-head_agile_info_w3l" >
                    <div >
                        <h3>Invoice <span>Page </span></h3>

                        <div className="services-breadcrumb">
                            <div className="agile_inner_breadcrumb">

                                <ul className="w3_short">
                                    <li><a href="/">Home</a><i>|</i></li>
                                    <li>Invoice Page </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                {this.state.listData!=undefined && this.state.listData!=null && this.state.listData!=[] ? (
                 <div style={{backgroundColor:"#DBE6DD"}}>{this.state.listData1.map(b=>
                      <div>{this.state.listData.map(a=>

                            <div  >
                                {console.log(( b.price[b.price.indexOf(a.price)]))}
                            { ( (b.prodId[b.index]) === (a.product_id) ) && ( ( b.price[b.price.indexOf(a.price)]) ===a.price) ?(
   <div >
       {console.log(b.price[b.price.indexOf(a.prodId)])}
                                <div class="card-header" ><h2 style={{textAlign:"left",color:"#EF6F3B",fontFamily: "Fantasy"}}>{b.provider_name}</h2><p style={{textAlign:"left",fontFamily: "Fantasy ",fontSize:"18px"}}>{b.provider_mobile_number},</p><p style={{textAlign:"left",fontFamily:"Fantasy ",fontSize:"20px"}}>{b.provider_address}</p><p style={{textAlign:"right",fontFamily: "Fantasy",fontSize:"20px",color:"#F1A484"}}>{this.state.userdata.name}</p><p style={{textAlign:"right",fontFamily:"Fantasy ",fontSize:"18px"}}>{this.state.userdata.address}<br/>{this.state.userdata.phno}</p></div><br/>
    <div class="card-body" style={{fontFamily:"Arial Black"}}>                     
        <div><br/>
        <p style={{textAlign:"left",fontFamily:"fantasy"}}>INVOICE NUMBER:{a.invoice_number}</p><p style={{textAlign:"left",fontFamily:"fantasy"}}>DATE ISSUED:{this.state.date }</p>
    <div    className="card mb-2 table-responsive">
        <table className=" table table-bordered" style={{align:"center",margin:"auto"}}>
  <thead>
    <tr>
      <th scope="col">DESCRIPTION</th>
      <th scope="col">PRICE</th>
      <th scope="col">QTY</th>
      <th scope="col">TOTAL</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td >{a.product_name}</td>
      <td>{a.price}</td>
     
      <td>{a.quantity}</td>
      <td>{a.price*a.quantity}</td>
    </tr>
  </tbody>
</table></div>

        </div> 
            </div>                  
                       
                </div>):[]}</div>)}</div>)}
                <div style={{minHeight:"100px",backgroundColor:"#EF6F3B",fontFamily:"Fantasy"}}><br/>
                <h2>TOTAL(INCLUDING GST)<br/><i class="fas fa-rupee-sign">{this.state.listData[0].total}</i><br/> </h2>© 2009 - 2018 Digital Marketing & Telecommunication
               

                </div>

                </div>
        )
    :([])}
    </div>
        )  
}
}
export default Invoice;
