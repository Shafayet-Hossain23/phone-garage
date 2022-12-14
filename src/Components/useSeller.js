import { useEffect, useState } from "react"

const useSeller = (email) => {
    const [isSeller, setIsisSeller] = useState(false)
    const [sellerLoading, setSellerLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://phone-garage-server.vercel.app/users/seller?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data?.isSeller) {
                        setIsisSeller(data.isSeller)
                        setSellerLoading(false)
                    }

                })

        }
    }, [email])
    return [isSeller, sellerLoading]
}
export default useSeller;