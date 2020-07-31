import React from 'react';
import { shallow } from 'enzyme';
import Headline from './index'
import { findByTestAttr } from '../../utils'


const setup = (props = {}) => {

    const component = shallow(<Headline {...props} />);
    return component;
}

describe("Headline component", () => {

    describe("Have props", () => {

        let wrapper;
        beforeEach(() => {

            const props = {
                header: "Test Header",
                desc: "Sample desc"
            }
            wrapper = setup(props)
        })

        it('should render without error', () => {
            const component = findByTestAttr(wrapper, "HeadLineComponent");
            expect(component.length).toBe(1)
        })

        it('should render h1', () => {
            const h1 = findByTestAttr(wrapper, 'header')
            expect(h1.length).toBe(1)
        })

        it('should render a description', () => {
            const desc = findByTestAttr(wrapper, 'desc')
            expect(desc.length).toBe(1)
        })
    });

    describe("Have no props", () => {

        let wrapper;
        beforeEach(() => {
            wrapper = setup();
        })

        it('should not render', () => {
            const component = findByTestAttr(wrapper, "HeadLineComponent");
            expect(component.length).toBe(0)

        })

    })
})