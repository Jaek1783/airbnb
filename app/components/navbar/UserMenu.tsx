'use client';

import {AiOutlineMenu} from 'react-icons/ai';
import Avatar from '../Avatar';
import MenuItem from './MenuItem';
import { useCallback, useState } from 'react';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';
import useRentModal from '@/app/hooks/useRentModal';
interface UserMenuProps {
    currentUser : SafeUser | null;
}
const UserMenu:React.FC<UserMenuProps> = ({currentUser}) => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = useCallback(()=>{
        setIsOpen(value => !value)
    },[]);
    const setClose = ()=>{
        setIsOpen(value => !value);
    }

    const onRent = useCallback(()=>{
        if(!currentUser){
            return loginModal.onOpen();
        }
        // open Rent Modal
        rentModal.onOpen();

    },[currentUser, loginModal, rentModal ])

    return (
         <div className="relative">
            <ul className="flex flex-row items-center gap-3">
                <li
                    onClick={onRent}
                    className="
                        hidden
                        md:block
                        text-sm
                        font-semibold
                        py-3
                        px-4
                        rounded-full
                        hover:bg-neutral-100
                        transition
                        cursor-pointer
                    "
                >
                    Airbnb your home
                </li>
                <li 
                    onClick={toggleOpen}
                    className="
                        p-4
                        md:py-1
                        md:px-2
                        border-[1px]
                        border-neutral-200
                        flex
                        flex-row
                        items-center
                        gap-3
                        rounded-full
                        cursor-pointer
                        hover:shadow-md
                        transition
                    ">
                        <AiOutlineMenu/>
                        <div className='
                            hidden
                            md:block
                        '>
                            <Avatar src={currentUser?.image}/>
                        </div>
                </li>
            </ul>
            {isOpen && (
                <div className='
                    absolute
                    rounded-xl
                    shadow-md
                    w-[40vw]
                    md:w-3/4
                    bg-white
                    overflow-hidden
                    right-0
                    top-12
                    text-sm
                '>
                    <ul className='flex flex-col cursor-pointer '>
                        {currentUser ? (
                            <>
                                <li>
                                <MenuItem
                                onClick={()=>{setClose()}}
                                    label='My trips'
                                />
                                </li>
                                <li>
                                    <MenuItem
                                    onClick={()=>{setClose()}}
                                        label='My Favorites'
                                    />
                                </li>
                                <li>
                                    <MenuItem
                                    onClick={()=>{setClose()}}
                                        label='My reservations'
                                    />
                                </li>
                                <li>
                                    <MenuItem
                                    onClick={()=>{setClose()}}
                                        label='My properties'
                                    />
                                </li>
                                <li>
                                    <MenuItem
                                    onClick={()=>{rentModal.onOpen(), setClose()}}
                                        label='Airbnb my home'
                                    />
                                </li>
                                <li><hr/></li>
                                <li>
                                    <MenuItem
                                    onClick={()=>{signOut(), setClose()}}
                                        label='Logout'
                                    />
                                </li>

                            </>
                            
                        ):(
                            <>
                            <li>
                                <MenuItem
                                onClick={()=>{registerModal.onOpen(), setClose()}}
                                    label='Sign-up'
                                />
                            </li>
                            <li>
                                <MenuItem
                                onClick={()=>{loginModal.onOpen(), setClose()}}
                                    label='Login'
                                />
                            </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
         </div>
    );
}
 
export default UserMenu;