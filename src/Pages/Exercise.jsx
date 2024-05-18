import Navbar from "../Components/Navbar";
import All from "../Components/All";

import Footer from "../Components/Footer";
const Exercise = ()=>{
    return(
        <>
            <Navbar />
            <h1 className="text-center text-5xl mb-7">All Exercise</h1>
            <All />
            <Footer />
        </>
    )
}

export default Exercise;