export interface Resource {
    namespace: string
    type: string
    apiVersion: string
    childResource?: ChildResource
}

export interface ChildResource {
    type: string
}