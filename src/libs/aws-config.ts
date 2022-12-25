import Cookies from 'universal-cookie'

const vite_identity_url = import.meta.env.VITE_IDENTITY_URL
const vite_core_url = import.meta.env.VITE_CORE_URL
const vite_socket_url = import.meta.env.VITE_SOCKET_URL
const cookies = new Cookies()

export const endpoints = [
    {
        name: "VITE_IDENTITY_URL", endpoint: vite_identity_url,
    },
    {
    name: "VITE_AI_URL",
    endpoint:
        "https://qnanswer-api.pk25mf6178910.eu-west-3.cs.amazonlightsail.com/q_and_a",
    },
    {
    name: "VITE_SOCKET_URL",
    endpoint: vite_socket_url,
    },
    {
    name: "VITE_CORE_URL",
    endpoint: vite_core_url,
    custom_header: async () => {
        return {
        "X-Zapi-Auth-Token": `Bearer ${cookies.get("accessToken")}`,
        };
    },
    },
]