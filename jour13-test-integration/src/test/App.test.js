import App from "../App"
import { render , unmountComponentAtNode} from "react-dom"
import { act } from "react-dom/test-utils"


describe("App", function(){

    let container = null

    test("tester que le composant contient le texte App dans une div" , function(){
        act(function(){
            render(<App /> , container)
        })
        const div = container.querySelector("div");
        expect(div.textContent).toBe("App");
    })

} )

