import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actions from "./actions"



const mapStateToProps = (state) => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(
    {

    },
    dispatch,
  )
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Naveen))
