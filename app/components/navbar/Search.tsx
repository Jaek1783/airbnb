'use client';
import {BiSearch} from 'react-icons/bi'
const Search = () => {
    return (
        <div className="
            border-[1px]
            w-full
            md:w-auto
            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        ">
            <ul className="
                flex
                flex-row
                items-center
                justify-between
            ">
                <li className="
                    text-sm
                    font-semibold
                    px-6
                ">Anywhere</li>
                <li className="
                    hidden
                    md:block
                    border-x-[1px]
                    flex-1
                    text-center
                    text-sm
                    font-semibold
                    px-6
                ">Any Week</li>
                <li className="
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-row
                    items-center
                    gap-3
                ">
                    <div className="
                        hidden
                        sm:block
                    ">Add Guests</div>
                    <div className="
                        p-2
                        bg-rose-500
                        rounded-full 
                        text-white
                    ">
                        <BiSearch size={18}/> 
                    </div>
                </li>
            </ul>
        </div>
    );
}
 
export default Search;