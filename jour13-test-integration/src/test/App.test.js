import App from "../App"
/* import { render , unmountComponentAtNode} from "react-dom"
import {  act } from "react-dom/test-utils" */
import {render , screen} from "@testing-library/react"

describe("App", function(){
    test("tester que le composant contient le texte App dans une div" , function(){
        render(<App /> )
        const div = screen.getByText(/App/, {selector : "div"})
       
        expect(div).toBeInTheDocument();
    })

} )

