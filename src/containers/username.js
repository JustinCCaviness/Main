import {connect} from 'react-redux'
import Username from '../components/username'
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
                add: val => dispatch(actions[target].classnames.add(val)),
                remove: val => dispatch(actions[target].classnames.remove(val))
            }
        }
    }
}

export default connect(mapStateToProps('username'), mapDispatchToProps('username'))(Username)