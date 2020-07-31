import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../utils';
import Listitem from './index'


describe('List item component', () => {
    describe('Checking proptypes', () => {

        it('should NOT throw a warning', () => {

            const expectedProps = {
                title: "Example title",
                desc: "Some text"
            };

            const propsError = checkProps(Listitem, expectedProps);
            expect(propsError).toBeUndefined();
        })
    })

    describe('Component renders', () => {
        let wrapper;

        beforeEach(() => {
            const props = {
                title: "Example title",
                desc: "Some text"
            }

            wrapper = shallow(<Listitem {...props} />)
        })
        it('Should render without error', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(1)

        })

        it('Should render a title', () => {
            const title = findByTestAttr(wrapper, 'componentTitle');
            expect(title.length).toBe(1);
        })

        it('Should render a desc', () => {

            const desc = findByTestAttr(wrapper, 'componentDesc');
            expect(desc.length).toBe(1)
        })
    })

    describe('should NOT render', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                desc: "Some text"
            }

            wrapper = shallow(<Listitem {...props} />)
        })
        it('Should NoT render', () => {
            const component = findByTestAttr(wrapper, 'listItemComponent');
            expect(component.length).toBe(0)

        })
    })
})