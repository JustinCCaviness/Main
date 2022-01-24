import {connect} from 'react-redux'
import Password from '../components/password'
import actions from '../redux/actions'

const mapStateToProps = target => {
    return state => {
        return {
            value: state[target].value,
            valid: state[target].valid,
            type: state[target].type,
            classnames: state[target].classnames 
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
                removeClass: val => dispatch(actions[target].classnames.remove(val))
            }
        } 
    }
}

export default connect(mapStateToProps('password'), mapDispatchToProps('password'))(Password)