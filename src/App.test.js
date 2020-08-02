import React from 'react'
import App from './App';
import { findByTestAttr, testStore } from './utils'
import { shallow } from 'enzyme'


const setUp = (initialState = {}) => {
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store} />).childAt(0).dive()
    return wrapper;
}
describe("App componet", () => {
    let wrapper;

    beforeEach(() => {

        const initialState = {
            posts: [{
                title: "Exapmple this  1",
                body: 'test'
            }, {
                title: "Exapmple this  2",
                body: 'test'
            }, {
                title: "Exapmple this 3",
                body: 'test'
            }]
        }
        wrapper = setUp(initialState)
    })

    it('Should render without errors', () => {
        const component = findByTestAttr(wrapper, 'appComponent');
        expect(component.length).toBe(1)
    })

    it('handleHideButton Method should behave as expected', () => {
        const classInstance = wrapper.instance()
        classInstance.handleHideButton()
        const newState = classInstance.state.hideButton;
        expect(newState).toBe(true)
    })
})