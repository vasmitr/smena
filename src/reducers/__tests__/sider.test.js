import siderReducer from '../sider'
import {changeCollapse} from 'actions/siderActions'

describe('Sider reducer', () => {
    test('#reducer init value', () => {
        expect(siderReducer(undefined, {})).toEqual({'collapsed': false})
    });
    [
        ['collapsed', changeCollapse]
    ].forEach(([name, actionCreator]) => {
        test(`${name}`, () => {
            const initState = siderReducer(undefined, {});
            expect(
                siderReducer(initState, actionCreator(true))[name]
            ).toEqual(true);
        });
    })
});