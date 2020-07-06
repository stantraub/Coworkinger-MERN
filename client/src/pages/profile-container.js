import { connect } from "react-redux";
import ProfilePage from "./profile";

const msp = (state) => ({
  currentUser: state.session.user
})

export default connect(msp, null)(ProfilePage);
