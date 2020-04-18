import { connect } from "react-redux";
import UserShow from "./user_show";

const msp = state => {
  return {
    currentUser: state.session.user
  };
};


export default connect(msp, null)(UserShow);
