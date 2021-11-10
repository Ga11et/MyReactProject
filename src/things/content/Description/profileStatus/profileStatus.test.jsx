import { act, create } from "react-test-renderer"
import ProfileStatus from "./profileStatus"

describe("ProfileStatus compoent", () => {
    test('p is contains status', () => {
        const testRenderer = create(<ProfileStatus status="Haha" />)
        const testRoot = testRenderer.root
        const p = testRoot.findByType("p")
        expect(p.children[0]).toBe("Haha")
    })
    test('input is contains status when onclick is active', () => {
        let testRenderer
        testRenderer = create(<ProfileStatus status="Haha" />)
        const testRoot = testRenderer.root
        const p = testRoot.findByType("p")
        act(() => {
            p.props.onDoubleClick()
        })
        const input = testRoot.findByType("input")
        expect(input.props.value).toBe("Haha")
    })
    test('p displayed after doubleckick and onBlur', () => {
        const testRenderer = create(<ProfileStatus status="Haha" putStatus={() => null} />)
        const testRoot = testRenderer.root
        let p = testRoot.findByType("p")
        act(() => {
            p.props.onDoubleClick()
        })
        const input = testRoot.findByType("input")
        act(() => {
            input.props.onBlur()
        })
        p = testRoot.findByType("p")
        expect(p.children[0]).toBe("Haha")
    })
})

