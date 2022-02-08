import React from 'react';
import NewPortfolioForm from './NewPortfolioForm';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import EditPortfolioForm from './EditPortfolioForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
// import * as a from './../actions';

class PortfolioControl extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      selectedPortfolio : null,
      editing : false
    };
  }

  handleClick = ()=> {
    if (this.state.selectedPortfolio != null){
      this.setState({
        selectedPortfolio : null,
        editing: false
      });
    } else {
        const { dispatch } = this.props;
        const action = {
          type: 'TOGGLE_FORM'
        }
        dispatch(action);
    }
  }
  handleAddingNewPortfolioToList = (newPortfolio) => {
    const { dispatch } = this.props;
    const { id, project, skill, bio } = newPortfolio;
    const action = {
      type: 'ADD_PORTFOLIO',
      id: id,
      project: project,
      skill: skill,
      bio: bio,
    }
    dispatch(action);
    const action2 = {
      type: 'TOGGLE_FORM'
    }
    dispatch(action2);
  }
  
  handleChangingSelectedPortfolio = (id) => {
    const selectedPortfolio = this.props.mainPortfolioList[id];
    this.setState({selectedPortfolio: selectedPortfolio});
  }
  handleEditClick =()=> {
    console.log("handleEditClick reached!");
    this.setState({editing : true});
  }
  
  handleEditingPortfolioInList = (portfolioToEdit) => {
    const { dispatch } = this.props;
    const { id, project, skill, bio } = portfolioToEdit;
    const action = {
      type: 'ADD_PORTFOLIO',
      id: id,
      project: project,
      skill: skill,
      bio: bio,
    }
    dispatch(action);
    this.setState({
      editing: false,
      selectedPortfolio: null
    });
  }

render(){
  let currentlyVisibleState = null;
  let buttonText = null;

  if (this.state.editing ) {      
    currentlyVisibleState = <EditPortfolioForm portfolio = {this.state.selectedPortfolio} onEditPortfolio = {this.handleEditingPortfolioInList} />
    buttonText = "Return to Portfolio List";
  } else if (this.state.selectedPortfolio != null) {
    currentlyVisibleState = 
    <PortfolioDetail 
      portfolio = {this.state.selectedPortfolio}  
      onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Portfolio List";
  } else if (this.props.formVisibleOnPage) { 
    currentlyVisibleState = <NewPortfolioForm onNewPortfolioCreation={this.handleAddingNewPortfolioToList}  />;
    buttonText = "Return to Portfolio List";
  } else {
    currentlyVisibleState = <PortfolioList portfolioList={this.props.mainPortfolioList} onPortfolioSelection={this.handleChangingSelectedPortfolio} />;
    buttonText = "Add Portfolio";
  }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  );
  }
}



PortfolioControl.propTypes = {
  mainPortfolioList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    mainPortfolioList: state.mainPortfolioList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
PortfolioControl = connect(mapStateToProps)(PortfolioControl);
export default PortfolioControl;