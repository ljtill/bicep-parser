export interface Template {
    $schema: string
    contentVersion: string
    metadata?: Metadata
    parameters?: Parameter[]
    variables?: Variable[]
    resources: Resource[]
    outputs?: Output[]
}

export interface Metadata {
    _generator: Generator
}

export interface Generator {
    name: string
    version: string
    templateHash: string
}

export interface Parameter {}

export interface Variable {}

export interface Resource {
    type: string
    apiVersion: string
    name: string
    location?: string
    properties?: Properties
}

export interface Properties {}

export interface Output {}