import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function Weather() {
       
    return (
        <div className="Header">
          <div className="SearchEngine">
            <SearchEngine />
          </div>
          <Footer />
        </div>

    );
    
}