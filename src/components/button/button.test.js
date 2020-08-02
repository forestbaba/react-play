import React from 'react';
import { shallow } from 'enzyme'
import { findByTestAttr, checkProps } from '../../utils';
import SharedButton from '../button';


describe('Shared button component', () => {


    describe("Check prop types", () => {
        it('should not THROW a warning', () => {

            const expectedProptypes = {
                buttonText: "Example button text",
                emitEvent: () => {

                }
            }

            const propsError = checkProps(SharedButton, expectedProptypes);
            expect(propsError).toBeUndefined()
        })
    })


    describe('Renders', () => {
        let wrapper;
        let mockFun;

        beforeEach(() => {

            mockFun = jest.fn()

            const props = {
                buttonText: "Example button text",
                emitEvent: mockFun
            }

            wrapper = shallow(<SharedButton {...props} />)
        })

        it('should render a button ', () => {

            const button = findByTestAttr(wrapper, "buttonComponent");
            expect(button.length).toBe(1)
        })

        it('Should emit a callback on click', () => {
            const button = findByTestAttr(wrapper, "buttonComponent")
            button.simulate('click');

            const callback = mockFun.mock.calls.length;
            expect(callback).toBe(1)
        })


    })
})