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

        beforeEach(() => {
            const props = {
                buttonText: "Example button text",
                emitEvent: () => {

                }
            }

            wrapper = shallow(<SharedButton {...props} />)
        })

        it('should render a button ', () => {

            const button = findByTestAttr(wrapper, "buttonComponent");
            expect(button.length).toBe(1)
        })


    })
})