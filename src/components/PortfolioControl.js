import React from 'react';
import NewPortfolioForm from './NewPortfolioForm';
import PortfolioList from './PortfolioList';
import PortfolioDetail from './PortfolioDetail';
import EditPortfolioForm from './EditPortfolioForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions';
import { withFirestore, isLoaded } from 'react-redux-firebase';


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
  handleAddingNewPortfolioToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }
  
  handleChangingSelectedPortfolio = (id) => {
    // const selectedPortfolio = this.props.mainPortfolioList[id];
    // this.setState({selectedPortfolio: selectedPortfolio});
    this.props.firestore.get({collection: 'portfolios', doc: id}).then((portfolio) => {
      const firestorePortfolio = {
        names: portfolio.get("project"),
        location: portfolio.get("skill"),
        issue: portfolio.get("bio"),
        id: portfolio.id
      }
      this.setState({selectedPortfolio: firestorePortfolio });
    });
  }

  handleEditClick =()=> {
    console.log("handleEditClick reached!");
    this.setState({editing : true});
  }
  
  handleEditingPortfolioInList = () => {
    this.setState({
      editing: false,
      selectedTicket: null
    });
  }

render(){
  const auth= this.props.firebase.auth();
  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser == null)) {
    return (
      <React.Fragment>
        <h1>You must be signed in to access the queue.</h1>
      </React.Fragment>
    )
  } 
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    // All of the code previously in our render() method should go in this conditional.
  }
  
  
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
export default withFirestore(PortfolioControl);