import moxios from 'moxios';

import { storeFactory } from '../utils/testUtil';
import { getSecretWord } from './index';

describe('Get secret word action creator', () => {
    beforeEach(()=> {
        moxios.install(); //defers axios request to moxios and not http
    })


    afterEach(()=> {
        moxios.uninstall(); //defers axios request back to http and not axios
    })

    test('should add api response to state', async () => {
        const secretWord = 'party';
        const store = storeFactory();

        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: secretWord
            })
        })
            
            await store.dispatch(getSecretWord())
            const newState = store.getState();
            expect(newState.secretWord).toBe(secretWord);
        
    });
})