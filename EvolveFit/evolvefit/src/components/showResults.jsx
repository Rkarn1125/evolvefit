import React from "react";
import "../App.css";

const ShowResults = (props) => {

  const charfill= {
    position:"absolute",
   
    height: "9.72px",
    width: `${props.consumed1}%`,
    backgroundColor: "#F45C84",
    borderRadius: "6.482px",
    marginTop: "20px",
  };
  const charfill1= {
    position:"absolute",
  
    height: "9.72px",
    width: `${props.consumed2}%`,
    backgroundColor: "#03C6FA",
    borderRadius: "6.482px",
    marginTop: "20px",
  };
  const charfill2= {
    position:"absolute",
  
    height: "9.72px",
    width: `${props.consumed3}%`,
    backgroundColor: "#F0C50F",
    borderRadius: "6.482px",
    marginTop: "20px",
  };

  
  return (
    <div>
      <div className="chart">
        <div className="chart1">
          <div className="charttitle">PROTEIN</div>
          <div className="chartcorner">{props.Targetconsumed1}g</div>
          <div className="chartsmalltitle">{props.consumed1}g</div>
          <div className="bar3">
            <div style={charfill}></div>
          </div>
        </div>
        <div className="chart2">
          <div className="charttitle">FATS</div>
          <div className="chartcorner">{props.Targetconsumed2}g</div>
          <div className="chartsmalltitle">{props.consumed2}g</div>
          <div className="bar3">
            <div style={charfill1}></div>
          </div>
        </div>
        <div className="chart3">
          <div className="charttitle">CARBS</div>
          <div className="chartcorner">{props.Targetconsumed3}g</div>
          <div className="chartsmalltitle">{props.consumed3}g</div>
          <div className="bar3">
            <div style={charfill2}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowResults;
