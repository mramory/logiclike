export type FetchType<DataType = any> = {
    body: DataType,
    headers: {[key: string]: any},
    status: number | undefined,
    success: boolean,
}

export type ErrorMessage = {
    detail: string
    error_code: string
}

export type FetchErrorType = FetchType<ErrorMessage>