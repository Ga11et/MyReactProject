import { create } from "react-test-renderer"
import { ErrorSpan } from "./error"


test('Check Error component', () => {

    const component = create(<ErrorSpan content="Haha" />)
    const root = component.root
    const span = root.findByType("span")
    expect(span.children[0]).toBe("Haha")
}) 