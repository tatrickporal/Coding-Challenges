import React, { Component } from 'react';
import '../index.css';

class WorkingWithData extends Component {
    _output(){
        var idObj = {};
        var alphabeticalObj ={};
        var sortedByTotal = this.props.cars.sort(function(a,b){return b["Total Score"] - a["Total Score"]});
        var count = 0;
        var topTen = [];
        let i = 0;
        while(count < 10 && i < sortedByTotal.length){
            let currentObj = {};
            if(sortedByTotal[i]["Cool Factor"] >= 4 && sortedByTotal[i]["Cool Factor"] <= 7){
                currentObj["Full Name"] = sortedByTotal[i]["Year"].concat(" ",sortedByTotal[i]["Make"]," ",sortedByTotal[i]["Model"]);
                currentObj["Total Score"] = sortedByTotal[i]["Total Score"]
                topTen.push(currentObj);
                count++;
            }
            i++;
        }
        this.props.cars.forEach(car => {
            let curObj = {};
            if(idObj[car["id"]] === undefined){
                idObj[car["id"]] = car; 
            }

            if(alphabeticalObj[car["Make"]] === undefined){
                curObj["make"] = car["Make"];
                curObj["minimumScore"] = car["Total Score"];
                curObj["maximumScore"] = car["Total Score"];
                alphabeticalObj[car["Make"]] = curObj; 
            } else {
                if(alphabeticalObj[car["Make"]]["minimumScore"] > car["Total Score"]){
                    alphabeticalObj[car["Make"]]["minimumScore"] = car["Total Score"]
                }
                if(alphabeticalObj[car["Make"]]["maximumScore"] < car["Total Score"]){
                    alphabeticalObj[car["Make"]]["maximumScore"] = car["Total Score"]
                }
            }
        });

        console.log("==========");
        console.log("Question 1 (Vehicle ID Key) Below");
        console.log(idObj); 
        console.log("==========");
        console.log("Question 2 (Top 10 Total Score) Below");
        console.log(topTen);
        console.log("==========");
        console.log("Question 3 (Alphabetical Min and Max) Below");
        //https://www.w3schools.com/js/js_array_sort.asp
        console.log(Object.values(alphabeticalObj).sort(function(a,b) {return (a.make > b.make) ? Infinity : ((b.make > a.make) ? -Infinity : 0)}));
    }
    render() {
        return (
            <div className="container">
                <p>
                    Working with Data: Press button and observe output in browser console
                </p> 
                <button onClick={this._output.bind(this)}>
                    See output from the tasked questions
                </button>
            </div>
        );
    }
}

export default WorkingWithData;
