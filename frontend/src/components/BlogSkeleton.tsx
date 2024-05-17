import { Circle } from "./BlogCard";

export const BlogSkeleton = () => {
	return (
        <div>
            <div role="status" className="animate-pulse">
			<div className="p-4 border-b border-slate-200 pb-4 w-screen max-w-screen-md cursor-pointer">
				<div className="flex">
					<div className="h-4 w-4 bg-gray-200 rounded-full mb-4"></div>
					<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
					<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
					<div className="pl-2 flex justify-center flex-col">
						<Circle />
					</div>
					<div className="pl-2 font-thin text-slate-500 text-sm flex justify-center flex-col">
						<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
					</div>
				</div>
				<div className="text-xl font-semibold pt-2">
					<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
				</div>
				<div className="text-md font-thin">
					<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
				</div>
				<div className="text-slate-500 text-sm font-thin pt-4">
					<div className="h-2 bg-gray-200 rounded-full mb-2.5"></div>
				</div>
			</div>
			<span className="sr-only">Loading...</span>
		</div>
        </div>
	);
};import { Appbar } from "./AppBar"

export const FullBlogSkeleton = () =>{
    return (
    <div>
        <Appbar />
        <div className="flex justify-center">
            <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
                <div className="col-span-8">
                    <div className="animate-pulse bg-gray-200 h-10 w-full mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-1/2 mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-3/4 mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-full mb-4"></div>
                </div>
                <div className="col-span-4">
                    <div className="animate-pulse bg-gray-200 h-10 w-full mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-full mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-full mb-4"></div>
                    <div className="animate-pulse bg-gray-200 h-6 w-full mb-4"></div>
                </div>
            </div>
        </div>
    </div>
    );
}