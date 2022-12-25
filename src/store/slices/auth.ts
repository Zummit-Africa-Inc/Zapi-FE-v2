import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'

import { UserProfileType } from '../../types'

// const coreUrl = import.meta.env.VITE_CORE_URL as string
const identityUrl = import.meta.env.VITE_IDENTITY_URL as string
const cookies = new Cookies()

interface IUser {
    user: UserProfileType | null
    isLoggedIn: boolean
}

const initialState:IUser = {
    user: null,
    isLoggedIn: false
}

export const getProfile = createAsyncThunk('get-profile', async(userId: string, thunkAPI) => {
    const headers = {
        'X-Zapi-Auth-Token': `Bearer ${cookies.get('accessToken')}`,
        'Content-Type': 'application/json'
    }
    try {
        const response = await fetch(`${identityUrl}/profile/${userId}`, {
            method: 'GET',
            headers
        })
        const data = await response.json()
        return data
    } catch (error: any) {
        return thunkAPI.rejectWithValue(error?.message)
    }
})

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
            localStorage.setItem('zapi-user', JSON.stringify(action.payload))
        },
        logout: (state, action) => {
            state.user = null
            state.isLoggedIn = false
            localStorage.removeItem('zapi-user')
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state, action) => {}),
        builder.addCase(getProfile.fulfilled, (state, action) => {}),
        builder.addCase(getProfile.rejected, (state, action) => {})
    },
})

export const {login, logout} = auth.actions
export default auth.reducer