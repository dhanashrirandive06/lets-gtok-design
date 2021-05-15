import React,{Fragment} from "react";
import TopNavbar from "../components/TopNavbar";
import About from "../components/About"
import Blog from "../components/Blog"
import Footer from "../components/Footer";
import Contact from "../components/Contact"
function mainLayout(){
return(
   <Fragment>
 <TopNavbar></TopNavbar>
   <About></About>
   <Blog></Blog>
   <Footer></Footer>
 <Contact></Contact>
   </Fragment>
  
);

}
export default mainLayout;