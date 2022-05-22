function Card({ title, description, path }: CardProps) {
	return (
		<a
			href={path}
			className='md:my-4 md:mx-4 mx-0 my-2 p-6 text-left	no-underline border border-gray-200	rounded-lg md:max-w-xs max-w-sm hover:text-blue-700 active:text-blue-700 focus:text-blue-700 
                hover:border-blue-700 active:border-blue-700 focus:border-blue-700'
		>
			<h2 className='mb-4 text-2xl'>{title} &rarr;</h2>
			<p className='m-0 text-xl'>{description}</p>
		</a>
	);
}

interface CardProps {
	title: string;
	description: string;
	path: string;
}
export default Card;
