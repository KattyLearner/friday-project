

const initialState: any = {
    test: 'test'
}

export const appReducer = (state: any = initialState, action: ActionsType): any => {
    switch (action.type) {
        case 'TEST':
            return {...state}
        default:
            return {...state}
    }
}


export const testReducerAC = () => ({ type: 'TEST'} as const)


export type TestReducerACType = ReturnType<typeof testReducerAC>


type ActionsType =
    | TestReducerACType



