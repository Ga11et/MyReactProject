
export const required = (value) => {
    if (value === undefined) return "Required field"
    return undefined
}

export const maxLengthCreator = (maxValue) => (value) => {
    if (value && value.length > maxValue) return `Maximum: ${maxValue} simbols`
    return undefined
}

export const submitValidator = (values) => {
    console.log(values)
}