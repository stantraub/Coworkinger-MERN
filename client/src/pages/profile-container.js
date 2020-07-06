import { connect } from "react-redux";
import ProfilePage from "./Profile";

const msp = (state) => ({
  currentUser: state.session.user
})

export default connect(msp, null)(ProfilePage);
