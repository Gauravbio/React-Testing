import { render,screen } from "@testing-library/react";
import { Application } from "./Application";

describe('Application',()=> {
    test('renders Correctly',()=> {
        render(<Application />);

        const pageHeading=screen.getByRole('heading',{
            level:1
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading=screen.getByRole('heading',{
            level:2
        })
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement=screen.getByText('All Fields are mandatory');
        expect(paragraphElement).toBeInTheDocument();

        const closeElement=screen.getByTitle('close');
        expect(closeElement).toBeInTheDocument();

        const customElement=screen.getByTestId('custom-element');
        expect(customElement).toBeInTheDocument();

        const imageElement=screen.getByAltText('a person with laptop');
        expect(imageElement).toBeInTheDocument();

        const nameElement=screen.getByRole('textbox',{
            name:'Name'
        });
        expect(nameElement).toBeInTheDocument();

        const nameElement2=screen.getByLabelText('Name',{
            selector: 'input'
        });
        expect(nameElement2).toBeInTheDocument();

        const nameElement3=screen.getByPlaceholderText('Full Name');
        expect(nameElement3).toBeInTheDocument();

        const nameElement4=screen.getByDisplayValue('Vishwas');
        expect(nameElement4).toBeInTheDocument();

        const bioElement=screen.getByRole('textbox',{
            name:'Bio'
        });
        expect(bioElement).toBeInTheDocument();

        const jobLocationElement=screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termElement=screen.getByRole('checkbox');
        expect(termElement).toBeInTheDocument();

        const termElement2=screen.getByLabelText(('I agree to the terms and conditions'));
        expect(termElement2).toBeInTheDocument();

        const submitButton=screen.getByRole('button');
        expect(submitButton).toBeInTheDocument();
    })
});

