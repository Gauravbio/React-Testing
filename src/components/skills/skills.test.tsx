import {render, screen} from '@testing-library/react';
import { Skill } from './skill';

describe('skills',()=> {
    const skills=['HTML','CSS','JAVASCRIPT']

    test('rendera correctly', ()=> {
        render(<Skill skills={skills} />)
        const listElement=screen.getByRole('list');
        expect(listElement).toBeInTheDocument();
    });

    test('renders a list of skills',()=> {
        render(<Skill skills={skills} />)
        const listItemElements=screen.getAllByRole('listitem');
        expect(listItemElements).toHaveLength(skills.length)
    })
})