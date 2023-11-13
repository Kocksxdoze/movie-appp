
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
            <div className="bg-transparent rounded  py-5 px-7">
                <nav className="flex justify-between">
                    <div className="flex items-center space-x-10 lg:pr-96 pr-6">

                        <img src="/img/logo.png" />
                    </div>
                    {/* For medium and plus sized devices */}
                    <ul className="hidden md:flex flex-auto space-x-2">
                        <Link to={`/`} >
                            <li
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white  cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                            >
                                Home
                            </li>
                        </Link>
                        <Link to={`/movies`} >
                            <li
                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                            >
                                Movies
                            </li>
                        </Link>
                        <li
                            className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                        >
                            Series
                        </li>
                        <Link to={`/`} >
                            <li

                                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white-600   cursor-pointer px-3 py-2.5 font-normal text-xm leading-3 rounded"
                            >
                                My list
                            </li>
                        </Link>

                    </ul>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.1988 11.6083H12.3648L12.0691 11.3234C12.7289 10.5574 13.2112 9.65499 13.4813 8.6809C13.7514 7.70682 13.8028 6.6851 13.6317 5.68886C13.1355 2.7555 10.6861 0.413034 7.72986 0.0542773C6.69056 -0.0771269 5.63496 0.0308227 4.64383 0.369866C3.6527 0.708909 2.75231 1.27006 2.01156 2.01038C1.2708 2.75069 0.709324 3.65056 0.370083 4.64111C0.0308408 5.63166 -0.0771721 6.68664 0.0543092 7.72533C0.413276 10.6798 2.75712 13.1278 5.6922 13.6237C6.68902 13.7947 7.71134 13.7434 8.68599 13.4734C9.66065 13.2034 10.5635 12.7215 11.3301 12.0621L11.6151 12.3575V13.1911L16.1022 17.6755C16.5351 18.1082 17.2425 18.1082 17.6753 17.6755C18.1082 17.2429 18.1082 16.536 17.6753 16.1033L13.1988 11.6083ZM6.86412 11.6083C4.23521 11.6083 2.11309 9.48746 2.11309 6.86009C2.11309 4.23273 4.23521 2.11185 6.86412 2.11185C9.49302 2.11185 11.6151 4.23273 11.6151 6.86009C11.6151 9.48746 9.49302 11.6083 6.86412 11.6083Z" fill="white" />
                            </svg>
                            <div className="animate-ping w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto duration-200" />
                            <div className=" w-1.5 h-1.5 bg-indigo-700 rounded-full absolute -top-1 -right-1 m-auto shadow-lg" />
                        </div>
                        <svg
                            className="cursor-pointer  focus:outline-none focus:ring-2 focus:ring-offset-2 border-white"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
                                stroke="white"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 20C8.63333 20 7.34167 19.7373 6.125 19.212C4.90833 18.6873 3.846 17.9707 2.938 17.062C2.02933 16.154 1.31267 15.0917 0.788 13.875C0.262667 12.6583 0 11.3667 0 10C0 8.61667 0.262667 7.321 0.788 6.113C1.31267 4.90433 2.02933 3.846 2.938 2.938C3.846 2.02933 4.90833 1.31233 6.125 0.787C7.34167 0.262333 8.63333 0 10 0C11.3833 0 12.679 0.262333 13.887 0.787C15.0957 1.31233 16.154 2.02933 17.062 2.938C17.9707 3.846 18.6873 4.90433 19.212 6.113C19.7373 7.321 20 8.61667 20 10C20 11.3667 19.7373 12.6583 19.212 13.875C18.6873 15.0917 17.9707 16.154 17.062 17.062C16.154 17.9707 15.0957 18.6873 13.887 19.212C12.679 19.7373 11.3833 20 10 20ZM10 17.95C10.4333 17.35 10.8083 16.725 11.125 16.075C11.4417 15.425 11.7 14.7333 11.9 14H8.1C8.3 14.7333 8.55833 15.425 8.875 16.075C9.19167 16.725 9.56667 17.35 10 17.95ZM7.4 17.55C7.1 17 6.83767 16.429 6.613 15.837C6.38767 15.2457 6.2 14.6333 6.05 14H3.1C3.58333 14.8333 4.18733 15.5583 4.912 16.175C5.63733 16.7917 6.46667 17.25 7.4 17.55ZM12.6 17.55C13.5333 17.25 14.3623 16.7917 15.087 16.175C15.8123 15.5583 16.4167 14.8333 16.9 14H13.95C13.8 14.6333 13.6127 15.2457 13.388 15.837C13.1627 16.429 12.9 17 12.6 17.55ZM2.25 12H5.65C5.6 11.6667 5.56233 11.3373 5.537 11.012C5.51233 10.6873 5.5 10.35 5.5 10C5.5 9.65 5.51233 9.31267 5.537 8.988C5.56233 8.66267 5.6 8.33333 5.65 8H2.25C2.16667 8.33333 2.104 8.66267 2.062 8.988C2.02067 9.31267 2 9.65 2 10C2 10.35 2.02067 10.6873 2.062 11.012C2.104 11.3373 2.16667 11.6667 2.25 12ZM7.65 12H12.35C12.4 11.6667 12.4377 11.3373 12.463 11.012C12.4877 10.6873 12.5 10.35 12.5 10C12.5 9.65 12.4877 9.31267 12.463 8.988C12.4377 8.66267 12.4 8.33333 12.35 8H7.65C7.6 8.33333 7.56267 8.66267 7.538 8.988C7.51267 9.31267 7.5 9.65 7.5 10C7.5 10.35 7.51267 10.6873 7.538 11.012C7.56267 11.3373 7.6 11.6667 7.65 12ZM14.35 12H17.75C17.8333 11.6667 17.896 11.3373 17.938 11.012C17.9793 10.6873 18 10.35 18 10C18 9.65 17.9793 9.31267 17.938 8.988C17.896 8.66267 17.8333 8.33333 17.75 8H14.35C14.4 8.33333 14.4373 8.66267 14.462 8.988C14.4873 9.31267 14.5 9.65 14.5 10C14.5 10.35 14.4873 10.6873 14.462 11.012C14.4373 11.3373 14.4 11.6667 14.35 12ZM13.95 6H16.9C16.4167 5.16667 15.8123 4.44167 15.087 3.825C14.3623 3.20833 13.5333 2.75 12.6 2.45C12.9 3 13.1627 3.57067 13.388 4.162C13.6127 4.754 13.8 5.36667 13.95 6ZM8.1 6H11.9C11.7 5.26667 11.4417 4.575 11.125 3.925C10.8083 3.275 10.4333 2.65 10 2.05C9.56667 2.65 9.19167 3.275 8.875 3.925C8.55833 4.575 8.3 5.26667 8.1 6ZM3.1 6H6.05C6.2 5.36667 6.38767 4.754 6.613 4.162C6.83767 3.57067 7.1 3 7.4 2.45C6.46667 2.75 5.63733 3.20833 4.912 3.825C4.18733 4.44167 3.58333 5.16667 3.1 6Z" fill="white" />
                        </svg>
                    </div>
                </nav>
                {/* for smaller devcies */}

            </div>
        </div>

    )
}

