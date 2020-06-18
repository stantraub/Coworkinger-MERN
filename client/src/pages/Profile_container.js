import { connect } from "react-redux";
import ProfilePage from "./Profile";

const msp = (state) => {
  return {
    currentUser: state.session.user,
  };
};

export default connect(msp, null)(ProfilePage);
