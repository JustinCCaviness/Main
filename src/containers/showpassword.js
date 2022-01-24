import {connect} from 'react-redux'
import ShowPassword from '../components/showpassword'
import actions from '../redux/actions'

const mapStateToProps = target => {
    return state => {
        return {
            value: state[target].value,
            valid: state[target].valid,
            type: state[target].type,
            classnames: state[target].classnames,
            checked: state[target].checked 
        }
    }
}

const mapDispatchToProps = target => {
    return dispatch => {
        return {
            actions: {
                type: val => dispatch(actions[target].type(val)),
                value: val => dispatch(actions[target].value(val)),
                valid: val => dispatch(actions[target].valid(val)),
                addClass: val => dispatch(actions[target].classnames.add(val)),
                removeClass: val => dispatch(actions[target].classnames.remove(val)),
                clicked: val => dispatch(actions[target].clicked(val))
            }
        } 
    }
}

export default connect(mapStateToProps('showpassword'), mapDispatchToProps('showpassword'))(ShowPassword)