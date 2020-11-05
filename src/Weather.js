import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function Weather() {
       
    return (
        <div className="Weather">
          <div className="Header">
            <SearchEngine />
          </div>
          <div className="Body">
            
          </div>
          <div className="Footer">
            <Footer />
          </div>
        </div>

    );
    
}