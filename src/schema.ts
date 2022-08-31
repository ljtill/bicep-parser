export interface ResourceDefinitions {
    id: string
    $schema: string
    title: string
    description: string
    type: string
    allOf: AllOf[]
}

export interface AllOf {
    $ref: string
    oneOf: OneOf[]
}

export interface OneOf {
    $ref: string
}
