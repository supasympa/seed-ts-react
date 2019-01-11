import * as React from 'react';
import { shallow } from 'enzyme';
import { HelloWorld } from './HelloWorld';

describe('A HelloWorld Component', () => {
    it('should render', () => {
        expect(shallow(<HelloWorld />).contains('Hello world!')).toEqual(true);
    });
});
