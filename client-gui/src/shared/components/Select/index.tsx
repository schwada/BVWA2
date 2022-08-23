import { Children, cloneElement, useState } from "react";

export default function Select({children, className, value, onChange}: any) {
    const [expanded, setExpanded] = useState(false);

    function select(event: any) {
        setExpanded(false);
        onChange(event)
    }

    return (
        <div tabIndex={0} onBlur={() => setExpanded(false)} onClick={() => setExpanded(!expanded)}>
            <div className={className + " select-none flex justify-between items-center"}>
                {value}

                {expanded ? (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-3 w-4 pl-2 text-inherit opacity-50">
                        <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25
                        0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4
                        348.9 360.2 352 352 352z"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" className="h-3 w-4 pl-2 text-inherit opacity-50">
                        <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192
                        306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
                    </svg>
                )}
            </div>
            {expanded ? (
                <div className="absolute bg-gray-50 border rounded-md mt-2">
                    {Children.map(children, child =>
                        cloneElement(child, {
                            className: `${child.props.className} px-4 py-2 hover:bg-gray-200 duration-150 cursor-pointer border-b last:border-b-0`,
                            onClick: select
                        })
                    )}
                </div>
            ) : null}
        </div>
    );
}