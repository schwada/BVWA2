import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { signOut, useAuth } from "../../store/auth";
import toast from "react-hot-toast/headless";
import { useRef, useState } from "react";
import { useCart } from "../../store/cart";

const navLinkStyle = ({isActive}: any) => "px-3 py-2 mx-1 rounded-md duration-150 " + (isActive ? "bg-slate-300" : "hover:bg-slate-400");

export default function Header() {

	const { t, i18n } = useTranslation();
	const refChangeLanguage = useRef<HTMLDetailsElement>(null);
	const user = useAuth(state => state.user);
	const cart = useCart(state => state.items);
	const navigate = useNavigate();

	const changeLanguage = (lang: any) => {
		refChangeLanguage?.current?.removeAttribute("open");
		window.localStorage.setItem('locale', lang);
		i18n.changeLanguage(lang);
	};

	const logout = () => {
		signOut().then(() => {
			toast(t('general.signout'), { duration: 5000, className: "toast-success"});
			navigate("/");
		})
	}

	return (
		<header className="w-full flex justify-center bg-slate-200">
			<div className="w-10/12 h-16 flex justify-between items-center text-gray-500 font-sans">
				<div><NavLink to="/" className="font-extrabold">Maker</NavLink></div>
				<div className="flex">
					<nav className="flex pr-2">
						<NavLink to="/" className={navLinkStyle}>{t('menu.home')}</NavLink>
						{ user && <NavLink to="/dashboard" className={navLinkStyle}>{t('menu.dashboard')}</NavLink>}
					</nav>
	
					{ user ? (
						<>
						<NavLink to="/store/cart" className="flex ml-5 mx-1 px-2 py-2 cursor-pointer rounded-md duration-150 hover:bg-slate-400">
							Cart
							<span className="ml-1 bg-slate-300 rounded-md text-white px-1">
								{cart.length}
							</span>
						</NavLink>
						<div onClick={logout} className="flex mx-1 px-2 py-2 cursor-pointer rounded-md duration-150 hover:bg-slate-400">
							{t('menu.logout')}
						</div>
						</>
					) : (
						<NavLink to="/auth/login" className="flex ml-5 mx-1 px-2 py-2 cursor-pointer rounded-md duration-150 hover:bg-slate-400">
							{t('menu.login')}
						</NavLink>
					)}
					
					{/* <svg className="w-6 h-6" fill="none"stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> */}
						{/* <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 */}
						{/* // 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"> */}
						{/* </path> */}
					{/* </svg> */}
					
					<div className="flex">
						<details ref={refChangeLanguage}>
							<summary className="px-2 py-2 list cursor-pointer rounded-md duration-150 hover:bg-slate-400">
								{i18n.resolvedLanguage}
							</summary>
							<div className="absolute bg-gray-50 border rounded-md mt-2 flex flex-col">
								{i18n.languages.map((m) => (
									<button type="button" key={m} onClick={() => changeLanguage(m)} 
									className="px-4 py-2 hover:bg-gray-200 duration-150 cursor-pointer border-b last:border-b-0">
										{m}
									</button>
								))}
							</div>
						</details>
					</div>

					
				</div>
			</div>
		</header>
	);
}
