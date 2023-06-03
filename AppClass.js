import React from "react";
import State from "./class/State";
import SetState from "./class/SetState";
import Props from "./class/Props";
import DescProps from "./class/DescProps";
import DescState from "./class/DescState";
import EventHandle from "./class/EventHandle";
import SetStateCount from "./class/SetStateCount";
import Constructor from "./class/LifeCycle/Constructor";
import GetApi from "./class/GetApi";
import ShowData from "./class/ShowData";


class AppClass extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <State />
                <SetState />
                <Props name="shashi" />
                <DescProps name="shahsi" place="Gorakhpur" />
                <DescState />
                <EventHandle />
                <SetStateCount/>
                <Constructor /> */}
                {/* <GetApi/> */}
                <ShowData/>
            </React.Fragment>
        )
    }
}
export default AppClass