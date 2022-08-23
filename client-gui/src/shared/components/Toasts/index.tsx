import { useToaster } from 'react-hot-toast/headless';
import './index.css';

export default function Toasts() {
	const { toasts, handlers } = useToaster();
	const { startPause, endPause } = handlers;
	
	return (
		<div className="fixed top-4 transform-center" onMouseEnter={startPause} onMouseLeave={endPause}>
			{toasts.map((toast: any) => (
				<div className={toast.className + ` duration-150 text-center text-lg px-5 py-3 ease-in-out my-3 rounded-md ${toast.visible ? 'opacity-100' : 'opacity-0'}`} 
				key={toast.id} {...toast.ariaProps}>
					{toast.message}
				</div>
			))}
		</div>
	);
}