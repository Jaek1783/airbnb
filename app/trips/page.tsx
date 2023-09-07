import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import TripsClinet from "./TripsClient";

import getCurrentUser from "../actions/getCurrentUser";
import getReservations from "../actions/getReservations";

const TripsPage = async () =>{
    const currentUser = await getCurrentUser();
     
    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState
                    title="Unauthorized"
                    subtitle="Please Login"
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({
        userId: currentUser.id
    });
    if(reservations.length === 0){
        return (
            <ClientOnly>
                <EmptyState
                    title="No trips Found"
                    subtitle="Look like you havent reserved any trips."
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <TripsClinet
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}
export default TripsPage;