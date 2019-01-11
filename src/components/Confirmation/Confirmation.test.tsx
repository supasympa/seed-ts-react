import * as React from 'react';
import { shallow } from 'enzyme';
import { Confirmation } from './Confirmation';

describe('A HelloWorld Component', () => {
    it('should render', () => {
        expect(shallow(<Confirmation/>).find('.confirmation').contains('Agree')).toBeTruthy();
    });

    it('should contain an agree button', () => {
        const wrapper = shallow(<Confirmation/>);
        expect(wrapper.find('button.agree').length).toEqual(1);
    });

    it('should contain a decline button', () => {
        const wrapper = shallow(<Confirmation/>);
        expect(wrapper.find('button.decline').length).toEqual(1);
    });
});
