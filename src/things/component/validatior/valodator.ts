

export const required = (value: string): string | undefined => {
    if (value === undefined) return "Required field"
    return undefined
}

export const maxLengthCreator = (maxValue: number): ((value:string) => string | undefined) => (value: string) => {
    if (value && value.length > maxValue) return `Maximum: ${maxValue} simbols`
    return undefined
}

export const submitValidator = (values: any) => {
    console.log(values)
}