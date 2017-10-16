import {Sparklines, SparklinesLine, SparklinesReferenceLine} from "react-sparklines";
import React from 'react';
import _ from 'lodash'

const Chart = (props) => {
    function average(data) {
        return _.round(_.sum(data)/data.length);
    }

    return (
        <div>
            <Sparklines data={props.data} height={120} width={180}>
                <SparklinesLine color={props.color}/>
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>{average(props.data)} {props.units}</div>
        </div>
    );
};

export default Chart;