import { lazy, Suspense } from "react";

export default function Lazy({path}: {path: string}) {
	const LazyElement = lazy(() => import(/* @vite-ignore */ '../../../app/' + path));
	return (
		<Suspense>
			<LazyElement></LazyElement>
		</Suspense>
	);
}