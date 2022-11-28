import { useEffect, useState } from "react"

const useAdmin = (email) => {
    const [isAdmin, setIsAdmin] = useState('')
    const [adminLoading, setAdminLoading] = useState(true)
    useEffect(() => {
        fetch(`https://phone-garage-server.vercel.app/users/admin?email=${email}`)
            .then(res => res.json())
            .then(data => {
                if (data?.isAdmin) {
                    setIsAdmin(data.isAdmin)
                    setAdminLoading(false)
                }

            })
    }, [email])
    return [isAdmin, adminLoading]
}
export default useAdmin;