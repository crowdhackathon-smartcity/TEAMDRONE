import React from 'react';
import Paper from 'material-ui/Paper';
import TableData from './table-data';

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
}
const List = ({data}) => {
  console.log(data)
  return (
    <div>

      <Paper style={style} zDepth={2}>
  <TableData />
      </Paper>
    </div>
  );
}

export default List;
