import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from '@/app/libs/prismadb';

interface IParams {
    listingId ? : string;
}

export async function POST(
    request:Request,
    {params}:{params:IParams}
){
    const currentUser = await getCurrentUser();
    
    if(!currentUser){
        return NextResponse.error();
    }
    const {listingId} = params;

    if(!listingId || typeof listingId  != 'string'){
        throw new Error('Invaild ID')
    }
    let favoritesIds = [...(currentUser.favoriteIds || [])]
    
    favoritesIds.push(listingId);
    const user = await prisma.user.update({
        where:{
            id:currentUser.id
        },
        data:{
            favoriteIds:favoritesIds
        }
    })
    return NextResponse.json(user)
}
export async function DELETE(
    request:Request,
    {params}:{params:IParams}
){
    const currentUser = await getCurrentUser();
    
    if(!currentUser){
        return NextResponse.error();
    }
    const {listingId} = params;

    if(!listingId || typeof listingId  != 'string'){
        throw new Error('Invaild ID')
    }
    let favoritesIds = [...(currentUser.favoriteIds || [])]
    
    favoritesIds = favoritesIds.filter((id)=> id != listingId )

    const user = await prisma.user.update({
        where:{
            id:currentUser.id
        },
        data:{
            favoriteIds:favoritesIds
        }
    })
    return NextResponse.json(user)
}

