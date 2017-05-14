import React from 'react';
import Paper from 'material-ui/Paper';
import imgWind from './wind.png';

const style = {
  height: 300,
  width: 250,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};
const _toDate = function(time){
  return new Date(time);
}
const getLast =  function(obj){
  return obj[Object.keys(obj)[0]].speed
}
const getLastDate = function(obj){
  console.log(obj)
  return new Date(obj[Object.keys(obj)[0]].timestamp)
}
const _math = function(para){
  return Math.floor(para)
  // getLast(data).toString()
}
const Wind = ({data}) => {
  console.log(data)
  return (
    <div>

      <Paper style={style} zDepth={2}>
        <img style={{height: '48px',width:'auto'}} src={imgWind} />
        <br />

        <div>

          <br />
          <div>

        <span>
          {data["-KX6OwQWJYTg3Hj6H_yO"] && _math(data[Object.keys(data)[0]].speed)}<sup>Km/h</sup>
        </span>
          </div>
          <br />
          <span>
          Τελευταία Μέτρηση:{data["-KX6OwQWJYTg3Hj6H_yO"] && getLastDate(data).toString()}
        </span>
        </div>
      </Paper>
    </div>
  );
}

export default Wind;
