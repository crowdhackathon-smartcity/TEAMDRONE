import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import Toggle from 'material-ui/Toggle';
import WarningIcon from 'material-ui/svg-icons/alert/warning';
import {FlatButton,RaisedButton}from 'material-ui';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';
import Dialog from 'material-ui/Dialog';


import {red500} from 'material-ui/styles/colors';
const styles = {
  propContainer: {
    width: 200,
    overflow: 'hidden',
    margin: '20px auto 0',
  },
  propToggleHeader: {
    margin: '20px auto 10px',
  },
};
const coords = {
  lat: 51.5258541,
  lng: -0.08040660000006028
};
const params = {v: '3.exp', key: 'AIzaSyBOAD8xjBuJWcIiPD-Pf99erAFWG68N5aE'};

const tableData = [
  {
    name: 'John Smith',
    status: 'Employed',
  },
  {
    name: 'Randal White',
    status: 'Unemployed',
  },
  {
    name: 'Stephanie Sanders',
    status: 'Employed',
  },
  {
    name: 'Steve Brown',
    status: 'Employed',
  },
  {
    name: 'Joyce Whitten',
    status: 'Employed',
  },
  {
    name: 'Samuel Roberts',
    status: 'Employed',
  },
  {
    name: 'Adam Moore',
    status: 'Employed',
  },
];

/**
 * A more complex example, allowing the table height to be set, and key boolean properties to be toggled.
 */


export default class TableData extends Component {
  state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: false,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: true,
    height: '300px',
    open: false,
    lat:0,
    long:0,
    x:0,
    y:0,
  };
  handleOpen = () => {
    this.setState({open: true});
    console.log(this.state)
  };

  handleClose = () => {
    this.setState({open: false});
  };
  onMapCreated(map) {
    map.setOptions({
      disableDefaultUI: true
    });
  }

  onDragEnd(e) {
    console.log('onDragEnd', e);
  }

  onCloseClick() {
    console.log('onCloseClick');
  }

  onClick(e) {
    console.log('onClick', e);
  }
  handleToggle = (event, toggled) => {
    this.setState({
      [event.target.name]: toggled,
    });
  };

  handleChange = (event) => {
    this.setState({height: event.target.value});
  };
 showMap(x,y){
   this.setState({x,y})
   console.log(this.state)
 }
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={false}
          multiSelectable={this.state.multiSelectable}
        >
          <TableHeader
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>

            </TableRow>
            <TableRow>
              <TableHeaderColumn >ID</TableHeaderColumn>
              <TableHeaderColumn >TimeStamp</TableHeaderColumn>
              <TableHeaderColumn >Status</TableHeaderColumn>
              <TableHeaderColumn tooltip="show in map" >Location</TableHeaderColumn>
              <TableHeaderColumn >Severity</TableHeaderColumn>
              <TableHeaderColumn >Picture</TableHeaderColumn>

            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index}>
                <TableRowColumn>{index}</TableRowColumn>
                <TableRowColumn>{row.name}</TableRowColumn>
                <TableRowColumn>{row.status}</TableRowColumn>
                <TableRowColumn><FlatButton onClick={()=> this.showMap(37.861033, 23.753663)}>37.861033, 23.753663</FlatButton></TableRowColumn>
                <TableRowColumn><WarningIcon color={red500} /></TableRowColumn>
                <TableRowColumn><FlatButton>show image</FlatButton></TableRowColumn>

              </TableRow>
            ))}
          </TableBody>

        </Table>
        <RaisedButton label="Dialog" onClick={()=>this.handleOpen()} />

        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <Gmaps
            width={'800px'}
            height={'600px'}
            lat={this.state.x}
            lng={this.state.y}
            zoom={12}
            loadingMessage={'Be happy'}
            params={params}
            onMapCreated={this.onMapCreated}>
            <Marker
              lat={this.state.x}
              lng={this.state.y}
              draggable={true}
              onDragEnd={this.onDragEnd} />
            <InfoWindow
              lat={this.state.x}
              lng={this.state.y}
              content={'Hello, React :)'}
              onCloseClick={this.onCloseClick} />
            <Circle
              lat={this.state.x}
              lng={this.state.y}
              radius={500}
              onClick={this.onClick} />
          </Gmaps>
        </Dialog>


      </div>
    );
  }
}


{/*<div style={styles.propContainer}>*/}
  {/*<h3>Table Properties</h3>*/}
  {/*<TextField*/}
    {/*floatingLabelText="Table Body Height"*/}
    {/*defaultValue={this.state.height}*/}
    {/*onChange={this.handleChange}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="fixedHeader"*/}
    {/*label="Fixed Header"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.fixedHeader}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="fixedFooter"*/}
    {/*label="Fixed Footer"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.fixedFooter}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="selectable"*/}
    {/*label="Selectable"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.selectable}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="multiSelectable"*/}
    {/*label="Multi-Selectable"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.multiSelectable}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="enableSelectAll"*/}
    {/*label="Enable Select All"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.enableSelectAll}*/}
  {/*/>*/}
  {/*<h3 style={styles.propToggleHeader}>TableBody Properties</h3>*/}
  {/*<Toggle*/}
    {/*name="deselectOnClickaway"*/}
    {/*label="Deselect On Clickaway"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.deselectOnClickaway}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="stripedRows"*/}
    {/*label="Stripe Rows"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.stripedRows}*/}
  {/*/>*/}
  {/*<Toggle*/}
    {/*name="showRowHover"*/}
    {/*label="Show Row Hover"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.showRowHover}*/}
  {/*/>*/}
  {/*<h3 style={styles.propToggleHeader}>Multiple Properties</h3>*/}
  {/*<Toggle*/}
    {/*name="showCheckboxes"*/}
    {/*label="Show Checkboxes"*/}
    {/*onToggle={this.handleToggle}*/}
    {/*defaultToggled={this.state.showCheckboxes}*/}
  {/*/>*/}
{/*</div>*/}
