import * as React from 'react';
import { shallow, configure } from 'enzyme';
import { HelloWorld } from './HelloWorld';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('A HelloWorld Component', () => {
    it('should render', () => {
        expect(shallow(<HelloWorld />).contains('Hello world!')).toEqual(true);
    });
});
