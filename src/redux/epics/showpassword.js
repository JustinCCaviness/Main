import { filter, mapTo, withLatestFrom } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export default (action$, state$) => action$.pipe(
    ofType('showpassword.CLICKED'),
    withLatestFrom(state$),
    filter(([,state]) => state.showpassword.checked),
    mapTo({ type: 'password.TYPE', payload:'text' })
  ).pipe(
    ofType('showpassword.CLICKED'),
    withLatestFrom(state$),
    filter(([,state]) => !state.showpassword.checked),
    mapTo({type:'password.TYPE', payload:'password'})
  );
  
  // later...
  //dispatch({ type: 'PING' });